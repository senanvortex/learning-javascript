// cara membuat element baru setiap kali click sesuatu

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const textLiBaru = document.createTextNode('List Baru');
    liBaru.appendChild(textLiBaru);
    ul.appendChild(liBaru);
});

// penjelasan step by step

// bikin statement p4, bikin listerner click dengan fungsi, dalam fungsi buat statement ul, buat statement li baru, baut statement textnya apa dalam li baru, baru dihid semuanya pake append child