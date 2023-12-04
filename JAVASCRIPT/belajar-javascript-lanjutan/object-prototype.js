function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, Energi kamu bertambah ${porsi}, menjadi ${this.energi}`;
}

Mahasiswa.prototype.main = function (jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, Energi kamu berkurang ${jam}, menjadi ${this.energi}`
}

Mahasiswa.prototype.tidur = function (jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, Energi kamu bertambah ${jam*2}, menjadi ${this.energi}`;
}

let zaskha = new Mahasiswa('Zaskha Sasmita', 20);
let rahma = new Mahasiswa('Siti Rahma', 20);



// versi class 
/*
class Mahasiswa {
    constructor (nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }
    makan (porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, Energi kamu bertambah ${porsi}, menjadi ${this.energi}`;
    }
    main (jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, Energi kamu berkurang ${jam}, menjadi ${this.energi}`
    }
    tidur (jam) {
        this.energi += jam * 2;
        return `Halo ${this.nama}, Energi kamu bertambah ${jam*2}, menjadi ${this.energi}`;
    }
}

let bambang = new Mahasiswa('Bambang Pamungkas', 10)
*/