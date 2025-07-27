import {test,expect} from '@playwright/test'

//only
test.only('Test 1', async ({ page }) => {
    console.log("inside test 1")

})

//skip
test.skip('Test 2', async ({ page }) => {
    console.log("inside test 2")
})

//skip-condition
test('Test 3', async ({ page , browserName }) => {
    console.log("inside test 3")
    if(browserName==='chromium'){
        test.skip()
    }
})

// fixme--skip till i fix the script(having issues)
test('Test 4', async ({ page }) => {

    test.fixme()
    console.log("inside test 4")
})

// fail - both actual and expected both fail then test pass

test('Test 5', async ({ page }) => {

    test.fail() //expecting fail

    console.log("inside test 5")

    // expect(1).toBe(1) //actual pass
     expect(1).toBe(2) //actual fail


})

// fail
test.only('Test 6', async ({ page,browserName }) => {
    console.log("inside test 6")
     if(browserName==='chromium'){ //actual
        test.fail() //exp
    }

})


//slow

test.only('Test 7', async ({ page,browserName }) => {

    test.slow() //it will triple the default timeout in the config file--by default it is 30s
    test.setTimeout(5000) //other way to increase the timeout
    console.log("inside test 7")
    await page.goto("https://demoblaze.com/index.html")
})
