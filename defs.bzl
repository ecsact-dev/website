load("@aspect_bazel_lib//lib:copy_to_directory.bzl", "copy_to_directory")
load("@aspect_rules_esbuild//esbuild:defs.bzl", "esbuild")
load("@npm//:history-server/package_json.bzl", history_server_bin = "bin")
load("@npm//:html-insert-assets/package_json.bzl", html_insert_assets_bin = "bin")
load("//tools:ng.bzl", "ng_esbuild", "ng_project")
load("//tools:ts.bzl", "ts_project")

NG_DEV_DEFINE = {
    "process.env.NODE_ENV": "'development'",
    "ngJitMode": "false",
}
NG_PROD_DEFINE = {
    "process.env.NODE_ENV": "'production'",
    "ngDevMode": "false",
    "ngJitMode": "false",
}

def pkg_web(name, index_html, entry_point, entry_deps, html_assets, script_assets, assets, production, visibility = None):
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
        config = "//tools:ngc.esbuild",
        deps = [
            # for config
            "//:node_modules/@angular/compiler-cli",
            "//:node_modules/@babel/core",
            "//:node_modules/@types/babel__core",
            "//:node_modules/@types/node",
        ],
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
                   "$(location %s)" % index_html,
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
               ["--scripts", "--module"] + ["$(rootpath %s)" % s for s in script_assets] +
               ["--scripts", "--module", "%s/%s" % (bundle, entry_point)],
        # The input HTML template, all assets for potential access for stamping
        srcs = [index_html, ":%s" % bundle] + html_assets + script_assets,
        visibility = ["//visibility:private"],
    )

    copy_to_directory(
        name = name,
        srcs = [":%s" % bundle, ":%s" % html_out] + html_assets + assets + script_assets,
        root_paths = [".", "%s/%s" % (native.package_name(), html_out)],
        visibility = visibility,
    )
