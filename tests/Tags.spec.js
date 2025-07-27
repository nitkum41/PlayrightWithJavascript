import {test,expect} from '@playwright/test'

test('Test 1@sanity', async ({ page }) => {
    console.log("inside test 1")

})

test('Test 2@sanity', async ({ page }) => {
    console.log("inside test 2")
})


test('Test 3@flaky', async ({ page }) => {
    console.log("inside test 3")
})


test('Test 4@reg', async ({ page }) => {
    console.log("inside test 4")
})


test('Test 5@reg@sanity', async ({ page }) => {

    console.log("inside test 5")

})