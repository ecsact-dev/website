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
    sha256 = "5aae76dced38f784b58d9776e4ab12278bc156a9ed2b1d9fcd3e39921dc88fda",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/5.7.1/rules_nodejs-5.7.1.tar.gz"],
)

load("@build_bazel_rules_nodejs//:repositories.bzl", "build_bazel_rules_nodejs_dependencies")

build_bazel_rules_nodejs_dependencies()

load("@rules_nodejs//nodejs:repositories.bzl", "nodejs_register_toolchains")

nodejs_register_toolchains(
    name = "nodejs",
    node_version = "18.12.0",
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
    sha256 = "618f0b7aae019c149ac2ff4142a66c110de116fb5c173dbeccedbaee06fc5f6d",
    strip_prefix = "rules_sass-a2fce75bcf103750f7accbf7f966ad48bcbca2d4",
    urls = ["https://github.com/bazelbuild/rules_sass/archive/a2fce75bcf103750f7accbf7f966ad48bcbca2d4.zip"],
)

load("@io_bazel_rules_sass//:defs.bzl", "sass_repositories")

sass_repositories()

http_archive(
    name = "rules_blender",
    sha256 = "8422da8ba9836bd1c179a22fa53b588ecbf292fdfeb29d47199a0808a6cc0156",
    strip_prefix = "rules_blender-d43141a665363eeeec33d040519c36e772cf95f5",
    urls = ["https://github.com/zaucy/rules_blender/archive/d43141a665363eeeec33d040519c36e772cf95f5.zip"],
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

http_archive(
    name = "bzlws",
    sha256 = "93e6cec29581070fe4455a2ad6c81d4b7ee8ca1b76c2c340883100ef2686c8c7",
    strip_prefix = "bzlws-b12ad162a63fc368785a217cd62c7afb0c9107f8",
    url = "https://github.com/zaucy/bzlws/archive/b12ad162a63fc368785a217cd62c7afb0c9107f8.zip",
)

load("@bzlws//:repo.bzl", "bzlws_deps")

bzlws_deps()

http_archive(
    name = "typed_css",
    strip_prefix = "typed.css-0.8.9",
    url = "https://github.com/brandonmcconnell/typed.css/archive/refs/tags/v0.8.9.zip",
    build_file_content = """
load("@io_bazel_rules_sass//:defs.bzl", "sass_library")
package(default_visibility = ["//visibility:public"])
sass_library(
    name = "typed_css",
    srcs = ["typed.scss"],
)"""
)
