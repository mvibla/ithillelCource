import { test, expect } from '@playwright/test';
import { LandingPage } from '../page-objects/LandingPage';

let testURL = 'https://www.saucedemo.com/';
let usernameenter = '[data-test="username"]';
let passwordenter = '[data-test="password"]';
let loginclick = '[data-test="login-button"]';

test.describe('login suite', async () => {

    test('has title', async ({ page }) => {
        const landingPage = new LandingPage(page);
        await landingPage.goto();

        await expect(landingPage.page).toHaveTitle(/Swag Labs/);
    });

    test('check Login error page of saucedemo', async ({ page }) => {
        const landingPage = new LandingPage(page);
        await landingPage.goto();
        await landingPage.getloginfield.fill("incorrectuser");
        await landingPage.getpassfield.fill("12345678");
        await landingPage.loginclick.click();

        await expect(landingPage.getloginerrormessage).toBeVisible();
    });

    test('check correct Login page of saucedemo', async ({ page }) => {
        const landingPage = new LandingPage(page);
        await landingPage.goto();
        await landingPage.getloginfield.fill("standard_user");
        await landingPage.getpassfield.fill("secret_sauce");
        await landingPage.loginclick.click();

        expect(true).toBeTruthy();
        await expect(landingPage.getshoppingcartcont).toBeVisible();
    });

    test('check continue shopping button of saucedemo', async ({ page }) => {
        const landingPage = new LandingPage(page);
        await landingPage.goto();
        await landingPage.getloginfield.fill("standard_user");
        await landingPage.getpassfield.fill("secret_sauce");
        await landingPage.loginclick.click();
        await landingPage.getshoppingcartcont.click();

        expect(true).toBeTruthy();
        await expect(landingPage.getcontinueshopping).toBeVisible();
    });

    test('Chechout from shopping cart of saucedemo', async ({ page }) => {
        const landingPage = new LandingPage(page);
        await landingPage.goto();
        await landingPage.getloginfield.fill("standard_user");
        await landingPage.getpassfield.fill("secret_sauce");
        await landingPage.loginclick.click();
        await landingPage.getshoppingcartcont.click();
        await landingPage.getcontinueshopping.click();

        await expect(landingPage.getlogincredentials).toBeHidden();
        await expect(landingPage.page).toHaveTitle(/Swag Labs/);
    });

    test('Check Product Sort Container data of saucedemo', async ({ page }) => {
        const landingPage = new LandingPage(page);
        await landingPage.goto();

        await landingPage.getloginfield.fill("standard_user");
        await landingPage.getpassfield.fill("secret_sauce");
        await landingPage.loginclick.click();
        await landingPage.getproductsortcontainer.click();
        await landingPage.getproductsortcontainer.selectOption(['za']);

        await expect(landingPage.getproductsortcontainer).toBeEditable();
        await expect(landingPage.getproductsortcontainer).toHaveText("Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)");
    });
    
})
