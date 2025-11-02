import {test,expect} from '@playwright/test';
import { AdminPage } from './pages/adminPage';
import { DashboardPage } from './pages/dashboardPage';
import { LoginPage } from './pages/loginPage';
import * as orangeHrmData from './testData/orangeHrmLoginData.json';

test('Orange Hrm Page Object Model Test', async({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    // Syntax to create object
    // const objectName = new ClassName(page);
    const adminPage = new AdminPage(page);
    const dashboardPage = new DashboardPage(page);
    const loginPage = new LoginPage(page);

    await loginPage.enterUsername(orangeHrmData.validUsername);
    await loginPage.enterPassword(orangeHrmData.validPassword);
    await loginPage.clickLogin();

    await dashboardPage.clickAdminTab();
    await adminPage.enterUserName('Admin');
    await adminPage.clickSearchButton();

    await dashboardPage.clickProfileAccordion();
    await dashboardPage.clickLogoutButton();

    // Assertion to verify it did navigate back to login page
})