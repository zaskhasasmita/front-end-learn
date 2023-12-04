// kasus 1
// mengubah warna dengan tombol klik
const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function () {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
}


// kasus 2
// mengubah warna secara random melalui tombol klik
const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type' , 'button');

tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
});


// kasus 3
// 
// const sMerah = document.querySelector('input[name=sMerah]');
// const sHijau = document.querySelector('input[name=sHijau]');
// const sBiru  = document.querySelector('input[name=sBiru]');

// sMerah.addEventListener('input', function() {
//     const r =  sMerah.value;
//     const g =  sHijau.value;
//     const b =  sBiru.value;
//     document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
// });
// sHijau.addEventListener('input', function() {
//     const r =  sMerah.value;
//     const g =  sHijau.value;
//     const b =  sBiru.value;
//     document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
// });
// sBiru.addEventListener('input', function() {
//     const r =  sMerah.value;
//     const g =  sHijau.value;
//     const b =  sBiru.value;
//     document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
// });


// ini lebih efektif
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru  = document.querySelector('input[name=sBiru]');

function updateBackgroundColor() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    console.log(`Red : ${r}\nGreen : ${g}\nBlue : ${b}`);
}

sMerah.addEventListener('input', updateBackgroundColor);
sHijau.addEventListener('input', updateBackgroundColor);
sBiru.addEventListener('input', updateBackgroundColor);



//kasus 4
document.body.addEventListener('mousemove', function(event) {
    // posisi mouse
    // console.log(event.clientX );
    // ukuran browser
    // console.log(window.innerWidth);
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = `rgb(${xPos},${yPos},100)`
})