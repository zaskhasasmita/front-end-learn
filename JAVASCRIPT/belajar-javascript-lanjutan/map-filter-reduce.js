// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3

// for
// const newAngka = [];
// for(let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);


// filter
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka)

// map     //kalika semua angka dengan 2
// const newAngka = angka.map(a => a*2);
// console.log(newAngka);
// console.log(angka);

//reduce     // jumlahkan semua angka yang ada pada array
// const newAngka = angka.reduce((accumulator, currentValue) =>  
// accumulator + currentValue, 0);

// method chainning (berantai)

// cari angka yg lebih besar dari 5
// kalikan 3
// jumlahkan semuanya
// const hasil =  angka.filter(a => a > 5) // 8, 9, 9
//                     .map(a => a * 3) // 24, 27, 27
//                     .map(a => a/2) // 12, 27/2, 27/2
//                     .reduce((acc, cur) => acc + cur); // 78



////////////////////////////// praktek filter map reduce //////////////////////////////


// ambil semua element video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjutan = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing-masing video
.map(item => item.dataset.duration)

// ubah durasi menjadi int, konversi menit jadi detik
.map(waktu => {
    parts = waktu.split(':').map(part => parseFloat(part));
    return ( parts[0] * 60 ) + parts[1];
})

// jumlahkan semua detiknya
.reduce((total, detik) => total + detik);

// ubah format nya menjadi jam, menit, detik
const jam = Math.floor(jsLanjutan / 3600);
const sisaDetik = jsLanjutan % 3600;
const menit = Math.floor(sisaDetik / 60);
const detik = sisaDetik % 60;

// simpan di DOM
jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
document.querySelector('.jumlah-video').textContent = `${jmlVideo} Video.`;

document.querySelector('.total-durasi').textContent =  `${jam} Jam, ${menit} Menit, ${detik} Detik.`;