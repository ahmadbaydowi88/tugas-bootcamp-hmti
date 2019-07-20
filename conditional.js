var Umur = 18;
if (Umur > 17) {
    console.log("Saya harus mempunyai KTP");
}
console.log(" dan layak  menpunyai SIM");

var angka = 17;
if (angka % 2 == 0) {
    console.log("Angka = " + angka);
    console.log("Angka adalah bilangan genap");
}
else {
    console.log("Angka = " + angka);
    console.log("Angka adalah bilangan ganjil");
}

var h = new Date();
var mingguan = new Array("Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu");
console.log("Hari : " + mingguan[h.getDay()]);
var hari = h.getDay();
if (hari == 0 || hari == 6) {
    console.log("<br/>Selamat Berlibur");
}
else if (hari == 1) {
    console.log("<br/>I Like Monday");
    console.log("<br/>Selamat Bekerja");
}
else {
    console.log("<br/>Selamat Bekerja");
}
var angka = 7;

if (angka > 5) {
    console.log("angka ini lebih besar dari 5");
    if (angka <= 10) {
        console.log("angka ini lebih besar atau sama dengan 10");
    }
}
