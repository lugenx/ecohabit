import app from "../index.js";
import request from "supertest";

const TOKEN = process.env.TOKEN;

const habitData = {
  category: "Test category",
  description: "Test description",
  question: "Test question?",
  answerOptions: ["Test answer 1", "Test answer 2"],
};

describe("POST habit", () => {
  let res;

  beforeAll(async () => {
    res = await request(app)
      .post("/habit/")
      .set("Authorization", `Bearer ${TOKEN}`)
      .send(habitData);
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
});

describe("POST habit with invalid inputs", () => {
  test("should return 400 Bad Request for missing category", async () => {
    const res = await request(app)
      .post("/habit/")
      .set("Authorization", `Bearer ${TOKEN}`)
      .send({
        description: "Test description",
        question: "Test question?",
        answerOptions: ["Test answer 1", "Test answer 2"],
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toMatch(/category.*required/);
  });
  //TODO: add more invalid inputs
});

describe("GET all habits", () => {
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
    const resToPost = await request(app)
      .post("/habit/")
      .set("Authorization", `Bearer ${TOKEN}`)
      .send(habitData);

    habitId = resToPost.body._id;
  });

  const makeRequest = async () => {
    const res = await request(app)
      .get(`/habit/${habitId}`)
      .set("Authorization", `Bearer ${TOKEN}`);
    return res;
  };

  test("should respond with status code 200", async () => {
    const res = await makeRequest();
    expect(res.statusCode).toEqual(200);
  });

  test("should respond JSON data", async () => {
    const res = await makeRequest();
    expect(res.header["content-type"]).toMatch(/application\/json/);
  });

  test("should respond data with correct key and value", async () => {
    const res = await makeRequest();
    expect(res.body).toHaveProperty("category", "Test category");
  });
});
