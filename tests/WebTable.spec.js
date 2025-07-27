import {test,expect} from '@playwright/test'

test('WebTables', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator("table[id='productTable']")

    //1--total rows and columns

    const columns = await table.locator('thead tr th')
    const rows = await table.locator('tbody tr')

    console.log("total rows",await rows.count(),"total columns",await columns.count())

    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)

    //2--select a particular checkbox for one value

    const matchedRow = rows.filter({
        has:page.locator('td'),
        hasText:"Laptop"
    })

    await matchedRow.locator('input').check()

  

    //3--select check box for multiple values by using reusable function

    await selectProduct(rows,page,"Laptop")
    await selectProduct(rows,page,"Tablet")
    await selectProduct(rows,page,"Smartwatch")


    //4 print all product tables using loop

    for(let i=0;i<await rows.count();i++){

        const row = rows.nth(i)
        const tds = row.locator('td')
        for(let j=0;j<await tds.count()-1;j++){

            const data = await tds.nth(j).textContent()
            console.log(data)
        }
    }

    //5 read data from all pages in the table

    const pages = await page.locator('#pagination li a')
    const numberofpages = await pages.count()

    expect(numberofpages).toBe(4)

    for(let k=0;k<numberofpages;k++){
        if(k>0){
            await pages.nth(k).click()
        }

        for(let i=0;i<await rows.count();i++){

        const row = rows.nth(i)
        const tds = row.locator('td')
        for(let j=0;j<await tds.count()-1;j++){

            const data = await tds.nth(j).textContent()
            console.log(data)
        }
    }

    }


    await page.waitForTimeout(3000)

})


async function selectProduct(rows,page,productName){
     const matchedRow = rows.filter({
        has:page.locator('td'),
        hasText:productName
    })

    await matchedRow.locator('input').check()

}