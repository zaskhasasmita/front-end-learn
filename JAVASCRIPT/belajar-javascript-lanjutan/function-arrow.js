// expressions
function tampilNama1(nama) {
    return `Halo ${nama}`
}
console.log(tampilNama1('Zaskha'))


let tampilNama2 = function(nama) {
    return `Halo ${nama}`
}
console.log(tampilNama2('Rahma'))


//arrow
let tampilNama3 = nama => {return `Halo ${nama}`}
console.log(tampilNama3('Siti'))

let tampilNama4 = (nama1, nama2) => {return `Halo ${nama1}, ${nama2}`}
console.log(tampilNama4('Julia', 'Ayu'))

const tampilNama5 = () => `Hello world`;
console.log(tampilNama5());



let mahasiswa = ['Zaskha Sasmita', 'Siti Rahma Ayu', 'bobi'];

// let jumlahHuruf = mahasiswa.map(function(nama) {
//     return nama.length;
// });


let jumlahHuruf = mahasiswa.map(nama => ({nama, jmlHuruf: nama.length }));


console.table(jumlahHuruf);