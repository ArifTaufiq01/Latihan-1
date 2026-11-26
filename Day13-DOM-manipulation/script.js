let tambah = document.getElementById("tambah");
let kurang = document.getElementById("kurang"); 
let reset = document.getElementById("reset");
let angka = document.getElementById("angka");

let nilai =0;

tambah.addEventListener("click",function(){
    nilai++;
    angka.textContent =nilai;
});
kurang.addEventListener("click",function(){
    if (nilai>0){
        nilai--
    }
    angka.textContent =nilai;
});

reset.addEventListener("click",function(){
    nilai =0;
    angka.textContent =nilai;
});