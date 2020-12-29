const wbm = require("wbm");

function setup_wa() {
  wbm.start();
}

async function kirim_wa(pesan) {
  console.log(`${pesan.untuk};${pesan.teks}`);
  await wbm.send(pesan.untuk, pesan.teks).catch((err) => {
    console.log(err);
  });
}

module.exports = {
  setup_wa,
  kirim_wa,
};
