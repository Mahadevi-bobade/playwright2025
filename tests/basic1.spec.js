// import {test,expect} from "@playwright/test"

const {test,expect} = require("@playwright/test")

test('verify title and url of web page',async({page})=>{
 await page.goto('https://demoblaze.com/')
 
 const pagetitle=await page.title('STORE')
 console.log(`pagetitle ${pagetitle}`)
 await expect(pagetitle).toEqual('STORE')

 const pageUrl=await page.url('https://demoblaze.com/')
 console.log(pageUrl)
 await expect(page).toHaveURL('https://demoblaze.com/')


})