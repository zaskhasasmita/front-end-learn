///// destructing array
// const perkenalan = ['halo', 'nama', 'saya', 'zaskha sasmita'];
// const [salam, satu, dua, nama] = perkenalan;

//skip items
// const [salam, , , nama] = perkenalan;

//swap items
// let a = 1;
// let b = 2;
// [a,b] = [b,a]

// return value pada function

// function coba() {
//     return [1, 2];
// }
// const [a, b] = coba();

// Rest Parameter
// const [a, ...values ] = [1, 2, 3, 4, 5]



//// Destructuring Object
// const mhs = {
//     nama : 'Zaskha Sasmita',
//     umur : 22
// }
// const {nama, umur} = mhs;

// Assignment tanpa deklarasi object
// ( {nama, umur} = { nama : 'Zaskha Sasmita',umur : 22 } );


//Assign ke variable baru 
// const mhs = {
//     nama : 'Zaskha Sasmita',
//     umur : 22
// }
// const {nama : n, umur : u} = mhs;

// memberikan default value
// const mhs = {
//     nama : 'Zaskha Sasmita',
//     umur : 22,
//     // email : 'zaskha@mail.com'
// }
// const {nama, umur, email = 'email@default.com'} = mhs;

// memberikan assign ke var baru + memberikan default value
// const mhs = {
//     nama : 'Zaskha Sasmita',
//     umur : 22,
//     // email : 'zaskha@mail.com'
// }
// const {nama : n, umur : u, email : e = 'email@default.com'} = mhs;

//rest parameterin
// const mhs = {
//     nama : 'Zaskha Sasmita',
//     umur : 22,
//     email : 'zaskha@mail.com'
// }
// const {nama, ...value} = mhs;

// mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const mhs = {
//     id      : 123,
//     nama    : 'Zaskha Sasmita',
//     umur    : 22,
//     email   : 'zaskha@mail.com'
// }

// function getIdMhs({id}){
//     return id;
// }
// console.log(getIdMhs(mhs))


//////// destructing pada function /////////////////////
// function kalkulasi(a, b) {
//     return [a+b, a-b, a*b];
// }
// const jumlah = kalkulasi(2, 3)
// const [tambah, kurang, kali, bagi = 'gaada'] = kalkulasi(2,3)


// function kalkulasi(a,b) {
//     return {
//         tambah : a+b,
//         kurang : a-b,
//         kali   : a*b,
//         bagi   : a/b
//     }
// }
// const {bagi, tambah, kali, kurang} = kalkulasi(2,3); 


// destructure function argumens

const mhs1 = {
    nama : 'Zaskha Sasmita',
    umur : 22,
    email : 'zaska@mail.com',
    nilai : {
        tugas : 90,
        uts   : 95,
        uas   : 98
    }
}

// function cetakMhs(mhs) {
//     return `Halo Nama saya ${mhs.nama}, umur ${mhs.umur} tahun`;
// }

function cetakMhs({nama, umur, nilai:{tugas, uts, uas}}) {
    return `Halo Nama saya ${nama}, umur ${umur} tahun,
    nilai uas saya ${uas}`;
}

console.log(cetakMhs(mhs1));