
let transaksi = [
    { nama: "Andi", total: 80000 },
    { nama: "Budi", total: 150000 },
    { nama: "Citra", total: 50000 },
    { nama: "Doni", total: 200000 }
];

// 1. Menampilkan nama pelanggan
transaksi.forEach(function(data){
    console.log("Nama:", data.nama);
});

// 2. Menyaring transaksi minimal 100 ribu
let transaksiBesar = transaksi.filter(function(data){
    return data.total >= 100000;
});

console.log("Transaksi besar:", transaksiBesar);

// 3. Mengambil nama pelanggan
let daftarNama = transaksi.map(function(data){
    return data.nama;
});

console.log("Daftar nama:", daftarNama);

// 4. Menghitung total transaksi
let total = transaksi.reduce(function(akumulator, data){
    return akumulator + data.total;
}, 0);

console.log("Total transaksi:", total);
