# Snack DEV

## Creates a new build, optimized for production
-> yarn build

## Run all tests using jest
-> yarn test 

## Update all Jest snapshots (if there are any)
-> yarn test:update

## Run ESLint for all JavaScript and TypeScript files
-> yarn lint:js

## Run Stylelint for all CSS files
-> yarn lint:css

## Run lint:js and lint:css in parallel
-> yarn analyze

## Creates an image of your dependency graph. Requires GraphVIZ to be in your system's PATH
-> yarn depgraph

## Run plop to create new React components or Redux reducers via CLI
-> yarn plop

## Environment Variables

There are a few environment variables you can set to adjust the setup to your needs

| Variable         | Default            | Description                                                                                                                                                                                                                                                                                      |
| ---------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `PORT`           | `8500`             | Port number your application will be served on.                                                                                                                                                                                                                                                  |
| `HOST`           | `http://localhost` | Host (including protocol!) your application will be served on. This is usually neglectable as most of the time your application will be served via remote proxy (e.g. Nginx) on localhost. **Note:** this is only for convenience. The server itself will not be bound exclusively to that host. |
| `DEVSERVER_HOST` | `http://localhost` | Optional. Different host for the Webpack Dev Server to be served on.|