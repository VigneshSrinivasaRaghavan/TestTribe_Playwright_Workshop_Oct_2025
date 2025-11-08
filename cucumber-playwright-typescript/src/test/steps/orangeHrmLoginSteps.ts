import { Given, When, Then } from '@cucumber/cucumber';
import { Browser, Page, expect, chromium, firefox, webkit } from "@playwright/test";
import {pageFixture} from "../../hooks/pageFixture";

Given('user is on the orangehrm login page', async function () {
    await pageFixture.page.goto("https://opensource-demo.orangehrmlive.com/");
});

When('user enters the valid username', async function () {
    await pageFixture.page.locator('input[name="username"]').fill('Admin');
});

When('user enter the valid password', async function () {
    await pageFixture.page.locator('input[name="password"]').fill('admin123');
});

When('user clicks on the login button', async function () {
    await pageFixture.page.locator('button[type="submit"]').click();
});

Then('user will be navigated to the orangehrm dashboard page', async function () {
    await expect(pageFixture.page.locator('.oxd-topbar-header-title')).toBeVisible();
});