import {test,expect} from "@playwright/test"

test('verify dropdown in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    await page.locator('#dropdowm-menu-1').selectOption('Python')
    await page.locator('#dropdowm-menu-2').selectOption('TestNG')
    await page.locator('#dropdowm-menu-3').selectOption('JQuery')
    await page.waitForTimeout(3000)
    
})

test('verify Dropdown from letscode it',async({page})=>{
    await page.goto('https://www.letskodeit.com/practice')
    await page.locator('#carselect').selectOption('Benz')
    await page.waitForTimeout(3000)

})