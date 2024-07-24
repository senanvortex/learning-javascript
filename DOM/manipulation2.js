//Manipulation Node List

// document.createElement       untuk buat element
// document.createTextNode      untuk buat text dalam node
// node.appendChild()           untuk memasukkan sesuatu ke child
// node.insertBefore()          untuk mekasukkan sesuatu sebelum sesuatu
// parentNode.removeChild()     untuk menghapus child
// parentNode.replaceChild()    untuk menggantikan child

const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('Paragraf Baru');

// ngejait pBaru dan textPBaru
pBaru.appendChild(textPBaru);

// simpan pBaru di akhir sectionA
const sectionA = document.getElementById( 'a' );
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('List Baru');
liBaru.appendChild(textLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2); // akan disimpan sebelum li 2

// Menghapus child
const link = document.querySelector('section#a a'); // atau bisa pake getElemetbyTagName tapi jgn lupa pake index
sectionA.removeChild(link);

//Mengubah element
const sectionB = document.getElementById('b');
const juLam = sectionB.querySelector('p');

const juBar = document.createElement('h2');
const textH2 = document.createTextNode('Judul Baru');
juBar.appendChild(textH2);

sectionB.replaceChild(juBar, juLam);

let warnaBaru = [pBaru, liBaru, juBar];
warnaBaru.forEach(node => {
  node.style.backgroundColor = 'lightgreen';
});