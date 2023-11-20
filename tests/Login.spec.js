const {test,expect} =require('@playwright/test')


test ("verify login", async({page})=>{
    await page.goto("https://app.facilio.com/identity/login?redirect=%2Fmaintenance%2Fhome%2Fdashboard%2Fbugsoverview%2F")
    
    await page.getByPlaceholder("Enter your email address").type("abishri+13june23@facilio.com")
    
    await page.click("'Next'")
    
    await page.getByPlaceholder("Enter password").type("Test1235")
    
    await page.click("'Sign in'")
    
    await page.waitForTimeout(10 * 1000)
    
    await expect(page).toHaveTitle("Facilio")
})