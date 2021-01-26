# ardis.lu
[![Build Status](https://travis-ci.com/ardislu/ardislu.github.io.svg?branch=develop)](https://travis-ci.com/ardislu/ardislu.github.io)
[![Maintainability](https://api.codeclimate.com/v1/badges/e036880db60c5df107c7/maintainability)](https://codeclimate.com/github/ardislu/ardislu.github.io/maintainability)

This project contains the Angular codebase for my personal website [ardis.lu](https://ardis.lu).

# Quickstart

## Requirements

- (Optional) [Chocolatey](https://chocolatey.org/)
- [Node.js](https://nodejs.org/)
- [git](https://gitforwindows.org/)

You can install Node.js and git from their respective websites, or use Chocolatey to install them from Powershell:
```
choco install nodejs
choco install git
```

## Setup

1. Install Angular CLI globally (not actually required but a good idea for future Angular projects)
```
npm install -g @angular/cli
```

2. Clone the repository
```
git clone https://github.com/ardislu/ardislu.github.io.git
```

3. Install project dependencies
```
npm i
```

4. Initiate a development server
```
ng serve
```

5. Go to the [development server](http://localhost:4200/) in your browser

# Testing on Other Devices
To connect to the development server from other devices, initiate the development server on all IP addresses on the local machine:
```
ng serve --host 0.0.0.0
```

Then get your local IP address from Powershell:
```
ipconfig
```

Now you can connect to the development server from any device on the local network (e.g. your phone or tablet). For example, if my local IP address is `192.168.1.21`, go to this address from the phone or tablet's internet browser:
```
192.168.1.21:4200
```

# Note on Web Server Configuration
For Angular apps using HTML5 URLs (i.e. URLs that look like separate pages but are actually not), we need to [configure the web server to fallback to index.html](https://angular.io/guide/deployment#server-configuration). Since GitHub Pages doesn't allow web server configurations (as of now), we can simulate the same effect by copying `index.html` to the magic file `404.html`. This step is included in the TravisCI .yml configuration, so no manual intervention is required. 

This trick may cause issues with SEO or website auditors like Lighthouse since all requests to URLs other than the root will result in a `HTTP 404` code. However, the user experience is not affected. 

If you use `ng serve` or `npm run stage` to host a development web server, this step is not necessary since the development web server is appropriately configured. 

# Pre-commit hook
This project uses [Husky](https://www.npmjs.com/package/husky) and [lint-staged](https://www.npmjs.com/package/lint-staged) to do `eslint` (for HTML and TS) or `stylelint` (for SCSS) on staged files before each commit.

# Testing
This project uses [Jest](https://www.npmjs.com/package/jest) for unit testing (instead of Jasmine + Karma), and [Playwright](https://www.npmjs.com/package/playwright) for e2e testing (instead of Protractor). The Angular architects have been adapted for these frameworks so tests are still run with the usual `npm run test` and `npm run e2e`.

# Developer Reference

## Helpful Global Packages
These packages might be useful to have outside the local context (see below for usage):
```
npm install -g depcheck
npm install -g npm-check-updates
npm install -g local-web-server
npm install -g lighthouse
npm install -g svgo
```

## Helpful Development Packages
In addition to the default packages included by Angular CLI, I've added the following packages as developer dependencies in package.json:
```
local-web-server
source-map-explorer
```

## Helpful npm Scripts
Modified `npm start` runs `ng serve --hmr --host 0.0.0.0` instead of the default `ng serve`.
```
npm start
```

Build the web app then host it locally using local-web-server. Use to simulate production for e2e testing. 
```
npm run stage
```

Build the web app then use source-map-explorer to analyze main.js. Use to identify and reduce bloat.
```
npm run analyze
```

Lint the entire project with `ng lint` (for Typescript and HTML) and `stylelint` (for SCSS).
```
npm run lint
```

## Helpful Assorted Commands
List all global packages
```
npm list -g --depth 0
```

Check that all global packages are at their latest version
```
ncu -g
```

Check all local packages are at their latest MINOR version (within the same major version)
```
npm outdated
```

Check all local packages are at their latest version (includes major versions)
```
ncu
```

Check package.json for unused dependencies
```
depcheck
```

Remove packages from node_modules that are not listed in package.json
```
npm prune
```

Install all dependencies per package.json and update package-lock.json accordingly
```
npm install
```

Delete node_modules and install all dependencies per package-lock.json, throw an error if package.json is inconsistent with package-lock.json
```
npm ci
```

Run simple web server configured for SPAs (redirects all URLs to index.html) and output dynamic access stats to console
```
ws --spa index.html --log.format stats
```

Run a [Lighthouse](https://developers.google.com/web/tools/lighthouse) audit on the development server (assuming hosted with the `ws` command above)
```
lighthouse http://127.0.0.1:8000/ --view
```

Minify a .svg file
```
svgo example.svg
```