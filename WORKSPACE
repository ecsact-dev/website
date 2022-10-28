workspace(name = "ecsact_website")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "bazel_skylib",
    sha256 = "c6966ec828da198c5d9adbaa94c05e3a1c7f21bd012a0b29ba8ddbccb2c93b0d",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/bazel-skylib/releases/download/1.1.1/bazel-skylib-1.1.1.tar.gz",
        "https://github.com/bazelbuild/bazel-skylib/releases/download/1.1.1/bazel-skylib-1.1.1.tar.gz",
    ],
)

load("@bazel_skylib//:workspace.bzl", "bazel_skylib_workspace")

bazel_skylib_workspace()

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "0fad45a9bda7dc1990c47b002fd64f55041ea751fafc00cd34efb96107675778",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/5.5.0/rules_nodejs-5.5.0.tar.gz"],
)

load("@build_bazel_rules_nodejs//:repositories.bzl", "build_bazel_rules_nodejs_dependencies")

build_bazel_rules_nodejs_dependencies()

load("@rules_nodejs//nodejs:repositories.bzl", "nodejs_register_toolchains")

nodejs_register_toolchains(
    name = "nodejs",
    node_version = "16.13.2",
)

load("@rules_nodejs//nodejs:yarn_repositories.bzl", "yarn_repositories")

yarn_repositories(name = "yarn")

load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")

yarn_install(
    name = "npm",
    # ts_library & ng_module do not work with exports_directories_only
    exports_directories_only = False,
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

http_archive(
    name = "io_bazel_rules_sass",
    sha256 = "4e60e706447cdc30dfd350191911b47a2aa3b62a199c94569cc4af473270343b",
    strip_prefix = "rules_sass-4f21d78581b7cfe94b28f5cb8ef6d313e8879a1c",
    urls = ["https://github.com/bazelbuild/rules_sass/archive/4f21d78581b7cfe94b28f5cb8ef6d313e8879a1c.zip"],
)

load("@io_bazel_rules_sass//:package.bzl", "rules_sass_dependencies")

rules_sass_dependencies()

load("@io_bazel_rules_sass//:defs.bzl", "sass_repositories")

sass_repositories()

http_archive(
    name = "rules_blender",
    sha256 = "ac8dd6fb84f058beb774529baad8d27249415ee99ff9c7b3dda004722f055dcb",
    strip_prefix = "rules_blender-580815c406f5dac682b2816314b5a2f7bbdb2ce3",
    urls = ["https://github.com/zaucy/rules_blender/archive/580815c406f5dac682b2816314b5a2f7bbdb2ce3.zip"],
)

load("@rules_blender//:repo.bzl", "blender_repository")

blender_repository(name = "blender")

http_archive(
    name = "ecsact_logo",
    sha256 = "fa649ff512d8b465f9100680d2bcdd92f8e647c4ba9aa80d3036edfaa8061a1f",
    strip_prefix = "logo-4ab02c5a04120b192a12f399b8ab02a79f0171dc",
    urls = ["https://github.com/ecsact-dev/logo/archive/4ab02c5a04120b192a12f399b8ab02a79f0171dc.zip"],
)

load("@build_bazel_rules_nodejs//toolchains/esbuild:esbuild_repositories.bzl", "esbuild_repositories")

esbuild_repositories(
    npm_repository = "npm",
)
