let totalbelanja = 700000;
let diskon =0;

if (totalbelanja >= 500000){
    console.log("Selamat anda mendapatkan diskon 20%");
    diskon =0.2;
}
else if(totalbelanja >=250000){
    console.log("Selamat anda mendapatkan diskon 10%")
    diskon=0.1;
}
else{
    console.log("Anda tidak dapat diskon")
    diskon=0;
}

let potongan = totalbelanja * diskon;
let total = totalbelanja - potongan;

console.log("total belanja anda setelah diskon",total );