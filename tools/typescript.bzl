"""Helper macros for compiling typescript with consistent config"""

load("@npm//@bazel/typescript:index.bzl", _ts_project = "ts_project")

def ts_project(name, tsconfig = "//src:tsconfig", **kwargs):
    _ts_project(
        name = name,
        tsconfig = tsconfig,
        declaration = True,
        declaration_map = True,
        **kwargs
    )
