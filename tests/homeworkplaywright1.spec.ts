import { test, expect } from "@playwright/test";


test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
});

test.describe("SaucoDemo tests", () => {
  test("check SaucoDemo title", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Swag Labs/);
  });

  test.describe("SaucoDemo check URL", () => {
    test("check SaucoDemo URL", async ({ page }) => {
      // Expect a title "to contain" a substring.
      await expect(page).toHaveURL("https://www.saucedemo.com/");
    });

    test.describe("LogIn2", () => {
      test("check LogIn function2", async ({ page }) => {
        // Expect a title "to contain" a substring.
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();
        await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
        await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible();
        await expect(page.getByText('Sauce Labs Fleece Jacket')).toBeVisible();
        
        });
        
  });

test.describe("LogIn", () => {
    test("check LogIn function", async ({ page }) => {
      // Expect a title "to contain" a substring.
      await page.locator('#user-name').fill('standard_user');
      await page.locator('#password').fill('secret_sauce');
      await page.locator('#login-button').click();
      await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
});

test.describe("Add to cart", () => {
  test("check Add to cart", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect(page.locator(".inventory_item").locator("#add-to-cart-sauce-labs-bike-light")).toBeVisible();
    
    });
    
});
});
});