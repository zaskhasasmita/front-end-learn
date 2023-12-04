// const jam = 2;
// const menit = 1;
// const detik = 2;

// function waktuKeDetik( jam, menit, detik) {
//     return total =  (jam * 3600) + (menit * 60) + detik;
// }   

// totalDetik = waktuKeDetik(jam, menit, detik);


const totalDetik = 7262;

const jam = 7262 / 3600; // 2.0172222222222222

let sisaDetik = totalDetik % 3600; // 7262 % 3600 = 62 

const menit = sisaDetik / 60; // 62 / 60 = 1.0333333333333334

const detik = sisaDetik % 60; //  62 % 60 = 2



