function tampil(){
    let info = document.getElementById("spek");
    let tambah = document.getElementById("tombol");

    if(info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
        tambah.innerText = "sembunyikan spek";
    } else {
        info.style.display = "none";
        tambah.innerText = "tampilkan spek";
    }
}

function pencet(){
    let nama = document.getElementById('namaproduk').value.trim();
    let harga = document.getElementById('hargaproduk').value.trim();
    let des = document.getElementById('deskripsi').value.trim();

    if (!nama || !harga || !des){
        swal.fire({
            icon: 'error',
            title: 'Gagal!',
            text: 'tidak ada yang baru!',
        });
        return;
    }

    swal.fire({
        icon: 'success',
        title: 'Yes!',
        text: 'Berhasil memperbarui!',
    });

    let keluar = document.getElementById('output');
    let kotak = document.createElement('div');
    kotak.className = 'container';
    kotak.innerHTML = `<div style=" border: 2px solid #ccc; padding :10px; margin-bottom: 15px;">
        <h4><strong> nama produk: </strong> ${nama}</h4>
        <p><strong>Harga:</strong> Rp ${parseInt(harga).toLocaleString()}</p>
        <p><strong>Deskripsi:</strong> ${des}</p>
        <button onclick="hapussatu(this)">HAPUS</button>
    `;
    keluar.appendChild(kotak);

    document.getElementById('namaproduk').value = '';
    document.getElementById('hargaproduk').value = '';
    document.getElementById('deskripsi').value = '';
}

function hapussatu(el){
    swal.fire({
        title: 'beneran mau di hapus?',
        icon: 'warning!',
        showCancelButton: true,
        confirmButton: 'YA',
        cancelButton: 'TIDAK JADI',
    }).then((result) =>{
        if (result.isConfirmed){
            el.parentElement.remove();
            swal.fire('mantap!', '', 'success');
        }
    }); 
}
function semua(){
    swal.fire({
        icon: 'eror',
        title: 'hapus semua ni?',
        showCancelButton:true,
        confirmButton: 'lanjut',
        cancelButton: 'gk jadi ',
}) .then((result) =>{
    if(result.isConfirmed){
        output.innerHTML='';
        swal.fire('nice', "", 'success')
    }
})

}

