let angka = prompt('Masukkan sebuah angka');

switch (angka) {
    case '1':
        console.log('Angka 1 adalah angka satu');
        break;
    case '2':
        console.log('Angka 2 adalah angka dua');
        break;
    case '3':
        console.log('Angka 3 adalah angka tiga');
        break;
    default:
        console.log('Input bukan angka');
}

// kenapa angka menggunakan string karena prompt masuknya string
