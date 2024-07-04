_ALLOWED_EXTENSION = [
    "html",
    "js",
    "jsx",
    "tsx",
]

FileCollector = provider(
    fields = {"files": "collected files"},
)

def _file_collector_aspect_impl(target, ctx):
    # This function is executed for each dependency the aspect visits.

    # Collect files from the srcs
    direct = []
    if hasattr(ctx.rule.files, "srcs"):
        direct = [
            f
            for f in ctx.rule.files.srcs
            if ctx.attr.extension == f.extension
        ]

    # Combine direct files with the files from the dependencies.
    transitive = []

    if hasattr(ctx.rule.attr, "deps"):
        transitive = [dep[FileCollector].files for dep in ctx.rule.attr.deps]

    files = depset(
        direct = direct,
        transitive = transitive,
    )

    return [FileCollector(files = files)]

file_collector_aspect = aspect(
    implementation = _file_collector_aspect_impl,
    attr_aspects = ["deps", "srcs"],
    attrs = {
        "extension": attr.string(mandatory = True, values = _ALLOWED_EXTENSION),
    },
)

def _file_collector_rule_impl(ctx):
    # content = {}
    all_files = []
    for dep in ctx.attr.deps:
        all_files.extend(dep[FileCollector].files.to_list())
        # files = [f.short_path for f in dep[FileCollector].files.to_list()]
        # content[str(dep.label)] = files

    # ctx.actions.write(
    #     output = ctx.outputs.out,
    #     content = json.encode(content),
    # )

    return [DefaultInfo(files = depset(all_files))]

file_collector = rule(
    implementation = _file_collector_rule_impl,
    attrs = {
        "deps": attr.label_list(aspects = [file_collector_aspect]),
        "extension": attr.string(mandatory = True, values = _ALLOWED_EXTENSION),
        # "out": attr.output(),
    },
)
