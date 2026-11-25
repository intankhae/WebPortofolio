//tanpa perulangan
console.log('Belajar Perulangan');
console.log('Belajar Perulangan');
console.log('Belajar Perulangan');
console.log('Belajar Perulangan');
console.log('Belajar Perulangan');

//dengan perulangan
for (let i = 1; i<= 5; i++) {
    console.log("Perulangan dengan For :" + i);
}

//perulangan dengan whilw
let angka = 1;
while (angka <= 5) {
    console.log("Perulangan dengan while :" + angka);
    angka++;
}

//perulangan dengan do while
let x = 6;
do {
    console.log("Perulangan degan do while :" + x);
    x++;
} while (x <= 5);

//perulangan dengan array dengan for biasa
let mahasiswa = ["Intan", "Selly", "Budi", "Agus"];
for (let i =0; i<=mahasiswa.length; i++){
    console.log(mahasiswa[i]);
}

//perulangan dengan for...of
let buah = ["Aple", "Strawberry", "Pir", "Jeruk"];
for (item of buah){
    console.log(item);
}

//perulangan for...in
let motor = {
    merek: "Honda",
    model: "vario",
    warna: "Hitam",
};
for (let data in motor) {
    console.log(data);
}

//perulangan dengan break
for (let y = 1; y<=10; y++){
    if (y ===7){
        break;
    }
    console.log(y);
}

//perulangan dengan continue
for (let z = 1; z<= 10; z++){
    if (z=== 7){
        continue;
    }
    console.log(z);
}

//contoh kasus untuk menghitung nilai mahasiswa 
//web = 90, audit = 80, crm=100

let nilai = [90,80,100,60,78];
let totalNilai = 0;
for (let i = 0; i<nilai.length; i++){
    totalNilai += nilai[i];
}
let rataRata =totalNilai/nilai.length;
//menampilkan output
console.log("Total Nilai :" + totalNilai);
console.log("Rata-rata Nilai :" + rataRata);

//contoh kasus untuk belanja
let barang = ["Baju","Sepatu","Jam","Tas"];
let hargaBarang = [200000, 140000, 400000, 250000];

let totalPembelian = 0;

//menampilkan data barang
console.log("====DAFTAR BELANJA====");

for (let i = 0; i < barang.length; i++){
    console.log(barang[i] + ": Rp." + hargaBarang[i]);
    totalPembelian += hargaBarang[i];
}

//menampilkan total
console.log("======================");
console.log("Total belanja: " + totalPembelian);

//tabungan mahasiswa
let saldoAwal = 400000;
let tabunganBulanan = 100000;
let jumlahBulan = 18;

console.log("====SIMULASI TABUNGAN MAHASISWA====");

let saldo = saldoAwal;

for (let bulan = 1; bulan < jumlahBulan; bulan++){
    saldo = saldo + tabunganBulanan;

    console.log ("Bulan ke- "+ bulan + "Saldo Rp. " + saldo);
}
console.log ("Total Tabungan : Rp. " + saldo);