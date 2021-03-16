## Notabarista frontend app

Steps to get this app to run locally:
1. Install Node.js (check the official docs for details https://angular.io/guide/setup-local)
2. Install the Angular CLI via the terminal window:\
`npm install -g @angular/cli`
4. Clone this repository with your Git client of choice (Github desktop for example).
5. Open a terminal window, navigate to the root of the cloned project and run:\
`npm install`
7. In the same terminal window and location (root of the cloned project) run the following command:\
`ng serve --open`
9. The browser will open automaticall a window to `http://localhost:4200/`. This is the Angular dev server.
10. Download you IDE of choice to start working on the project (for example Visual Studio Code). The app will automatically reload if you change any of the source files and the Angular dev server is running (number 7 executed above).

**Important note:** while using the Angular dev server (port 4200) you cannot use the login/register flow as the backend is on another port and Okta does not accept different ports.\
The workaround for this is to open a new tab and login separately in the the main backend microservice at `http://localhost:18080/authenticate` which will redirect you to the compiled Angular version.\
Refresh the app in the dev server tab and the backend requests should be authenticated.\
In the compiled version the entire login/register without any issues.

## Setting up the backend services locally:
- TBD either manual setup of all microservices or via bat files

## Compiling the project and deploying to local main backend microservice
- open a terminal window, navigate to the root of the cloned project and run:\
`ng build --prod`
- this will compile the production version (faster than the dev/debug version)
- you can also skip `--prod` to compile a debuggable version - see official docs for details
- copy the compiled files from the <project root path>/`dist` to the location of the main service resources (TBD location based on local deployment type)
- restart the backend main service

## Main configurations done at Angular level for backend integration:
**1. AuthInterceptor (see auth-interceptor.service.ts)**
- used for intercepting backend requests that give HTTP response 401 Unauthorized and starts the login flow\
  -- redirects the user to the '/authenticate' backend endpoint\
  -- backend redirects the browser to the Okta login page\
  -- after a successful login the user is redirected to the original path in the UI app
- automatically adds the current UI URL route to the backend request so that the user gets redirected to the same route after signing in

**2. Proxy config for dev server:**
- see 'proxy.config.js' and the oficial [Angular guide](https://angular.io/guide/build#proxying-to-a-backend-server) for more details
- adds all backend relative paths that need to be redirected from the Angular dev server port (4200) to the backend microservices port (18080 as of now)

--- 
**Original Angular generated readme**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
