var status = "Jomblo";
var kampus = "Bansal";

if (status == "Jomblo" || kampus == "Unisma") {
    console.log("Maka: " + true);
} else {
    console.log("Maka: " + false);
}

//Array
var nama_jomblo = ["Kemal", "Daus", "Fardan", "Chelsea", "Denny"]
console.log(nama_jomblo);

//Object
var pelanggan = {
    name: "Adi",
    age: 20,
    address: "Jakarta",
    "Sudah pesan": true,
    pesanan: ["Kasur", "Bantal", "Guling"],

};

console.log("Nama Pelanggan :", pelanggan.name);
console.log("Umur Pelanggan: ", pelanggan.age);
console.log("Alamat Pelanggan: ", pelanggan.address);
console.log("Pesanan Pertama: ", pelanggan.pesanan[1]);

//Array of Object
var mahasiswa = [
    {
        name: "Chelsea",
        age: 20,
        class: "TI/6B/Malam"
    },
    {
        name: "Kemal",
        age: 25,
        address: "Jogja"
    }
];

console.log(mahasiswa);

//Jawaban No. 2
var hmti = [
    {
        name: "Denny Septiady",
        address: "Pondok Ungu",
        gender: "Male"
    },
    {
        name: "Nafisah Azizah",
        address: "Tambun Selatan",
        gender: "Female"
    }
];

console.log([hmti[0].name + " - " + hmti[0].address + " - " + hmti[0].gender]);
