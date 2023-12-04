// 3. Constructor Function

function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
    this.makan = function (porsi) { 
        this.energi += porsi; 
        console.log(`${this.nama} sudah makan. energi bertambah ${porsi} menjadi ${this.energi}`);
    }
    this.main = function (jam) { 
        this.energi -= jam
        console.log(`${this.nama} sudah main. energi berkurang ${jam} menjadi ${this.energi}`); 
    }
}

let zaskha = new Mahasiswa('Zaskha Sasmita', 20);