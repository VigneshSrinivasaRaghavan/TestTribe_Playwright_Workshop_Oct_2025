import { test, expect } from '@playwright/test';

test('Downalod a file', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/FileDownload.html#google_vignette');

});