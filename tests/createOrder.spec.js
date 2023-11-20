import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.facilio.com/identity/login');
  await page.getByPlaceholder('Enter your email address').click();
  await page.getByPlaceholder('Enter your email address').fill('abishri+13june23@facilio.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('Test1235');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await expect(page).toHaveTitle("Facilio");
  await page.locator('#sidebar-icon-12113').click();
  await page.getByRole('button', { name: 'New Work Order' }).first().click();
  await page.locator('.fc-input-full-border2 > .el-input__inner').click();
  await page.locator('.fc-input-full-border2 > .el-input__inner').fill('New');
  await page.locator('.el-select > .el-input > .el-input__inner').first().click();
  await page.locator('span').filter({ hasText: 'Facilio technology' }).click();
  await page.getByRole('main').click();
  await page.locator('body').press('Escape');
});