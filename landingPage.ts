import { expect, type Locator, type Page } from '@playwright/test';

export class LandingPage{
    readonly page: Page;
    readonly getloginfield: Locator;
    readonly getpassfield: Locator;
    readonly loginclick: Locator;
    readonly getloginerrormessage: Locator;
    readonly getshoppingcartcont: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginclick = page.locator('[data-test="login-button"]');
        this.getloginfield = page.locator('[data-test="username"]');
        this.getpassfield = page.locator('[data-test="password"]');
        this.getloginerrormessage = page.locator('[data-test="error"]');
        this.getshoppingcartcont = page.locator("#shopping_cart_container");

      }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
      }

    async login(username : String, password : String){
        await this.getloginfield.fill("");
        await this.getpassfield.fill("");
        await this.loginclick.click();
    }
}
