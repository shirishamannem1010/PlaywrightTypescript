// logintest.spec.ts
const { chromium, test } = require("@playwright/test");
import { LoginPage } from "../pages/loginpage";
import { ProductPage } from "../pages/productpage";
import { ShopByCategory } from "../pages/shopbycategory";

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

    await loginPage.lamdalogout();
    console.log("=========== logout successful=============");
});

test("Select product on Lamdatest after login", async () => {
    const productPage = new ProductPage(page);
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await productPage.navigateToSamsungProduct();
    await productPage.selectProduct();
    await productPage.paymentDetails();
    await productPage.billingAdress();
});
test("shop by category options", async()=>{
    const shopbyCategory= new ShopByCategory(page);
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    shopbyCategory.navigateToShop();
    shopbyCategory.selectCameraProduct();
    // // shopbyCategory.writeReview();

    // await page.close()
});
