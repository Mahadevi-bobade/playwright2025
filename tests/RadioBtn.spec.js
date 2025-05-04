import {test,expect} from "@playwright/test"

test('verify radiobtns in playwright',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.fill('#name','Karan')
    await page.fill('#email','karan334@gmail.com')
    await page.fill('#textarea','pune')
    
// radiobuttons
//   Radio buttons allow users to select only one option from a group.


    let radiomale=await page.locator('#male')
    await expect(radiomale).not.toBeChecked()

    await radiomale.check()
    await expect(radiomale).toBeChecked()
    await page.waitForTimeout(5000)

    let radioFemale=await page.locator('#female')
    await expect(radioFemale).not.toBeChecked()

    await radioFemale.check()
    await expect(radioFemale).toBeChecked()
    await page.waitForTimeout(5000)

})