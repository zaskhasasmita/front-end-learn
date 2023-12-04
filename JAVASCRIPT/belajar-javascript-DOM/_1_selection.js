///////// DOM Selection

// [1] document.getElementById()
// [2] document.getElementsBytagName()
// [3] document.getElementsByClassName()

// [1] document.getElementById() -> mengembalikan element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Zaskha Sasmita';

// [2] document.getElementsByTagName() -> mengembalikan HTML Collection
const p = document.getElementsByTagName('p');
// p[2].style.backgroundColor = 'lightblue';
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}   //karena get tag name ini mengembalikan html collection, maka
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// [3] document.getElementsByClassName -> HTML Collection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'ini diubah dari javascript';


