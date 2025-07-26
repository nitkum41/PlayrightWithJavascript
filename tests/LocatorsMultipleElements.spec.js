//const {test,expect} = require('@playwright/test');

import {test,expect} from '@playwright/test'

test('LocatorsMultipleElements',async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

    const links = await page.$$('a')

    for(const link of links){

        const linktext = await link.textContent()
        console.log("link text",linktext)

    }
    // optional selector
    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a")

    const products = await page.$$("//div[@id='tbodyid']//div//h4/a")

    for(const prod of products){

        const prodtext = await prod.textContent()
        console.log("prod  text",prodtext)

    }
})
