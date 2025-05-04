import { test, expect } from "@playwright/test";

test("verify checkBoxes in playwright", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // checkBoxes
  // checkboxes allow users to select multiple options independently.

  // single checkBox check
  await page.locator("#sunday").check();
  await expect(page).toBeTruthy();
  await page.waitForTimeout(4000);
  await page.locator("#monday").check();
  await expect(page).toBeTruthy();
  await page.waitForTimeout(4000);

  // multiple checkBoxes checks at a time

  const checkBox = [
    "#sunday",
    "#monday",
    "#tuesday",
    "#wednesday",
    "#thursday",
    "#friday",
    "#saturday",
  ];

  for (let cb of checkBox) {
    await page.check(cb);
  }
  await page.waitForTimeout(3000);

  for (let cb of checkBox) {
    if (await page.locator(cb).isChecked()) {
      await page.uncheck(cb);
    }
  }
  await page.waitForTimeout(3000);
});
