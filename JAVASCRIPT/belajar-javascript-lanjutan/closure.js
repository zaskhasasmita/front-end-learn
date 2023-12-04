// function init() {
//     return function(nama) {
//         console.log(nama);
//     }
// }

// let panggilNama =  init();
// panggilNama('raaa');

// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Selamat ${waktu} ${nama}!`);
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam ');

// selamatPagi('Zaskha');
// selamatMalam('rahma')

let add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
}) ();

console.log(add())
console.log(add())
console.log(add())


function induk1(parameterinduk1) {
    function induk2(parameterinduk2) {
        function induk3(parameterinduk3){
            console.log(parameterinduk1, parameterinduk2, parameterinduk3)
        }
        return induk3;
    }
    return induk2
}


let clos = induk1('par1')
let clos2 = clos('par2');
clos2('par3')