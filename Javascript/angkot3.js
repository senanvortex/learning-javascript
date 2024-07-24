let jmlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot ke- ' + noAngkot +' beroperasi dengan baik');
    }
    else {
        console.log('Angkot ke- '+ noAngkot +' sedang tidak beroperasi');
    }
}