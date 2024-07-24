const button = document.getElementById('TUbahWarna');
const background = document.getElementsByTagName('body')[0 ];

TUbahWarna.onclick = function(){
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute.to('class', 'biru-muda');
    document.body.classList.toggle('biru-muda'); // karena setAttribute tidak bisa toggle jadi pake classList
}

// Bikin tombol dari javascript
const AcakWarna = document.createElement('button');
const TeksTombol = document.createTextNode('Acak Warna');

AcakWarna.appendChild(TeksTombol);
AcakWarna.setAttribute('type', 'button');
TUbahWarna.after(AcakWarna);

AcakWarna.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
});