"use strict";

const AxiosMockAdapter = require(
  "axios-mock-adapter");
const axios = require("axios");
const axiosMock = new AxiosMockAdapter(axios);

const {
  shipProduct,
} = require("./shipItApi");

const BASE_URL = "http://localhost:3001/ship"

test("shipProduct", async function () {
  axiosMock.onPost(BASE_URL).reply(200, {receipt: {
    itemId: 1000,
    name: "Test Tester",
    addr: "100 Test St",
    zip: "12345-6789",
    shipId: 1234
  }});

  const shipId = await shipProduct({
    productId: 1000,
    name: "Test Tester",
    addr: "100 Test St",
    zip: "12345-6789",
  });

  expect(shipId).toEqual(1234);

});
