import { test, expect, APIResponse } from "@playwright/test";
import { request } from "https";

test("get all users", async ({ request }) => {
  const response = await request.get(
    `https://reqres.in/api/users?page=2`
  );
  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody["page"]).toBe(2);
  expect(responseBody["per_page"]).toBe(6);
  expect(responseBody["total"]).toBe(12);
  expect(responseBody["total_pages"]).toBe(2);
  expect(responseBody["data"].length).toBe(6);

  expect(responseBody["data"]).toContainEqual(
    expect.objectContaining({
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
    })
  );
});

test("create new user", async ({ request }) => {
  let uniqueEmail = `test.automation.scenario.${Date.now()}@gmail.com`
  const response = await request.post(`https://reqres.in/api/users`, {
    data: {
      "name": "morpheus",
      "job": "leader",
      "email": `${uniqueEmail}`
    }
  });
  expect(response.status()).toBe(201);

  const responseBody = await response.json();
  expect(responseBody["id"]).toBeDefined();
  expect(responseBody["createdAt"]).toBeDefined();
  expect(responseBody["name"]).toBe("morpheus");
  expect(responseBody["email"]).toBeDefined();
  expect(responseBody["email"].includes("@gmail.com")).toBeTruthy();
});

test("update user", async ({ request }) => {
  const response = await request.put(`https://reqres.in/api/users/2`, {
    data: {
      "name": "morpheus79",
      "job": "zion resident79"
    }
  });
  const responsJson = await response.json();

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  expect(await responsJson.name).toBe("morpheus79");
  expect(await responsJson.job).toBe("zion resident79");
});

test("delete user", async ({ request }) => {
  const response = await request.delete(`https://reqres.in/api/users/2`);

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(204);
});

test("patch user", async ({ request }) => {
  const response = await request.patch(`https://reqres.in/api/users/2`, {
    data: {
      "name": "newuser",
      "job": "zion resident"
    }
  });
  const responsJson = await response.json();

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  expect(await responsJson.name).toBe("newuser");
  expect(await responsJson.job).toBe("zion resident");
});