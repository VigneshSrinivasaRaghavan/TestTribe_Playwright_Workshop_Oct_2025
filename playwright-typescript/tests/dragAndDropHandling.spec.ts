import { test, expect } from '@playwright/test';

test('Drag And Drop - Approach 1', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Static.html');
  await page.locator('button.fc-cta-consent').click();
});

test('Drag And Drop - Approach 2', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Static.html');
  await page.locator('button.fc-cta-consent').click();
});