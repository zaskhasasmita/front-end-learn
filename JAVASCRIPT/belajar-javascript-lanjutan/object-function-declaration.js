// 2. Function Declaration
function Mahasiswa(nama, energi) {
    let mahasiswa = {};
    mahasiswa.nama = nama; //nama
    mahasiswa.energi = energi; //energi
    mahasiswa.makan = function (porsi) { //makan
        this.energi += porsi;
        console.log(`${this.nama} sudah makan. energi bertambah ${porsi} menjadi ${this.energi}!`)
    }
    mahasiswa.main = function (jam) {
        this.energi -= jam;
        console.log(`${this.nama} bermain. Energi Berkurang!${jam} menjadi ${this.energi}`)
    }
    return mahasiswa;
}

// let zaskha = Mahasiswa('Zaskha', 20);
// let rahma = Mahasiswa('Rahma', 25);





//ada cara lain juga buat function declaration
const methodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`${this.nama} bermain. Energi Bertambah!${porsi} menjadi ${this.energi}`)
    },
    main: function (jam) {
        this.energi -= jam;
        console.log(`${this.nama} bermain. Energi Berkurang!${jam} menjadi ${this.energi}`)
    },
    tidur: function (jam) {
        this.energi += jam * 2;
        console.log(`${this.nama} bermain. Energi Bertambah!${jam*2} menjadi ${this.energi}`)
    }
}
function Mahasiswa(nama, energi) {
    // let mahasiswa = {}; //gausah pake ini
    let mahasiswa = Object.create(methodMahasiswa); //pake object create
    mahasiswa.nama = nama; //nama
    mahasiswa.energi = energi; //energi
    ////gausah pake ini juga
    // mahasiswa.makan = methodMahasiswa.makan;
    // mahasiswa.main = methodMahasiswa.main;
    // mahasiswa.tidur = methodMahasiswa.tidur;
    return mahasiswa;
}
let zaskha = Mahasiswa('Zaskha', 20);
let rahma = Mahasiswa('Rahma', 25);