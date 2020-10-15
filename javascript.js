 function getClick(elem) {
    let getDeskripsi = document.getElementById("deskripsi-biodata");

    let getFoto = document.getElementById("myface");

    if (elem == "wildan") { 
        getFoto.src = "/img/profile.png";
        getDeskripsi.innerHTML = " <p>Halo nama saya <b>Muhammad Wildan Hawari</b>. <br> Saya berdomisili di Kota Jakarta Timur. Hobby saya Pencak Silat.<br>Umur saya 16 Tahun</p > ";
    } else {
        getFoto.src = "/img/mic.png";
        getDeskripsi.innerHTML = " <p><p>Halo nama saya <b>Michael Danu Ekklasiya</b>. <br> Saya berdomisili di Kota Bogor. Hobby saya Bermain Musik.<br>Umur saya 16 Tahun</p > </p > "; //deskripsi lu
    }

    console.log(elem);


}
