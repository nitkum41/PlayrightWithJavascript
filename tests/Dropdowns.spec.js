import {test,expect} from '@playwright/test'

test('Dropdowns', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // multiple ways to select from dropdown
    // 1--label
    await page.locator('#country').selectOption({label:'India'})

    // 2--visible text
    await page.locator('#country').selectOption('India')

    // 3--value
    await page.locator('#country').selectOption({value:'india'})

    // 4--index
    await page.locator('#country').selectOption({index:8})

    // 5--selectoption from page directly
    await page.selectOption('#country','India')


    //Assertions

    //1--no of options in dropdown-M1
    const options1 = await page.locator('#country option') //all options
    console.log("type of options",typeof(options1),options1) //obect type not array
    await expect(options1).toHaveCount(10)

    //2--no of options in dropdown-M2
    const options2 = await page.$$('#country option')
    // console.log("total options",options.length)
    await expect(options2.length).toBe(10)

    //3--check presence of some option/value/element in dropdown-M1
    const content = await page.locator('#country').textContent() //string
    console.log("content value",content,typeof(content))
    await expect(content.includes('India')).toBeTruthy()

    //4--check presence of option/value in dropdown-M2
    const options3 = await page.$$('#country option')
    let flag=false
    for(const option of options3){
        if ((await option.textContent()).includes('Brazil')){
            flag=true
            break

        }
    }
    expect(flag).toBeTruthy()

    //5--select option from dropdown Using looping statements
    const options4 = await page.$$('#country option')
    let flag1=false
    for(const option of options){

        let value = await (await option.innerText()).trim()
    
        if (value.includes('Brazil'))
        {
            console.log("value",value)
            await page.selectOption('#country',value)
            break

        }
    }

    await page.waitForTimeout(3000)

})