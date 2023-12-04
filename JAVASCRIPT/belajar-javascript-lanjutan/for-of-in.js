// for..of
// const mhs = ['Zaskha', 'Bayyin', 'Riki'];

// for(let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i])
// }

// mhs.forEach( m => console.log(m) );

// for (const m of mhs) {
//     console.log(m);
// }

// //string
// const nama = 'Rahma';
// for (const n of nama) {
//     console.log(n)
// } 

// mhs.forEach((m, i) => console.log(`${m} adalah mahasiswa ke-${i+1}`));

// for (const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke-${i+1}`)
// }

// //Node List
// const liNama = document.querySelectorAll('.nama');
// // liNama.forEach(n => console.log(n.textContent));
// for (n of liNama) {
//     console.log(n.innerHTML);
// }

// arguments
// function jumlahkanAngka() {
//     let jumlah = 0;
//     for (a of arguments) {
//         jumlah += a;
//     } 
//     return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));



////////////////////////// for..in///////////////

const mhs = {
    nama : 'Zaskha',
    umur : 22,
    email : 'zaskha@mail.com'
}

for (m in mhs) {
    console.log(`${m} : ${mhs[m]}`);
}