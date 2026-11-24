let deskripsi = document.getElementById("deskripsi");
let tombol = document.getElementById("tombol");
let jumlahklik =0;

tombol.addEventListener("click", function(){
    while(jumlahklik<=30){
        if (jumlahklik===1){
            deskripsi.style.color="red";
        }
        else if (jumlahklik===2){
            deskripsi.style.color="blue";
        }
        else if (jumlahklik===3){
            deskripsi.style.color="green";
        }
        else{
            return;
        }
        jumlahklik++;
    }
});