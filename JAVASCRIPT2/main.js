// let nama = 'Zaskha Sasmita' //tipe string
// let usia = 22 //tipe integer number
// let tiggiBadan = 165.2 //tipe double float
// let beratBadan 
// let pacar = null

// beratBadan = 60

// if(pacar == null) {
//     pacar = 'belum punya'
// } else {
//     pacar = 'udah punya'
// }

// let saldoAwal = 50000
// let saldoTambahan = 80000
// const hutang = 30000
// const saldoAkhir = saldoAwal +saldoTambahan - hutang

// alert(
//     `nama saya ${nama} usia saya itu ${usia} tinggi badan saya adalah ${tiggiBadan}cm berat badan saya ${beratBadan}kg dan pacar saya ${pacar}`
// )
// alert(
//     `saldo awal saya sebesar ${saldoAwal} & saldo tambahan yang akan saya miliki sebesar ${saldoTambahan} jadi total saldo yg saya miliki sebanyak ${saldoAkhir}`
// )

// let namaGuru = ['jordi', 'sugiono', 'rahman']
// namaGuru.push('zaskha', 'samsul')
// namaGuru.shift() // hapus depan
// namaGuru.pop() // hapus akhir

// let namaUcing = []
// namaUcing[0] = 'ling'
// namaUcing[1] = 'betmen'
// namaUcing[2] = 'bagong'
// namaUcing.pop()


// for (let i = 0; i < namaGuru.length; i++) {
//     console.log(namaGuru[i]);
// }

// Tugas Kecil
// 1. prompt untuk mengetahui saldo akhir apa yang diinputkan oleh user
// 2. menentukan hari dan tanggal yang ada saat ini di pc kalian

// 1
// let saldoAwal  = prompt('Masukan Saldo Awal');
// let saldoTambahan = prompt('Masukan Saldo Tambahan');
// let hutang = prompt('masukan utang mu');

// let saldoAkhir = (parseFloat(saldoAwal) + parseFloat(saldoTambahan)) - parseFloat(hutang);

// alert(`saldo bersih mu ${saldoAkhir}`)

let hari = new Date().getDay()
switch (hari) {
    case 0: console.log('Minggu'); 
        break;
    case 1: console.log('Senin'); 
        break;
    case 2: console.log('Selasa'); 
        break;
    case 3: console.log('Rabu'); 
        break;
    case 4: console.log('Kamis'); 
        break;
    case 5: console.log('Jumat'); 
        break;
    case 6: console.log('Sabtu'); 
        break;
    default: console.log('invalid');
        break;
}
