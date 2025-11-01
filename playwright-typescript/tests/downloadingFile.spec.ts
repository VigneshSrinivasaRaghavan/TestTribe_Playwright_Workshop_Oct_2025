import { test, expect } from '@playwright/test';

test('Downalod a file', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/FileDownload.html#google_vignette');
  await page.locator('button.fc-cta-consent').click();
  
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('a[type="button"]').click()
  ]);

    console.log(await download.path()); // To find the path of the downloaded file

    const defaultFileName = download.suggestedFilename();
    const customizedFileName = 'SeleniumDocumentation.pdf';

    await download.saveAs(`./downloads/${defaultFileName}`);
    await download.saveAs(`./downloads/${customizedFileName}`);
});