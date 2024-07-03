load("@bazel_skylib//rules:write_file.bzl", "write_file")
load("@aspect_rules_js//npm:defs.bzl", "npm_package")
load("@aspect_bazel_lib//lib:copy_to_directory.bzl", "copy_to_directory")
load("@aspect_rules_esbuild//esbuild:defs.bzl", "esbuild")
load("@npm//:history-server/package_json.bzl", history_server_bin = "bin")
load("@npm//:html-insert-assets/package_json.bzl", html_insert_assets_bin = "bin")
load("//tools:ng.bzl", "ng_esbuild", "ng_project")
load("//tools:ts.bzl", "ts_project")

# Common dependencies of Angular applications
APPLICATION_DEPS = [
    "//:node_modules/@angular/common",
    "//:node_modules/@angular/core",
    "//:node_modules/@angular/forms",
    "//:node_modules/@angular/router",
    "//:node_modules/@angular/platform-browser",
    "//:node_modules/@types/node",
    "//:node_modules/rxjs",
    "//:node_modules/tslib",
]

APPLICATION_HTML_ASSETS = ["styles.css", "favicon.ico"]

# Common dependencies of Angular packages
PACKAGE_DEPS = [
    "//:node_modules/@angular/common",
    "//:node_modules/@angular/core",
    "//:node_modules/@angular/forms",
    "//:node_modules/@angular/router",
    "//:node_modules/@types/node",
    "//:node_modules/rxjs",
    "//:node_modules/tslib",
]

TEST_DEPS = APPLICATION_DEPS + [
    "//:node_modules/@angular/compiler",
    "//:node_modules/@types/jasmine",
    "//:node_modules/jasmine-core",
    "//:node_modules/@angular/platform-browser-dynamic",
]

NG_DEV_DEFINE = {
    "process.env.NODE_ENV": "'development'",
    "ngJitMode": "false",
}
NG_PROD_DEFINE = {
    "process.env.NODE_ENV": "'production'",
    "ngDevMode": "false",
    "ngJitMode": "false",
}

def ng_application(name, deps = [], assets = None, html_assets = APPLICATION_HTML_ASSETS, visibility = ["//visibility:public"], **kwargs):
    """
    Bazel macro for compiling an Angular application. Creates {name}, serve targets.

    Projects structure:
      main.ts
      index.html
      polyfills.ts
      styles.css, favicon.ico (defaults, can be overriden)
      app/
        **/*.{ts,css,html}

    Tests:
      app/
        **/*.spec.ts

    Args:
      name: the rule name
      deps: direct dependencies of the application
      html_assets: assets to insert into the index.html, [styles.css, favicon.ico] by default
      assets: assets to include in the file bundle
      visibility: visibility of the primary targets ({name}, 'serve')
      **kwargs: extra args passed to main Angular CLI rules
    """
    assets = assets if assets else native.glob(["assets/**/*"])
    html_assets = html_assets if html_assets else []

    srcs = native.glob(["main.ts", "app/**/*", "package.json"])

    # Primary app source
    ng_project(
        name = "_app",
        srcs = srcs,
        deps = deps + APPLICATION_DEPS,
        visibility = ["//visibility:private"],
    )

    # App polyfills source + bundle.
    ng_project(
        name = "_polyfills",
        srcs = ["polyfills.ts"],
        deps = ["//:node_modules/zone.js"],
        visibility = ["//visibility:private"],
    )
    esbuild(
        name = "polyfills-bundle",
        entry_point = "polyfills.js",
        srcs = [":_polyfills"],
        define = {"process.env.NODE_ENV": "'production'"},
        config = {
            "resolveExtensions": [".mjs", ".js"],
        },
        metafile = False,
        format = "esm",
        minify = True,
        visibility = ["//visibility:private"],
    )

    _pkg_web(
        name = "prod",
        entry_point = "main.js",
        entry_deps = [":_app"],
        html_assets = html_assets,
        assets = assets,
        production = True,
        visibility = ["//visibility:private"],
    )

    _pkg_web(
        name = "dev",
        entry_point = "main.js",
        entry_deps = [":_app"],
        html_assets = html_assets,
        assets = assets,
        production = False,
        visibility = ["//visibility:private"],
    )

    # The default target: the prod package
    native.alias(
        name = name,
        actual = "prod",
        visibility = visibility,
    )

def _pkg_web(name, entry_point, entry_deps, html_assets, assets, production, visibility):
    """ Bundle and create runnable web package.

      For a given application entry_point, assets and defined constants... generate
      a bundle using that entry and constants, an index.html referencing the bundle and
      providated assets, package all content into a resulting directory of the given name.
    """

    bundle = "bundle-%s" % name

    esbuild(
        name = bundle,
        entry_points = [entry_point],
        srcs = entry_deps,
        define = NG_PROD_DEFINE if production else NG_DEV_DEFINE,
        format = "esm",
        output_dir = True,
        splitting = True,
        metafile = False,
        minify = production,
        visibility = ["//visibility:private"],
    )

    html_out = "_%s_html" % name

    html_insert_assets_bin.html_insert_assets(
        name = html_out,
        outs = ["%s/index.html" % html_out],
        args = [
                   # Template HTML file.
                   "--html",
                   "$(location :index.html)",
                   # Output HTML file.
                   "--out",
                   "%s/%s/index.html" % (native.package_name(), html_out),
                   # Root directory prefixes to strip from asset paths.
                   "--roots",
                   native.package_name(),
                   "%s/%s" % (native.package_name(), html_out),
               ] +
               # Generic Assets
               ["--assets"] + ["$(rootpath %s)" % s for s in html_assets] +
               ["--scripts", "--module", "polyfills-bundle.js"] +
               # Main bundle to bootstrap the app last
               ["--scripts", "--module", "%s/main.js" % bundle],
        # The input HTML template, all assets for potential access for stamping
        srcs = [":index.html", ":%s" % bundle, ":polyfills-bundle"] + html_assets,
        visibility = ["//visibility:private"],
    )

    copy_to_directory(
        name = name,
        srcs = [":%s" % bundle, ":polyfills-bundle", ":%s" % html_out] + html_assets + assets,
        root_paths = [".", "%s/%s" % (native.package_name(), html_out)],
        visibility = visibility,
    )

    # http server serving the bundle
    history_server_bin.history_server_binary(
        name = "serve" + ("-prod" if production else ""),
        args = ["$(location :%s)" % name],
        data = [":%s" % name],
        visibility = visibility,
    )

def ng_pkg(name, srcs, deps = [], visibility = ["//visibility:public"]):
    """
    Bazel macro for compiling an npm-like Angular package project. Creates '{name}' targets.

    Projects structure:
      src/
        public-api.ts
        **/*.{ts,css,html}

    Tests:
      src/
        **/*.spec.ts

    Args:
      name: the rule name
      srcs: source files
      deps: package dependencies
      visibility: visibility of the primary targets ('{name}')
    """

    # An index file to allow direct imports of the directory similar to a package.json "main"
    write_file(
        name = "_index",
        out = "index.ts",
        content = ["export * from \"./src/public-api\";"],
        visibility = ["//visibility:private"],
    )

    ng_project(
        name = "_lib",
        srcs = srcs + [":_index"],
        deps = deps + PACKAGE_DEPS,
        visibility = ["//visibility:private"],
    )

    npm_package(
        name = name,
        srcs = ["package.json", ":_lib"],
        # This is a perf improvement; the default will be flipped to False in rules_js 2.0
        include_runfiles = False,
        visibility = ["//visibility:public"],
    )

