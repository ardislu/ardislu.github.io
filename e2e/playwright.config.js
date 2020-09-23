// Protractor configuration file, hijacked to run Playwright specs
// Keeping minimum config options to still allow @angular-devkit/build-angular:protractor
// (the default builder for 'ng e2e') to work

exports.config = {
  specs: [
    './src/**/app-playwright.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu']
    }
  },
  directConnect: true,
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
  }
};