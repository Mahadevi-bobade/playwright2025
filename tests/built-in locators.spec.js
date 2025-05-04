const {test, expect} =require("@playwright/test")

test('verify built in locators in playwright',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    // getbyplaceholder

    await page.getByPlaceholder("Username").fill('Admin')
    await page.getByPlaceholder("Password").fill('admin123')
    await page.getByRole('button',{type:"submit"}).click()

    await expect(page.getByText('Quick Launch')).toBeVisible()
    await expect(page.getByTitle('Help')).toBeVisible()    
})

// get by title
test('verify builtin locators in playwright by get by title',async({page})=>{
    await page.goto('https://playwright.dev/')
    await page.getByTitle('Switch between dark and light mode (currently dark mode)').click()

})

// get by title
test('verify builtin locators by getbytitle ',async({page})=>{
    await page.goto('https://playwright.dev/')
    await page.getByLabel('Search (Ctrl+K)').click()

})