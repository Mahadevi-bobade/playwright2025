

//expect(locator).not.toBeEnabled()
// expect (locator). toBeDisabled()

// expect(locator).toHaveAttribute()
// expect(locator).toHaveText ()
// expect(locator).toContainText()
// expect(locator).toHaveValue(value)
// expect(locator). toHaveCount ()

import { test, expect } from "@playwright/test";

test("verify asserrtions in playwright", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register");

  // expect (page).toHaveURL()
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  // expect(page).toHaveTitle()
  await expect(page).toHaveTitle('nopCommerce demo store. Register')

  // expect(locator). toBeVisible()
  await expect(page.getByAltText('nopCommerce demo store')).toBeVisible()

  // expect(locator).toBeEnabled()
  await expect(page.getByRole('link',{'name':'Computers'})).toBeEnabled()

  // expect(locator).toBeChecked()
  let radioMale=await page.locator('#gender-male').click()
  
   


});
