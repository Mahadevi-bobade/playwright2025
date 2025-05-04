const { expect, test } = require("@playwright/test");

// async
// asynchronous code look more like synchronous code.
// The asynch keyword is used to define a function that returns a Promise

// await
// the await keyword is used to pause the execution until the Promise is resolved.

test("verify login page of demoblaze.com", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("Sonali");
  await page.locator("#loginpassword").fill("sonali1234");
});
