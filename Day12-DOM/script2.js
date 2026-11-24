let angka1 = document.getElementById("angka1");
let angka2 = document.getElementById("angka2");
let tombol = document.getElementById("tombol");
let hasil = document.getElementById("hasil");

tombol.addEventListener("click",function(){
    let nilai1 = Number(angka1.value);
    let nilai2 = Number(angka2.value);

    let total = nilai1 + nilai2;

    hasil.textContent="Hasilnya... "+ total;
})