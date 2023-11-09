 let jmlAngkot = 10;
    let angkotBeroperasi = 6;

    for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
        if( noAngkot <= 6 && noAngkot !== 5) {
            console.info(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
        } else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5){
            console.info(`Angkot No. ${noAngkot} sedang Lembur.`);
        }
        else {
            console.info(`Angkot No. ${noAngkot} sedang tidak beroperasi.`);
        }
    }
