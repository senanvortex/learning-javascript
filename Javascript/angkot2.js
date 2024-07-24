let jmlAngkot = 10;
let angkotBeroperasi = 8;
let noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot ke-' + noAngkot +' beroperasi dengan baik');
    noAngkot++;
}

for (let noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('Angkot ke-' + noAngkot +' sedang tidak beroperasi');
}

// Kesimpulan dari pelajaran kali ini adalah kita bisa mengunakan angkotBeroperasi + 1, namun hal tersebut beda dengan angkot beroperasi++ karea kalo ++ itu angka awal juga dihitung