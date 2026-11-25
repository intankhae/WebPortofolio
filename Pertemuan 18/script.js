
const tombol = document.getElementById("tombol");
const area = document.querySelector(".area");

tombol.addEventListener("mouseenter", function(event) {

    //mengambil ukuran area dan tombol
    const maxX = area.clientWidth - tombol.offsetWidth;
    const maxY = area.clientHeight - tombol.offsetHeight;

    //menentukan posisi secara acak
    const posisiX = Math.random() * maxX;
    const posisiY = Math.random() * maxY;

    //memindahkan tombol
    tombol.style.left = posisiX + "px";
    tombol.style.top = posisiY + "px";

});
