let hargafoto = 40000;
let jumlahfoto = Number(prompt("Masukan Jumlah Foto :"));
let diskon;
let Diskon;

if (jumlahfoto >= 10){
    diskon =0.2;
    Diskon="20%";
}

else if (jumlahfoto >=6){
    diskon =0.15;
    Diskon="15%";
}

else if (jumlahfoto >= 3){
    diskon =0.1;
    Diskon="10%";
}

else{
    diskon =0;
    Diskon="0%";
}

let totalsebelumdiskon =hargafoto * jumlahfoto;
let potongan = totalsebelumdiskon * diskon;
let totalakhir = totalsebelumdiskon - potongan;

console.log("Harga Foto :",hargafoto);
console.log("Jumlah Foto :", jumlahfoto);
console.log("Total Belanja :", totalsebelumdiskon);
console.log("Diskon : ", Diskon);
console.log("Potongan :", potongan);
console.log("Total Pembayaran :", totalakhir)

