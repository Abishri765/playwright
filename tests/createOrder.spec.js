
import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {

 await page.goto('http://localhost:8080/auth/login');

  await page.getByPlaceholder('Enter your email address').click();

  await page.getByPlaceholder('Enter your email address').fill('test@facilio.com');

  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByPlaceholder('Enter your password').fill('1234');

  await page.getByRole('button', { name: 'Sign in' }).click();
  console.log(await page.viewportSize().width);
  console.log(await page.viewportSize().height);


  await page.locator('#sidebar-icon-51').click();

  await page.getByRole('button', { name: 'New Work Order' }).click();

  await page.locator('.fc-input-full-border2 > .el-input__inner').first().click();
  await page.locator('.fc-input-full-border2 > .el-input__inner').fill('Repairing in AC');
  await expect(page).toHaveTitle("Workorder - Facilio")

});
