# ecsact.dev

Source code for <https://ecsact.dev>

## Developing

NOTE: Windows it not supported at this time. Please use some linux distribution. If you're on Windows then WSL should work fine.

NOTE: All examples are assuming you're using [nushell](https://www.nushell.sh/). Adjust accordingly if you're using a different shell.

### Get `node_modules`

```sh
bazel run -- @pnpm --dir $env.PWD install --frozen-lockfile
```

### Development Server

Run the devserver with `bazel`

```sh
bazel run //src:devserver
```

Or run the devserver with the bazel watcher `ibazel`

```sh
ibazel run //src:devserver
```

Test with the prodserver when you are done

```sh
bazel run //src:prodserver
```

### Formatting

You should configure your editor to format automatically, but if you want to manually format then run this:

```sh
bazel run //:format
```

- prettier for html/css/ts
- buildifier for starlark

### Updating Renders

There are several rendered assets that don't automatically build. To render them use the following

```sh
bazel run //src/renders:copy_renders
```

If you get an error about not being able to read `.param` files make sure you don't have `--experimental_convenience_symlinks=ignore` set. [bzlws issue](https://github.com/zaucy/bzlws/issues/18)

