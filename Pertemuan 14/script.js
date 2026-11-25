//exfunction 1
function sapa (nama){
    console.log("Halo nama saya " + nama);
}
sapa ("Intan");
sapa ("Khae");

//ex function 2
function perkenalan (nama, usia, alamat){
    console.log ("Nama :" +nama);
    console.log ("Usia :" +usia);
    console.log ("Alamat :" +alamat);
}
perkenalan("Nisa","21","Tangerang");

//function with return
function hitungLuas(panjang, lebar){
    return panjang + lebar;
}
let hasil = hitungLuas(10,5);
console.log("Luas :" + hasil );

//function with expression
const tambah = function(a, b){
    return a + b;
};
console.log(tambah(10,6));

//Object
let mhs = {
    nama : "Intan",
    nim : "12345",
    kelas : "05SISE004",
};
mhs.semester ="5"; //add object
mhs.nama = "Khae"; //change
console.log(mhs);
console.log(mhs.nama);

//Methode
let mobil = {
    merek : "Honda",
    model : "Civic",
    warna : "White",
    tahun : "2026",

    tampilkanInfo : function () {
        console.log("Merek :" + this.merek);
        console.log("Model :" + this.model);
        console.log("Warna :" + this.warna);
    },

}
//panggil data
mobil.tampilkanInfo();

//Method 2
let kalkulator = {
    tambah :function(a,b){
        return a + b;
    },
    kurang : function (a,b){
        return a - b;
    },
};
console.log(kalkulator.tambah(10,9));
console.log(kalkulator.kurang(30,2));

//studi kasus menghitung hasil akhir dan menentukan grade

let mahasiswa = {
    nama : "Intan",
    nim : "2410725",
    kelas : "05SISE004",
    prodi : "Sistem Informasi",
    absen : 21,
    nilaiTugas : 80, //30%
    nilaiUTS : 70, //30%
    nilaiUAS : 80, //40%

    //
    convertAbsen : function (maxAbsen = 21) {
        return (this.absen/maxAbsen) * 10;
    },
    //membuat methode menghitung nilai akhir
    hitungNilaiAkhir : function () {
        return this.convertAbsen () + (this.nilaiTugas * 0.2) + (this.nilaiUTS * 0.3) + (this.nilaiUAS * 0.4);
    },
    //
    tampilkanData : function () {
        console.log ("Nama :" + this.nama);
        console.log ("Nim :" + this.nim);
        console.log ("Kelas :" + this.kelas);
        console.log ("Program Studi :" + this.prodi);
        console.log ("Nilai Akhir :" + this.hitungNilaiAkhir());
    },
};
//membuta function menentukan grade
function tentukanGrade ( nilai){
    if (nilai >= 85){
        return "A";
    } else if (nilai >= 79){
        return "B";
    } else if (nilai >= 69){
        return "C";
    } else if (nilai >= 59){
        return "D";
    } else {
        return "E";
    }
}
//panggil methode object
mahasiswa.tampilkanData();
//
let nilaiAkhir = mahasiswa.hitungNilaiAkhir();
console.log("Grade : " , tentukanGrade(nilaiAkhir));
