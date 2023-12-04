// 1. HTML Fragments
// const mhs = {
//     nama : 'Zaskha Sasmita',
//     umur : 22,
//     nrp : '193040134',
//     email : 'zaskhasasmita@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;

// 2. Looping
// const mhs = [
//     {
//         nama : 'Zaskha Sasmita',
//         email : 'zaskha@mail.com'
//     },
//     {
//         nama : 'Riki Hidayat',
//         email : 'riki@mail.com'
//     },
//     {
//         nama : 'Mubayyin Hakim',
//         email : 'bayyin@mail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`;


// 3. Conditional
// const lagu = {
//     judul : 'mapay jalan satapak',
//     penyanyi : 'Avenged Sevenfold',
//     feat : 'Zaskha'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`;


//4. Nested
// HTML Fragment Bersarang
const mhs = {
    nama: 'Zaskha sasmita',
    semester : 5,
    matakuliah : [
        'Rekayasa Web',
        'Analisis dan Perancangan',
        'Pemrograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Objek'
    ]
};

function cetakMataKuliah(matakuliah) {
    return `<ol>
        ${matakuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>`
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span>Semester : ${mhs.semester}</span>
${cetakMataKuliah(mhs.matakuliah)}
</div>`;


document.body.innerHTML = el;