import {test,expect} from '@playwright/test'

test('RadioButton', async ({ page }) => {
    
  await page.goto('https://testautomationpractice.blogspot.com/');

  await expect(await page.locator("input[id='male']")).toBeVisible()
  

  await page.locator("input[id='male']").check()
  //m1
  await expect(await page.locator("input[id='male']")).toBeChecked()

  //m2
  await expect(await page.locator("input[id='male']").isChecked()).toBeTruthy()

  await expect(await page.locator("input[id='female']")).not.toBeChecked()

  await expect(await page.locator("input[id='female']").isChecked()).toBeFalsy()

  

  await page.waitForTimeout(5000) //pause code
 
})