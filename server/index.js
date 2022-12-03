import express from "express";
import cors from "cors";
import {} from "dotenv/config";
import earth911Router from "./src/routes/earth911routes.js";

const PORT = process.env.PORT || 3001;
const app = express();

const corsOptions = {
  origin: "*", //<--TODO: update this for security
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Ok!');
});

app.use('/', earth911Router);

app.listen(PORT, () => {
  console.log(`EcoHabit is running, server listening to ${PORT}`);
});
