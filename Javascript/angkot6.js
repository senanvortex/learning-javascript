let jmlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

// bikin sendiri

// for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//     if (noAngkot <= angkotBeroperasi) {
//         if (noAngkot === 5) {
//             console.log('Angkot ke-'+ noAngkot + ' sedang lembur');
//     }

//     else {
//         console.log('Angkot ke-' + noAngkot +' beroperasi dengan baik');
//     }
// }

//     else if (noAngkot === 8 || noAngkot === 10){
//         console.log('Angkot ke-'+ noAngkot + ' sedang lembur');
//     }

//     else {
//         console.log('Angkot ke-'+ noAngkot +' sedang tidak beroperasi');
//     }
// }


// opsi lain versi upnas

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

    if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {

        console.log('Angkot ke-' + noAngkot +' beroperasi dengan baik');
    }

    else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log('Angkot ke-'+ noAngkot + ' sedang lembur');
    }

    else {
        console.log('Angkot ke-'+ noAngkot +' sedang tidak beroperasi');
    }
}

// Pelajarannya di sesi ini adalah lu bisa masukin operator &&, ||, !== pada pengkondisian untuk menerapkan logika pada hasil if dan else.

// kenapa else if nya ga pake && untuk angkot lembur, karena kalo pake && dibacanya jadi nomor angkot yang sama, dan itu ga bakal tercapai

//PENGKONDISIAN : Latihan Pengkondisian pada JAVASCRIPT