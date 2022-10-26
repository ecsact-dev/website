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
    sha256 = "bb6c65d756fe1c24c63c8a893703a1005948854cd89c4e72ac42c2dfa169caf5",
    strip_prefix = "rules_blender-7cb1c679864619801cc5a78054bb620926a29c3d",
    urls = ["https://github.com/zaucy/rules_blender/archive/7cb1c679864619801cc5a78054bb620926a29c3d.zip"],
)

load("@rules_blender//:repo.bzl", "blender_repository")

blender_repository(name = "blender")

http_archive(
    name = "rules_imagemagick",
    sha256 = "1876ca75775042a38382a18a1fe6b61f0193cacd9370d08552f7188e82800b83",
    strip_prefix = "rules_imagemagick-035de87c648269fc56c3368ec5891521189f29df",
    urls = ["https://github.com/zaucy/rules_imagemagick/archive/035de87c648269fc56c3368ec5891521189f29df.zip"],
)

load("@rules_imagemagick//:index.bzl", "imagemagick_repository")

imagemagick_repository()
