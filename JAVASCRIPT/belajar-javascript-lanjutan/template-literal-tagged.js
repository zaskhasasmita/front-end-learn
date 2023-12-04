// Tagged Templates
// const nama = 'Zaskha Sasmita';
// const umur =  22;

// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;        
//     // });
//     // return result;

//     return strings.reduce((result, str, i)  => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Halo, Nama Saya ${nama}, saya ${umur} Tahun.`;

// console.log(str)

const nama = 'Zaskha Sasmita';
const umur =  22;
const email = 'zaskha@mail.com'

function highlight(strings, ...values) {
    return strings.reduce((result, str, i)  => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = highlight`Halo, Nama Saya ${nama}, saya ${umur} Tahun, email saya ${email}`;

// console.log(str)
document.body.innerHTML = str;