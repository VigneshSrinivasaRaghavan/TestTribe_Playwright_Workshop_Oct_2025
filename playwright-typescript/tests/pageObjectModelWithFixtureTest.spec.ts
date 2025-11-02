import {test,expect} from '../fixtures/pomFixtures';
import * as orangeHrmData from './testData/orangeHrmLoginData.json';

test('Orange Hrm Page Object Model Test', async({ page,loginPage, dashboardPage, adminPage }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await loginPage.enterUsername(orangeHrmData.validUsername);
    await loginPage.enterPassword(orangeHrmData.validPassword);
    await loginPage.clickLogin();

    await dashboardPage.clickAdminTab();
    await adminPage.enterUserName('Admin');
    await adminPage.clickSearchButton();

    await dashboardPage.clickProfileAccordion();
    await dashboardPage.clickLogoutButton();
})