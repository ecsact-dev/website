"""Workaround for https://github.com/sass/dart-sass/issues/1765

sass requires that anything it tries to load is publicly-hoisted.

This will have to be worked-around in two places:
1. When we translate the pnpm-lock.yaml file to Starlark, we have to do the equivalent of
   https://pnpm.io/blog/2020/10/17/node-modules-configuration-options-with-pnpm#the-worst-case---hoisting-to-the-root
   which is documented at
   https://docs.aspect.build/rules/aspect_rules_js/docs/npm_translate_lock/#public_hoist_packages
2. When we declare a sass_binary rule, we have to provide those extra packages as declared dependencies.
"""

# NOTE: any external sass deps must be placed here
# buildifier: keep sorted
SASS_DEPS = [
    # "@angular/cdk",
]
