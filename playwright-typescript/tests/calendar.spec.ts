import { test, expect, Page } from '@playwright/test';
import { DateTime } from 'luxon';

test('Using Fill Method', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');

  // to find the calendar input date format --> Enter in console --> document.getElementById("birthday").value
  await page.locator('#birthday').fill('2024-10-18');
})

test.only('Using Luxon', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');

  // Past Date Selection
  await selectDate(page, 'October 2023', '18');
  await page.waitForTimeout(5000);
  await page.reload();

  // Future Date Selection
  await selectDate(page, 'October 2026', '16');
  await page.waitForTimeout(5000);
  await page.reload();

  // Present Month Date Selection
  await selectDate(page, 'October 2025', '18');
  await page.waitForTimeout(5000);
  await page.reload();
})

async function selectDate(page:Page, dateString:string, dayString:string) {
  await page.locator('input[placeholder="Start date"]').click();

  const monthYear = page.locator('.datepicker-days th.datepicker-switch');
  const prevButton = page.locator('.datepicker-days th.prev');
  const nextButton = page.locator('.datepicker-days th.next');

const targetDate = DateTime.fromFormat(dateString,'MMMM yyyy');

while(await monthYear.textContent() !== dateString){
    await (targetDate < DateTime.now() ?prevButton : nextButton).click();
}
await page.locator(`.day:text-is("${dayString}")`).click();
  /*
  18/10/2024
  Shorter Form -- 3
  Full Form -- 4
  October 2024 --> MMMM yyyy
  Oct 2024 --> MMM yyyy
  October 24 --> MMMM yyy
  Oct 24 --> MMM yyy
  */
}