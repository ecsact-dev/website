load("@aspect_rules_esbuild//esbuild:defs.bzl", "esbuild")
load(":ts.bzl", "ts_project")

# deps that are always added to an `ng_project` target
IMPLICIT_NG_DEPS = [
    "//:node_modules/tslib",
]

def ng_project(name, **kwargs):
    """The rules_js ts_project() configured with the Angular ngc compiler.
    """
    deps = kwargs.pop("deps", [])
    deps.extend(IMPLICIT_NG_DEPS)
    ts_project(
        name = name,

        # Compiler
        tsc = "//tools:ngc",
        supports_workers = False,
        deps = deps,

        # Any other ts_project() or generic args
        **kwargs
    )

def ng_esbuild(name, **kwargs):
    """The rules_esbuild esbuild() configured with the Angular linker configuration
    """

    esbuild(
        name = name,
        config = "//tools:ngc.esbuild.js",
        **kwargs
    )
