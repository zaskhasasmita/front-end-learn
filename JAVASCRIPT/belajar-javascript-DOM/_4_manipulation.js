///// DOM MANIPULATION
// Manipulasi Node
// [1] document.createElement()
// [2] document.createTextNode()
// [3] node.appenChild()
// [4] node.insertBefore()
// [5] parentNode.removeChild()
// [6] parentNode.replaceChild()


// [1] document.createElement()
// buat element baru
const pBaru = document.createElement('p');

// [2] document.createTextNode()
// buat tulisanya
const teksBaru = document.createTextNode('Paragraf Bau');

// [3] node.appenChild()
//simpan tulisan ke dalam element paragraf
pBaru.appendChild(teksBaru);
// simpan pBaru ke akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru) //simpan ke akhir dari element tersebut

// [4] node.insertBefore()
//buat list baru
const liBaru = document.createElement('li');
//buat isinya
const teksLiBaru = document.createTextNode('Item Baru');
// masukin teksLiBaru nya ke dalam element li baru
liBaru.appendChild(teksLiBaru);
// ambil dulu ul nya
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
// elementParent.insertBefore(elementBaru, elementSebelumnya)
ul.insertBefore(liBaru, li2);


// [5] parentNode.removeChild()
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// [6] parentNode.replaceChild()
// tangkap dulu parent nya
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
//bikin element baru
const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!!!');
h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);



pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';
