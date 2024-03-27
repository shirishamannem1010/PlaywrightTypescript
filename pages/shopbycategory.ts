import { Page } from "@playwright/test";
export class ShopByCategory{
    shopbycategoryBtn:string;
    cameras:string; maxPrice:string; seeMore:string;
    palm:string;
    selectCamera:string; name:string; review:string;
    reviewBtn:string;

    constructor(public page:Page){
        this.page=page;
        this.shopbycategoryBtn="//a[@class='icon-left both text-reset']";
        this.cameras="//span[normalize-space(text())='Cameras']";
        this.maxPrice="(//input[@name='mz_fp[max]'])[2]";
        this.seeMore="(//a[@class='mz-see-more btn-link'])[2]";
        this.palm="(//label[@class='custom-control-label'])[38]";
        this.selectCamera="(//img[@class='lazy-load'])[4]";
        this.name="(//input[@class='form-control form-control-lg'])[1]";
        this.review="#input-review";
        this.reviewBtn="//button[text()='Write Review']";

    }
    async navigateToShop(){
        // await this.page.goto("https://ecommerce-playground.lambdatest.io/");
        // await this.page.waitForTimeout(5000);
        await this.page.locator(this.shopbycategoryBtn).click();
    }
    async selectCameraProduct(){
        // await this.page.locator(this.cameras).selectText()
        // await this.page.locator(this.maxPrice).clear();
        // await this.page.locator(this.maxPrice).fill("350");
        // await this.page.locator(this.seeMore).click();
        // await this.page.locator(this.selectCamera).click();
    }
    async writeReview(){
        // await this.page.locator(this.name).fill("shirisha");
        // await this.page.locator(this.review).fill("I am waiting for product availability, Thank you!");
        // await this.page.locator(this.reviewBtn).click();
        console.log("----------------- writing review-----------------")

    }
}