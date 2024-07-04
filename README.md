# ecsact.dev

Source code for <https://ecsact.dev>

## Developing

NOTE: All examples are assuming you're using [nushell](https://www.nushell.sh/).

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
