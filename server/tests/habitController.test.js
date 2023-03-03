import app from "../index.js";
import request from "supertest";

const TOKEN = process.env.TOKEN;

const dummyHabitData = {
  category: "Test category",
  description: "Test description",
  question: "Test question?",
  answerOptions: ["Test answer 1", "Test answer 2"],
};

const invalidHabitData = {
  // category is missing
  description: "Invalid Input Test description",
  question: "Invalid Input Test question?",
  answerOptions: ["Invalid Input Test answer 1", "Invalid Input Test answer 2"],
};

describe("POST habit", () => {
  let res;

  beforeAll(async () => {
    res = await request(app)
      .post("/habit/")
      .set("Authorization", `Bearer ${TOKEN}`)
      .send(dummyHabitData);
  });

  test("should respond with status code 200", async () => {
    expect(res.statusCode).toEqual(200);
  });

  test("should respond JSON data", async () => {
    expect(res.header["content-type"]).toMatch(/application\/json/);
  });

  test("should respond data with correct key and value", async () => {
    expect(res.body).toHaveProperty("category", "Test category");
  });

  afterAll(async () => {
    await request(app)
      .delete(`/habit/${res.body._id}`)
      .set("Authorization", `Bearer ${TOKEN}`);
  });
});

describe("POST habit with invalid inputs", () => {
  test("should return 400 Bad Request for missing category", async () => {
    const res = await request(app)
      .post("/habit/")
      .set("Authorization", `Bearer ${TOKEN}`)
      .send(invalidHabitData);
    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toMatch(/category.*required/);
  });
  //TODO: add more invalid inputs
});

describe("GET all habits", () => {
  //TODO: post multiple habits before test so it works with empty db and delete them after test.
  test("should return JSON data with status 200", async () => {
    const res = await request(app)
      .get("/habit/")
      .set("Authorization", `Bearer ${TOKEN}`);

    expect(res.statusCode).toEqual(200);
    expect(res.header["content-type"]).toMatch(/application\/json/);
  });
});

describe("GET habit", () => {
  let habitId;

  beforeAll(async () => {
    const postedToGet = await request(app)
      .post("/habit/")
      .set("Authorization", `Bearer ${TOKEN}`)
      .send(dummyHabitData);

    habitId = postedToGet.body._id;
  });

  let res;

  beforeEach(async () => {
    res = await request(app)
      .get(`/habit/${habitId}`)
      .set("Authorization", `Bearer ${TOKEN}`);
  });

  test("should respond with status code 200", async () => {
    expect(res.statusCode).toEqual(200);
  });

  test("should respond JSON data", async () => {
    expect(res.header["content-type"]).toMatch(/application\/json/);
  });

  test("should respond data with correct key and value", async () => {
    expect(res.body).toHaveProperty("category", "Test category");
  });

  afterAll(async () => {
    await request(app)
      .delete(`/habit/${habitId}`)
      .set("Authorization", `Bearer ${TOKEN}`);
  });
});
