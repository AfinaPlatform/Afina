const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3001;
const lessons = require("./modules/lessons/routes");

app.use(cors());
app.use(express.json());
app.use("/lessons", lessons);

async function main() {
  try {
    await mongoose.connect(
      process.env.AFINA_DB_URL || "mongodb://127.0.0.1:27017/afina"
    );

    app.listen(port, () => {
      console.log(`App listening on port: ${port}`);
    });
  } catch (e) {
    console.error(e);
  }
}

main();
