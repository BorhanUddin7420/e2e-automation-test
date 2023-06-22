import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  // testDir: './src/tests/registration/',
  testMatch: "*.spec.ts",

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Opt out of parallel tests on CI. */
  // workers: 4,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html', { open: 'on-failure' }],
    ['@skilbourn/playwright-report-summary', { outputFile: './playwright-report/custom-summary.txt' }],
    [process.env.CI ? 'github' : 'list', { printSteps: true }]
  ],

  globalSetup: "src/utils/global-setup.ts",

  use: {
    // Run browser in headless mode.
    headless: false,

    // Capture screenshot after each test failure.
    screenshot: "only-on-failure",
  },

  /* Configure projects for all environment */
  projects: [
    {
      name: `chromium - ${process.env.test_env}`,
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    // {
    //   name: 'Microsoft',
    //   use: { 
    //     ...devices['Desktop Edge'], 
    //     channel: 'msedge' 
    //   },
    // },
  ],


});
