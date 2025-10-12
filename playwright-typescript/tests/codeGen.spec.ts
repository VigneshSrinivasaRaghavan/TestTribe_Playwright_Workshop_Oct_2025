import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('vignesh');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="viki"]').click();
});

// Assignment - With Webkit browser
// 1. Login of OrangeHRM - https://opensource-demo.orangehrmlive.com