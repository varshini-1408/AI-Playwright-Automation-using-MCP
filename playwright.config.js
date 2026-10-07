import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './',

    testMatch: [
        '**/*.spec.js',
        '**/*.test.js'
    ],

    testIgnore: [
        '**/node_modules/**',
        '**/playwright-report/**',
        '**/test-results/**'
    ],

    use: {
        baseURL: 'https://www.saucedemo.com',
        trace: 'on-first-retry',
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
});