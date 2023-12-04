// Manipulasi Element
// [1] element.innerHTML
// [2] element.style.<properti>
// [3] element.setAttribute()
// [4] element.classList


// [1] element.innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Zaskha Sasmita</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'hello world';


// [2] element.style.<properti>
// const judul = document.querySelector('#judul');
// judul.style.color = 'salmon';
// judul.style.backgroundColor = 'skyblue';


// [3] element.setAttribute()
const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'zaskha');
const a = document.querySelector('section#a a');
a.setAttribute('id', 'link'); // membuat attribute
a.getAttribute('href'); //mendapatkan attribute
a.removeAttribute('href'); // menghapus attribute


// [4] element.classList
//menambah atribute class
const p2 = document.querySelector('.p2');
// p2.classList
// untuk menambah class list, banyak metode nya
// element.classlist.add();      // menambah
// element.classlist.remove();   // menghapus
// element.classlist.toggle();   // kalo ga ada ditambah, kalo ada di hapus
// element.classlist.item(n);     // mengetahui kelas tertentu
// element.classlist.contains(); // mengandung
// element.classlist.replace();  // mengganti kedudukan
p2.classList.add('label');
p2.classList.remove('label')
p2.classList.toggle('label');