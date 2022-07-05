# ecsact.dev

Source code for <https://ecsact.dev>

## Developing

Run `yarn` with `bazel` to get the `node_modules` folder in your workspace.

```sj
bazel run @yarn//:yarn
```

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
