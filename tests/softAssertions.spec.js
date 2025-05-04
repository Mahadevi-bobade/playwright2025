import {test,expect} from "@playwright/test"

// soft assertions
//  soft assertions allow a test to continue executing even if an assertion fails, 
// instead of stopping execution as it would with a hard assertion.

test('verify soft assertions in playwright',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register')
    await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/register')
    await expect.soft(page).toHaveTitle('nopCommerce demo store')
    await expect.soft(page.getByAltText('nopCommerce demo store')).toBeVisible()
    
    const searchBox = await page.locator('#small-searchterms')
    await expect.soft(searchBox).toBeEnabled()
})