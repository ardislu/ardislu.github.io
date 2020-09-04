# ardis.lu

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

# Developer Reference

## Helpful Global Packages
These packages might be useful to have outside the local context (see below for usage):
```
npm install -g depcheck
npm install -g npm-check-updates
npm install -g local-web-server
```

## Helpful Development Packages
In addition to the default packages included by Angular CLI, I've added the following packages as developer dependencies in package.json:
```
local-web-server
source-map-explorer
```

## Helpful npm Scripts
Build the web app then host them locally using local-web-server. Use to simulate production for e2e testing. 
```
npm run stage
```

Build the web app then use source-map-explorer to analyze main.js. Use to identify and reduce bloat.
```
npm run analyze
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