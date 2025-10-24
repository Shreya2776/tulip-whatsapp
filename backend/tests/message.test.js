import request from "supertest";
import app from "../src/app";

describe("POST /api/messages/send", () => {
  it("should return 400 for missing fields", async () => {
    const res = await request(app).post("/api/messages/send").send({});
    expect(res.statusCode).toEqual(400);
  });
});
