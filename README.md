# seaube.com

Source code for <https://seaube.com>

## Developing

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

## Folder structure

- `/src` - Angular related code
  - `/src/app` - Contains the root component and all route related components and services. Each route component/service should have it's own folder and BUILD file.
  - `/src/components` - Contains standalone [Angular components](https://angular.io/guide/component-overview) that are used by other components. Each component should have it's own folder and BUILD file.
  - `/src/directives` - Contains standalone [Angular directives](https://angular.io/guide/attribute-directives).
  - `/src/services` - Standalone [Angular services](https://angular.io/guide/dependency-injection) that are injected by components and directives.
- `/realm` - MongoDB Realm related code. See [README](realm/README.md) for details.

## Deploying

Any code pushed to the `main` branch is pushed automatically
