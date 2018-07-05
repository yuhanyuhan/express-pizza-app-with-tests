const request = require("supertest");
const app = require("../app");

test("GET / should return hello pizzas", async () => {
  const response = await request(app).get("/");
  expect(response.status).toEqual(200);
  expect(response.body).toEqual("hello pizzas");
});

test("POST /pizzas should add", async () => {
  const TEST_DATA = [{
    name: "xx",
    pizza: "spicy"
  }];

  const response = await request(app)
    .post("/pizzas")
    .send(TEST_DATA);
  expect(response.status).toEqual(200);
  expect(response.body).toEqual(TEST_DATA);
});
