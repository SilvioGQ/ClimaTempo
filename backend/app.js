const Cities = require("./routes");
const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  return res.json({
    system: {
      nome: "Silvio",
      version: "0.0.1-SNAPSHOT",
    },
  });
});

app.use("/clima", Cities);

app.listen(8080, () => console.log("Listening at 8080"));
