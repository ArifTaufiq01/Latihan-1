let totalbelanja;
let jumlahfoto;
let hargafoto =40000;

console.log("Masukan Total Belanja :", totalbelanja);
console.log("Masukan Jumlah Foto :",jumlahfoto);
let diskon;
let diskontext;

if (jumlahfoto >= 10){
    diskon =0.2;
    diskontext="20%";
}
else if ( jumlahfoto >=6){
    diskon=0.15;
    diskontext="15%";
}
else if ( jumlahfoto >=3){
    diskon=0.1;
    diskontext="10%";
}
else{
    diskon=0;
    diskontext=0;
}

let totalsebelumdiskon=totalbelanja * jumlahfoto;
let potongan = totalbelanja *diskon;
let hargakahir = totalbelanja-potongan;

console.log("Harga Perfoto :",hargafoto);
console.log("Jumlah Foto :", jumlahfoto);
console.log("Total Belanja :", totalsebelumdiskon);
console.log("Diskon :", diskontext);
console.log("Potongan :", potongan);
console.log("Total pembayaran ", hargakahir);