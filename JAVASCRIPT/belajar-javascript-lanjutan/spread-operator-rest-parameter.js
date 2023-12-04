// spread operator

// const atlet  = ['zaskha', 'bayyin', 'Riki'];
// const pelatih = ['yadi', 'dapit', 'dadang'];

// // console.log(...pelatih[0])
// // menggabungkan 2 array
// // const pesilat = atlet.concat(pelatih)
// const pesilat = [...atlet, 'rahma' , ...pelatih]
// console.log(pesilat)


// meng-copy array
// const atlet  = ['zaskha', 'bayyin', 'Riki'];
// // const atlet1 =  atlet;
// // atlet1[0] = 'agung';
// const atlet1 = [...atlet]
// atlet1[0] = 'agung';
// console.log(atlet1)

// dom
// const liMhs = document.querySelectorAll('li');
// // const mhs = [];
// // for (let i = 0; i < liMhs.length; i++) {
// //     mhs.push(liMhs[i].textContent);
// // }
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs)

// const nama = document.querySelector('.nama');
// const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
// nama.innerHTML = huruf;



/////////// Rest Parameter ///////////////////
// function myFunc() {
//     // return args
//     // return arguments
//     // return Array.from(arguments) // cara lain 
//     return [...arguments] // cara spread
// }
// console.log(myFunc(1,2,3,4,5,6))

// function jumlahkan(...angka) {
//     // return angka.reduce((total, a) => total + a);
//     // let total = 0;
//     // for (const a of angka) {
//     //     total += a;
//     // }
//     // return total;
// } 
// console.log(jumlahkan(1, 2, 3, 4, 5));

//array destructuring
// const kelompok1 = ['Zaskha', 'Riki', 'Bayyin', 'Agung', 'Raka'];
// const [ketua, wakil, ...anggota] = kelompok1;

//object destructuring
// const team = {
//     pm : 'Sandhika',
//     fe1 : 'Aria',
//     fe2 : 'Diva',
//     be : 'Zaskha',
//     ux : 'irfa',
//     do : 'ahmad'
// }
// const {pm, ...myTeam} = team;


// filtering
function filterBy(type, ...values) { 
    return values.filter(v => typeof v === type);
}
console.log(filterBy('number', 1, 2, 'Zaskha', false, 10, true, 'Rahma'));