import {test,expect} from '@playwright/test'

test.skip('Single file upload', async ({ page }) => {

    await page.goto("https://practice.expandtesting.com/upload")

    await page.locator("#fileInput").setInputFiles('tests/files/sample.pdf') //upload files


    await page.locator('button[id="fileSubmit"]').click()

    const text = await page.locator("#uploaded-files").textContent()

    await expect(text).toContain("sample.pdf")

    console.log("uploaded file name",text)

    await page.waitForTimeout(3000)



})


test('Multiple file upload', async ({ page }) => {

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    //add multiple files
    await page.locator("input[id='filesToUpload']").setInputFiles(['tests/files/sample.pdf','tests/files/sample_file.pdf']) 

    await expect(await page.locator("ul[id='fileList'] li:nth-child(1)")).toHaveText("sample.pdf")
    await expect(await page.locator("ul[id='fileList'] li:nth-child(2)")).toHaveText("sample_file.pdf")
    await page.waitForTimeout(3000)

    //removing files
    await page.locator("input[id='filesToUpload']").setInputFiles([]) 
    await page.waitForTimeout(3000)

    await expect(await page.locator("ul[id='fileList'] li:nth-child(1)")).toHaveText("No Files Selected")


    await page.waitForTimeout(3000)



})
