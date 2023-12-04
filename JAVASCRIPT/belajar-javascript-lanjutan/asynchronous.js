// ///////////////////////// callbacks ///////////////////////////////////////
//// synchronous callback
// function halo(nama) {
//     alert(`Selamat Datang ${nama}`);
// }

// function tampilkanPesan(callback) { 
//     const nama = prompt('Masukan Nama : ');
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Selamat Datang ${nama}`));

// const mhs = [
//     {
//         'nama' : 'Zaskha Sasmita',
//         'nrp'   : '193040134',
//         'email' : 'zaskha@mail.com',
//         'jurusan' : 'Teknik Informatika',
//         'idDosenWali' : 1
//     },
//     {
//         'nama' : 'Mubayyin Hakim',
//         'nrp'   : '193040124',
//         'email' : 'bayyin@mail.com',
//         'jurusan' : 'Teknik Informatika',
//         'idDosenWali' : 2
//     },
//     {
//         'nama' : 'Riki Hidayat',
//         'nrp'   : '193040165',
//         'email' : 'riki@mail.com',
//         'jurusan' : 'Teknik Industri',
//         'idDosenWali' : 2
//     }
// ];

// console.log('mulai')
// mhs.forEach(m => {
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();
        
//     }
//     console.log(m.nama)
// });
// console.log('selesai')





/// /// Asynchronous Callback
// tapi ini pake vanila javascript (javascript murni)
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }


// console.log('mulai');
// getDataMahasiswa(
//     'data/mahasiswa.json',
//     results => {
//         const msh = JSON.parse(results);
//         msh.forEach(m => {
//             console.log(m.nama);
//         });
//     },
//     () => {
        
//     }
//     );
// console.log('selesai');

//// pake bantuan jquery

// console.log('mulai');
// $.ajax({
//     url : 'data/mahasiswa.json',
//     success : (mhs) => {
//         mhs.forEach(m => {
//             console.log(m.nama);
//         });
//     },
//     error : (e) => {
//         console.log(e.responseText)
//     }
// });
// console.log('selesai');








// ///////////////////////// PROMISE ///////////////////////////////////////

// (pendahuluan)
// // JQuery
// $.ajax({
//     url : 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
//     success : movies => console.log(movies)
// });

// vanila Javascript
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         } 
//         else {
//             console.log(xhr.responseText);
//         }
//     }
// }

// xhr.open('get', 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers');
// xhr.send();

// di javascript modern kita bisa pake ini walaupun vanilla

// fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
// .then(response => response.json())
// .then(response => console.log(response))
// console.log(movies);

//// (pendahuluan) berakhir

// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji ( terpenuhi / ingar )
// states ( fulfilled / rejected / pending )
// callback  ( resolve / rejected / finally)
// aksi (then / catch)

// contoh 1
let ditepati = false;
const janji1 = new Promise((resolve, reject) => {
    if (ditepati) {
        resolve('janji ditepati!')
    } else {
        reject('ingkar janji')
    }
});
janji1
    .then(response => console.log('OK! : ' + response))
    .catch(response => console.log('NOT OK! : ' + response));