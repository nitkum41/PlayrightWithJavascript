import {test,expect} from '@playwright/test'

test('Checkboxes', async ({ page }) => {
    
  await page.goto('https://testautomationpractice.blogspot.com/');
  //single checkbox
  await page.locator("input[id='monday']").check()

  await expect(page.locator("input[id='monday']")).toBeChecked()

  await expect(await page.locator("input[id='monday']").isChecked()).toBeTruthy()

  await expect(await page.locator("input[id='tuesday']").isChecked()).toBeFalsy()

  //multiple checkboxes
  const checkBoxlocators = ["input[id='monday']","input[id='tuesday']","input[id='saturday']"]

  for(const locator of checkBoxlocators){

    await page.locator(locator).check()

  }

  await page.waitForTimeout(3000)

  for(const locator of checkBoxlocators){
    if (await page.locator(locator).isChecked()){
      await page.locator(locator).uncheck()
    }
    
  } 
 
})