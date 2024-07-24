let item = prompt('Masukkan nama makanan / minuman \n (cth: nasi, susu, daging, hamburger, softdrink');

switch (item) {
    case 'nasi':
    case 'susu':
    case 'daging':
        alert('Makanan / minuman SEHAT!')
        break;

    case 'hamburger':
    case 'softdrink':
        alert('Makanan / minuman TIDAK SEHAT!')
        break;

    default:
        alert('Item yang Anda masukkan tidak terdaftar!')
}