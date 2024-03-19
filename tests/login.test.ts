const { chromium, test } = require("@playwright/test")

test("demo login test",async()=>{

    const browser= await chromium.launch();
    const context= await browser.newContext();
    const page= await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/");

    await page.hover("(//span[normalize-space(text())='My account'])[2]");

    await page.click("//span[normalize-space(text())='Login']");

    //span[normalize-space(text())='Register']

    // await page.click("//span[normalize-space(text())='Register']");

    // await page.fill("input[name='firstname']", "shirisha");
    // await page.fill("input[name='lastname']", "mannem");

    await page.fill("input[name='email']","shirisha7143@gmail.com");
    await page.fill("input[name='password']","Shirisha@123");

    await page.click("input[type='submit']");


    
    
console.log("-----------------",page.title);



})