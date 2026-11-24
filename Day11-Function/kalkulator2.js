function tambah (a, b){
    return a+b;
}
function kurang (a, b){
    return a-b;
}
function kali (a, b){
    return a*b;
}
function bagi (a, b){
    if (b===0){
        console.log("Tidak bisa dibagi 0")
    }
     return a/b;
}

let angka1 = 20;
let angka2 = 4;
let angka3 = 10;

console.log("Hasil Tambah   :",tambah(angka1,angka2));
console.log("Hasil Tambah   :",tambah(angka2,angka3));
console.log("Hasil Tambah   :",tambah(angka3,angka1));
console.log("Hasil Kurang   :",kurang(angka1,angka3));
console.log("Hasil Bagi     :",bagi(angka1,angka2));
console.log("Hasil Kali     :",kali(angka1,angka2));