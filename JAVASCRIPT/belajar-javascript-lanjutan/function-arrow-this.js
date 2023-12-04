//konsep this pada arrow function

// const Mahasiswa = function() {
//     this.nama = 'Zaskha';
//     this.umur = 22;
//     this.sayHello = function () {
//         return `Halo, Saya ${this.nama}, ${this.umur} tahun`;
//     }
// }

// const zaskha = new Mahasiswa();

// // coba pake object literal
// const mhs1 = {
//     nama: 'Zaskha',
//     umur: 22,
//     sayHello: () => {
//         console.log(`Halo saya ${nama}, berumur ${umur} tahun.`);
//     }
// }
// console.log(mhs1)

// const Mahasiswa = function (umur) {
//     this.nama = 'Zaskha';
//     this.umur = umur;
//     this.sayHello = () => {
//         console.log(`Halo, Saya ${this.nama}, ${this.umur} tahun.`);
//     }
// }

// const zaskha = new Mahasiswa(21);



// pake object literal

// const mhs1 = {
//     nama : 'Zaskaa',
//     umur : 22,
//     // sayHello : function () {
//     sayHello : () => {
//         // console.log(`Halo, Saya ${this.nama}, ${this.umur} tahun.`);
//         console.log(this);
//     }
// }

// const Mahasiswa = function() {
//     this.nama = 'Rahmaa';
//     this.umur = 15;
//     this.sayHello = function() {
//         console.log(`Halo, Saya ${this.nama}, ${this.umur} tahun.`);
//     }
    
//     setInterval( () => {
//         console.log(this.umur++);
//     }, 1000);
// }

// const rahma = new Mahasiswa()


// constructor function

const Mahasiswa = function () {
    this.nama = 'Zaskha';
    this.umur = 22;
    this.sayHello = function () {
        console.log(`Halo Nama Saya ${this.nama}, ${this.umur} tahun.`);
    }
    // setInterval(() => {
    //     console.log(this.umur++);
    // }, 1000);
}

const zaskha = new Mahasiswa();

// object Literal
const mhs1 = {
    nama : 'Rahma',
    umur : 15,
    sayHello : function() {
        console.log(`Halo Nama Saya ${this.nama}, ${this.umur} tahun.`)
    }
}
