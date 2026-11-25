
function hitungTotal() {

    //mengambil data input
    let nama = document.getElementById("nama").value;
    let belanja = document.getElementById("belanja").value;

    //validasi input
    if (nama.trim() === "" || belanja === "") {
        alert("Nama pembeli dan total belanja harus diisi!");
        return;
    }

    belanja = Number(belanja);

    if (belanja <= 0) {
        alert("Total belanja harus lebih dari 0!");
        return;
    }

    //menentukan diskon
    let diskon = 0;

    if (belanja >= 500000) {
        diskon = 20;
    } else if (belanja >= 300000) {
        diskon = 15;
    } else if (belanja >= 100000) {
        diskon = 10;
    } else {
        diskon = 0;
    }

    //menghitung potongan dan total bayar
    let potongan = belanja * diskon / 100;
    let totalBayar = belanja - potongan;

    // format rupiah
    function rupiah(angka) {
        return angka.toLocaleString("id-ID");
    }

    //menampilkan hasil
    document.getElementById("hasil").innerHTML =
        "Nama Pembeli: " + nama + "<br>" +
        "Total Belanja: Rp " + rupiah(belanja) + "<br>" +
        "Diskon: " + diskon + "%<br>" +
        "Potongan: Rp " + rupiah(potongan) + "<br>" +
        "Total Bayar: Rp " + rupiah(totalBayar);
}
