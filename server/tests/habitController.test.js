import app from "../index.js";
import request from "supertest";
import userData from "./data/userData.json";
import habitData from "./data/habitData.json";

const newUser = userData.newUser;
const validHabit = habitData.validHabit;
const categoryMissingHabit = habitData.categoryMissingHabit;

let token;

//create a temporary user
beforeAll(async () => {
  const signupResponse = await request(app).post("/user/signup").send(newUser);

  if (!signupResponse.ok) {
    throw new Error("Temporary user sign up failed");
  }

  const loginResponse = await request(app)
    .post("/user/login")
    .send({ email: newUser.email, password: newUser.password });

  if (!loginResponse.ok) {
    throw new Error("Temporary user sign up failed");
  }
  token = await loginResponse.body.token;
});

describe("POST habit", () => {
  let res;

  beforeAll(async () => {
    res = await request(app)
      .post("/habit/")
      .set("Authorization", `Bearer ${token}`)
      .send(validHabit);
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
      .set("Authorization", `Bearer ${token}`);
  });
});

describe("POST habit with invalid inputs", () => {
  test("should return 400 Bad Request for missing category", async () => {
    const res = await request(app)
      .post("/habit/")
      .set("Authorization", `Bearer ${token}`)
      .send(categoryMissingHabit);
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
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.header["content-type"]).toMatch(/application\/json/);
  });
});

describe("GET habit", () => {
  let habitId;

  beforeAll(async () => {
    const postedToGet = await request(app)
      .post("/habit/")
      .set("Authorization", `Bearer ${token}`)
      .send(validHabit);

    habitId = postedToGet.body._id;
  });

  let res;

  beforeEach(async () => {
    res = await request(app)
      .get(`/habit/${habitId}`)
      .set("Authorization", `Bearer ${token}`);
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
      .set("Authorization", `Bearer ${token}`);
  });
});

//TODO: afterAll delete the temporary user
