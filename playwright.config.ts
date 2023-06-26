import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  // testDir: './tests',
  testMatch: ["**login.spec.ts"],

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 1 : 1,

  /* Opt out of parallel tests on CI. */
  // workers: 4,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html', { open: 'on-failure' }],
    ['@skilbourn/playwright-report-summary', { outputFile: './playwright-report/custom-summary.txt' }],
    [process.env.CI ? 'github' : 'list', { printSteps: true }],
    ['json', {outputFile: './playwright-report/result.json'}]
  ],

  globalSetup: "src/utils/global-setup.ts",

  use: {
    // Run browser in headless mode.
    headless: process.env.CI ? true : false,

    // Capture screenshot after each test failure.
    screenshot: "only-on-failure",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry'
  },

  /* Configure projects for all environment */
  projects: [
    {
      name: `${process.env.test_env} - chrome`,
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
