const request = require("supertest");
const app = require("../src/app");

describe("GET /", () => {
  it("debe responder 200 y el texto correcto", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("Hola Mundo DevOps CI/CD");
  });
});
