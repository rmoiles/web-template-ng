# WebTemplateNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## creating this project

https://medium.com/@SirMaxxx/angular-6-creating-a-shareable-control-library-6a27f0ebe5c2

```bash
ng new web-template-ng -s
cd web-template-ng
ng generate library txm-components -p txm
ng g application txmwebsite --prefix web
ng g application txmapp --prefix app
```
## serve the different projects

Main App
http://localhost:4200/

TXM - Web
http://localhost:4201/

TXM - App
http://localhost:4202/

Open a different bash for each command
```bash
ng serve
ng serve txmwebsite --port 4201
ng serve txmapp --port 4202
```
## Adding components to library

```bash
ng g component checkbox --project=txm-components
ng g component textinput --project=txm-components
```

NOTE: Make sure you add the compenents as exports in txm-components.module.ts

## Build Library

In project root...
```bash
ng build txm-components
## first time run install then just stop server, build, serve
npm install file:dist/txm-components --no-save
```
## Add TxmComponentsModule to txmapp\app.module.ts
import { TxmComponentsModule } from 'txm-components';
  imports: [
    BrowserModule,
    TxmComponentsModule
  ],


## Clone from Git

If you clone the app from github, you cannot run npm install, because it will try and install the app-components whichisn’t built yet — and you can’t build the components until you’ve installed the npm packages.
The solution is to edit package.json to remove the reference to the dist/ars-components, delete package-lock.json, then

```bash
npm install
ng build txm-components
npm install file:dist/txm-components --no-save
```

cd dist/ars-components
npm pack
npm install {path to the tgz file}/ars-components.tgz

package-lock.json 10046
    "txm-components": {
      "version": "file:dist/txm-components",
      "requires": {
        "tslib": "^1.9.0"
      }
    },
    
## Helpful Git config

git config –global credential.helper manager
git config –global credential.interactive never
