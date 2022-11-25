import express from "express";
import cors from "cors";
import {} from "dotenv/config";

const PORT = process.env.PORT || 3001;
const app = express();

const corsOptions = {
  origin: "*", //<--TODO: update this for security
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`EcoHabit is running, server listening to ${PORT}`);
});
