// let nama = "Intan"; //string
// let umur = "21"; //number
// let tinggiBadan = "155.1"; //float
// let beratBadan; //undifine
// let pacar = 1; //null

// beratBadan = 40;

// //if else
// //if (pacar == null){
// //    pacar = "jomblo";
// //} else {
// //    pacar ="sudah punya pacar";
// //}

// //switch case
// switch (pacar) {
//     case 1:
//         pacar ="saya sudah punya pacar";
//         break;
//     case 2:
//         pacar ="saya punya pacar pacar";
//         break;
//     case 3:
//         pacar ="saya punya banyak pacar";
//         break;
//     default:
//         pacar ="jomblo;"
//         break;
// }
// alert(`Halo nama saya ${nama}, umur saya saat ini ${umur}, tinggi badan saya ${tinggiBadan} cm, dengan berat badan saat ini ${beratBadan}, dan untuk status hubungan saya saat ini ${pacar}`);

// console.log(`Halo nama saya ${nama}, umur saya saat ini ${umur}, tinggi badan saya ${tinggiBadan} cm, dengan berat badan saat ini ${beratBadan}, dan untuk status hubungan saya saat ini ${pacar}`)

// let saldoAwal = 12000000;
// let saldoTambahan =2000000;
// let hutang = 800000;
// let saldoAkhir = saldoAwal + saldoTambahan - hutang;

// console.log(`saldo awal Bulan ini sebesar ${saldoAwal}, dengan tambahan saldo sebesar ${saldoTambahan}, akan tetapi saya mempunyai hutang paylatter sebesar ${hutang}, jadi sisa saldo saya ${saldoAkhir}`);

// //Array
// namaMhs = ("Intan","Selly","Budi");
// namaMhs.push("Lisda", "Alda");
// console.log(namaMhs);

// //FOR
// for (i=0; i<=20; i++){
//     console.log("Hey sis!");
// }

// for(let i = 0; i < namaMhs.length; i++){
//     console.log(namaMhs(i));
// }

function hitungNilai(){
    //ambil data inputan
    let nama = document.getElementById("nama").value;
    let nilai = Number(document.getElementById("nilai").value);

    let hasil="";

    //validasi input
    if (nama== "" || document.getElementById("nilai").value === "") {
        hasil = "Nama dan nilai harus diisi!!";
    }

    //cek rentang nilai
    else if (nilai < 0 || nilai > 100) {
        hasil = "nilai harus diisi 0-100";
    }
    //cek kelulusan
    else if (nilai >= 75){
        hasil = nama + " dinyatakan lulus";
    } else {
        hasil = nama + " dinyatakan tidak lulus";
    }

    //menampilkan hasil ke halaman web 
    document.getElementById("hasil").innerHTML = hasil;
}