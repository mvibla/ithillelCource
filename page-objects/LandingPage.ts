import { expect, Locator, Page } from '@playwright/test';


export class LandingPage{
    readonly page: Page;
    readonly getloginfield: Locator;
    readonly getpassfield: Locator;
    readonly loginclick: Locator;
    readonly getloginerrormessage: Locator;
    readonly getshoppingcartcont: Locator;
    readonly getcontinueshopping: Locator; 
    readonly getlogincredentials: Locator;
    readonly getproductsortcontainer: Locator;
    readonly getinventoryitem: Locator;
    readonly getpasswordtext: Locator;
    readonly getusernames: Locator;
    readonly addtocartbackpack: Locator;
    readonly getremovebtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginclick = page.locator('[data-test="login-button"]');
        this.getloginfield = page.locator('[data-test="username"]');
        this.getpassfield = page.locator('[data-test="password"]');
        this.getloginerrormessage = page.locator('[data-test="error"]');
        this.getshoppingcartcont = page.locator("#shopping_cart_container");
        this.getcontinueshopping = page.locator('[data-test="continue-shopping"]');
        this.getlogincredentials = page.locator('#login_password');
        this.getproductsortcontainer = page.locator('[data-test="product_sort_container"]');
        this.getinventoryitem = page.locator('#inventory_item_label');
        this.getpasswordtext = page.getByText('Password for all users:secret_sauce');
        this.getusernames = page.locator('#login_credentials');
        this.addtocartbackpack = page.getByText('$29.99Add to cart');
        this.getremovebtn = page.locator('[data-test="remove-sauce-labs-backpack"]');
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