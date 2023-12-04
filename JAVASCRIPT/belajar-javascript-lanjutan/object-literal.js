// 1. Object Literal // PROBLEM : tidak efektif jika membuat objek sampe 1jt
let mahasiswa1 = {
    nama: 'Zaskha',
    energy: 10,
    makan: function (porsi) {
        this.energy += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan!`);
    }
}
let mahasiswa2 = {
    nama: 'Rahma',
    energy: 20,
    makan: function (porsi) {
        this.energy += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan!`);
    }
}