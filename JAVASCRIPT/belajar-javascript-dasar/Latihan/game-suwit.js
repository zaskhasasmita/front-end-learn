// Selamat datang di Game Suwit Sederhana
alert('Selamat datang di Game Suwit Sederhana ini');

let main = true; // Variabel untuk mengontrol permainan
while (main) {
    let pilihanPemain = prompt('Pilih:\n1 = Gunting\n2 = Kertas\n3 = Batu');

    // Keluar dari permainan jika pemain membatalkan input
    if (pilihanPemain === null) {
        if (confirm('Ingin keluar dari Game?')) {
            main = false; // Keluar dari permainan
            break;
        } else {
            continue; // Lanjutkan permainan jika membatalkan konfirmasi
        }
    }

    // Validasi pilihan pemain
    while (pilihanPemain !== '1' && pilihanPemain !== '2' && pilihanPemain !== '3') {
        pilihanPemain = prompt('Pilihan tidak valid. Masukkan angka:\n1 = Gunting\n2 = Kertas\n3 = Batu');
        if (pilihanPemain === null) {
            if (confirm('Ingin keluar dari Game?')) {
                main = false; // buat main bernilai false
                break; // Keluar dari perulangan
            } else {
                continue; // Lanjutkan permainan jika membatalkan konfirmasi
            }
        }
    }

    if (main == false) {
        break; // Keluar dari loop utama jika 'main' adalah 'false'
    }

    // Konversi pilihan pemain ke teks
    let pilihanPemainTeks = '';
    if (pilihanPemain === '1') {
        pilihanPemainTeks = 'Gunting';
    } else if (pilihanPemain === '2') {
        pilihanPemainTeks = 'Kertas';
    } else if (pilihanPemain === '3') {
        pilihanPemainTeks = 'Batu';
    }

    // Pilihan komputer
    let pilihanKomputerTeks = '';
    const acakKomputer = Math.random();
    if (acakKomputer < 0.34) {
        pilihanKomputerTeks = 'Gunting';
    } else if (acakKomputer < 0.67) {
        pilihanKomputerTeks = 'Kertas';
    } else {
        pilihanKomputerTeks = 'Batu';
    }

    // Logika hasil
    let hasil = '';
    if (pilihanPemainTeks === pilihanKomputerTeks) {
        hasil = 'Hasilnya SERI!!';
    } else if (pilihanPemainTeks === 'Gunting') {
        if (pilihanKomputerTeks === 'Kertas') {
            hasil = 'KAMU MENANG';
        } else {
            hasil = 'KAMU KALAH';
        }
    } else if (pilihanPemainTeks === 'Kertas') {
        if (pilihanKomputerTeks === 'Batu') {
            hasil = 'KAMU MENANG';
        } else {
            hasil = 'KAMU KALAH';
        }
    } else if (pilihanPemainTeks === 'Batu') {
        if (pilihanKomputerTeks === 'Gunting') {
            hasil = 'KAMU MENANG';
        } else {
            hasil = 'KAMU KALAH';
        }
    }

    // Hasil akhir
    let hasilAkhir = `Kamu memilih: ${pilihanPemainTeks}\nKomputer memilih: ${pilihanKomputerTeks}\n${hasil}`;
    alert(hasilAkhir);

    main = confirm('Main lagi?');
}

// Terima kasih sudah bermain
alert('Terima kasih sudah bermain');
