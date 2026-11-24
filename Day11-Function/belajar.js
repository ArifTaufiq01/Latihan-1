function hitungtotal (harga, jumlah ){
    return harga * jumlah ;
}

let totalbelanja = hitungtotal(40000,4);
let diskon = totalbelanja * 0.1;
let pembayaran = totalbelanja - diskon;

console.log(" Total ",pembayaran );