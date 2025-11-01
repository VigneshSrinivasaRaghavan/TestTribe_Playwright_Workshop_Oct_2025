import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import {parse} from 'csv-parse/sync';

interface LoginData {
  username: string;
  password: string;
}

const orangeHrmData = parse(fs.readFileSync(path.join(__dirname, 'testData', 'orangeHrmLoginData.csv')), {
  columns: true,
  skip_empty_lines: true
}) as LoginData[];

test(`Login test with Valid Creds`, async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('[placeholder="Username"]').fill(orangeHrmData[0].username);
    await page.locator('[placeholder="Password"]').fill(orangeHrmData[0].password);
    await page.locator('[type="submit"]').click();
    await page.locator('.oxd-userdropdown').click();
    await page.locator('text=Logout').click();
});

test(`Login test with InValid Creds`, async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('[placeholder="Username"]').fill(orangeHrmData[1].username);
    await page.locator('[placeholder="Password"]').fill(orangeHrmData[1].password);
    await page.locator('[type="submit"]').click();
    await expect(page.locator('.orangehrm-login-error>.oxd-alert--error')).toBeVisible();
});