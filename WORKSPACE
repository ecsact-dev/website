workspace(name = "ecsact_website")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "bazel_skylib",
    sha256 = "74d544d96f4a5bb630d465ca8bbcfe231e3594e5aae57e1edbf17a6eb3ca2506",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/bazel-skylib/releases/download/1.3.0/bazel-skylib-1.3.0.tar.gz",
        "https://github.com/bazelbuild/bazel-skylib/releases/download/1.3.0/bazel-skylib-1.3.0.tar.gz",
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
    sha256 = "b58bba0a2db9c03df8d9b3568465c8d90903f7cda45c33cbadb2de48bdbbfcf3",
    strip_prefix = "rules_blender-4bb0efc5a329ad9d03c8c27485689baf1338ccad",
    urls = ["https://github.com/zaucy/rules_blender/archive/4bb0efc5a329ad9d03c8c27485689baf1338ccad.zip"],
)

load("@rules_blender//:repo.bzl", "blender_repository")

blender_repository(name = "blender")

http_archive(
    name = "ecsact_logo",
    sha256 = "0ecba63837824cb9588ca350e8a9bd1263eb809be8e699aaefd0d7134fd533fe",
    strip_prefix = "logo-ad8a285861d4744460d9d2a6458a4010a4ccf3e4",
    urls = ["https://github.com/ecsact-dev/logo/archive/ad8a285861d4744460d9d2a6458a4010a4ccf3e4.zip"],
)

load("@build_bazel_rules_nodejs//toolchains/esbuild:esbuild_repositories.bzl", "esbuild_repositories")

esbuild_repositories(
    npm_repository = "npm",
)
