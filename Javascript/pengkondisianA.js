alert('Halo selamat datang ...');
let lagi = true;

while (lagi) {
    let nama = prompt('masukkan nama Anda');

    if (nama) {
        alert('Nama anda ' + nama)
        lagi = confirm('coba lagi?');
}

else {
    alert ('namanya belom dimasukin bambang');

    lagi = confirm('coba lagi?');
}

}

alert('terima kasih');