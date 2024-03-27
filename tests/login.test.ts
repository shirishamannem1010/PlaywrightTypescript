// logintest.spec.ts
const { chromium, test } = require("@playwright/test");
import { LoginPage } from "../pages/loginpage";
import { ProductPage } from "../pages/productpage";

let browser;
let context;
let page;

test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
});

test("Login to Lamdatest", async () => {
    const loginPage = new LoginPage(page);
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await loginPage.navigateToLogin();
    await loginPage.fillLoginDetails();
    console.log("========== login successful=============");
});

test("Select product on Lamdatest after login", async () => {
    const productPage = new ProductPage(page);

    // Assuming login is already performed
    // If not, you can add the necessary login steps here

    await page.goto("https://ecommerce-playground.lambdatest.io/");
    console.log("========== continue with logged-in session ===========");

    await productPage.navigateToSamsungProduct();
    await productPage.selectProduct();
});


// test("mega menu operations", async({page})=>{
//     // browser= await chromium.launch();
//     // context= await browser.newContext();
//     // page= await context.newPage();
//     // const megaMenuPage= new MegaMenuPage(page);


//     // await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
//     // const megaMenuItem = await page.waitForSelector("//span[normalize-space(text())='Mega Menu']", { timeout: 10000 });
//     // await megaMenuItem.hover();

//     // await page.waitForTimeout(2000);
//     // const mobileCasesItem = await page.waitForSelector("//a[contains(text(),'Mobile cases')]", { timeout: 5000 });
//     // await mobileCasesItem.click();
//     megaMenuPage.navigateToMenu();
//     megaMenuPage.searchProduct();
//     console.log("=================hovered===================")

// })

// test('amazon login', async()=>{
//     const amazonpage= new AmazonLoginPage(page);
//     amazonpage.navigateToSignIn();
//     amazonpage.signIn();

// })

// test.afterAll("browser closed", async()=>{
//     await browser.close();
// })
// test.afterAll("browser close",async()=>{
   
//   await page.close();
// })