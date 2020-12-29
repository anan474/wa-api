## wa-api
Simple API untuk mengirim WA, menggunakan pustaka [wbm](https://www.npmjs.com/package/wbm) yang menggunakan [Puppeter](https://pptr.dev/) sebagai headless web browser untuk mengirimkan WA.

Syarat pakai:
Pasang ```node.js``` dari [sini](https://nodejs.org/en/).

Cara pakai:
Jalankan berikut ini pada terminal.
```
//clone kode sumber
git clone https://github.com/anan474/wa-api.git

//masuk ke folder
cd wa-api

//install pustaka
npm install

//mulai program
node server.js
```
Program akan menampilkan QR code, scan menggunakan WA anda.

Panggil ke url ```http://localhost:3000/``` dengan isi body dengan format sebagai berikut:
```
{
  "untuk":[628xxxxxxxxxx, 628xxxxxxxxxx],
  "teks":"pesan anda"
}
```
Parameter `untuk` merupakan Array berisi nomor telepon, `teks` merupakan pesan yang akan dikirim ke nomor yang diisi sebelumnya.

Done :)
