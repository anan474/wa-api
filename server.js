require("dotenv-safe").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");
const wa = require("./wa");

const app = express();

// port yang digunakan server express, diatur di ENV, default: 3000
app.set("port", process.env.PORT || 3000);

app.use(morgan("tiny"));

// parsing json
app.use(
  bodyParser.json({
    limit: "20mb",
  })
);

app.use(cors());
app.use(compression());
app.use(helmet());

if (process.env.WA_ON) {
  wa.setup_wa();
}

app.get("/", async function (req, res) {
  const { untuk, teks } = req.body;
  if (untuk && teks) {
    await wa.kirim_wa({ untuk, teks }).then(() => {
      res.send({
        error: false,
        pesan: "pesan berhasil dikirim",
      });
    });
  } else {
    res.send({
      error: true,
      pesan: "nomor tujuan atau pesan bermasalah",
    });
  }
});

app.listen(app.get("port"));
