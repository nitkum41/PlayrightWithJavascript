import {test,expect} from '@playwright/test'



test('get users', async ({ request }) => {

    const response =await request.get("https://jsonplaceholder.typicode.com/posts")
    console.log(await response.json())
    expect(response.status()).toBe(200)

})

test('create users', async ({ request }) => {
    const response =await request.post("https://jsonplaceholder.typicode.com/posts",
        {
            data:
                
                    {
                    "title": "hello",
                    "body": "bar",
                    "userId": 1
                        }

            ,
            headers:{
                "Content-Type":"application/json"
            }
})
    console.log(await response.json())
    expect(response.status()).toBe(201)

})



test('update users', async ({ request }) => {

     const response =await request.put("https://jsonplaceholder.typicode.com/posts/1",
        {
            data:
                
                    {
                    "title": "hello",
                    "body": "bar",
                    "userId": 1,
                     "id": 102
                        }

            ,
            headers:{
                "Content-Type":"application/json"
            }
})
    console.log(await response.json())
    expect(response.status()).toBe(200)


})



test('delete users', async ({ request }) => {
   const response =await request.delete("https://jsonplaceholder.typicode.com/posts/1",{
            headers:{
                "Content-Type":"application/json"
            }
})
    console.log(await response.json())
    expect(response.status()).toBe(200)

})



