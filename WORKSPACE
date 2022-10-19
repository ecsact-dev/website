workspace(name = "ecsact_website")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "ecsact_sdk",
    sha256 = "f1deec50f8d54af837b22787929b3596add7be161a504826e016e7d484ca6acd",
    strip_prefix = "ecsact_sdk-674b1a2a590f3551ccd5f33629bb41f9585a47c3",
    url = "https://github.com/ecsact-dev/ecsact_sdk/archive/674b1a2a590f3551ccd5f33629bb41f9585a47c3.zip",
)

load("@ecsact_sdk//:index.bzl", "ecsact_dev_repositories")

[http_archive(
    name = repo.name,
    sha256 = repo.sha256,
    strip_prefix = repo.strip_prefix,
    url = repo.url,
) for repo in ecsact_dev_repositories]

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
    sha256 = "20ce414b1243c28e388d7f56aaedebb2a0d5cf510fcd91bb5ceae77005b478fa",
    strip_prefix = "rules_imagemagick-35903509e561bde7b9081e5682a732d2f4d91f85",
    urls = ["https://github.com/zaucy/rules_imagemagick/archive/35903509e561bde7b9081e5682a732d2f4d91f85.zip"],
)

load("@rules_imagemagick//:index.bzl", "imagemagick_repository")

imagemagick_repository()
