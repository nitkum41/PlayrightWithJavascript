import {test,expect} from '@playwright/test'

test.beforeAll(async()=>{
    console.log("inside beforeAll hook")
})

test.afterAll(async()=>{
    console.log("inside afterAll hook")
})

test.beforeEach(async()=>{
    console.log("inside beforeEach hook")
})

test.afterEach(async()=>{
    console.log("inside afterEach hook")
})


test.describe.skip('group 1',()=>{

    test('Test 1', async ({ page }) => {
    console.log("inside test 1")
})

    test('Test 2', async ({ page }) => {
     console.log("inside test 2")
})


})

test.describe.skip("group 2",()=>{
    test('Test 3', async ({ page }) => {
     console.log("inside test 3")
})


    test('Test 4', async ({ page }) => {
     console.log("inside test 4")
})

})

test.describe.only("group 3",()=>{
    test('Test 5', async ({ page }) => {
     console.log("inside test 5")
})


    test('Test 6', async ({ page }) => {
     console.log("inside test 6")
})

})


