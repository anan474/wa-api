const wbm = require("wbm");

if (KIRIM_WA) wbm.start({ showBrowser: true });

async function notifWA(pesan) {
  console.log("mengirim pesan");
  console.log(pesan);
  if (KIRIM_WA) await wbm.send(pesan.untuk, pesan.teks);
}
