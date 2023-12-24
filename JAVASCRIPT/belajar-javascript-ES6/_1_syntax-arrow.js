let members = ['zaskha', 'riki', 'bayyin']

// members.forEach(function(member) {
//     console.log(member);
// })

// menggunakan arrow, bisa kita persingkat
members.forEach( member => console.log(member) )

// jika ada dua parameter, gunakan kurung bulat ( _ , _ )
// jika lebih dari satu statement, gunakan kurung kurawal { }
members.forEach( (member, index) => console.log(member, index))

// jika kita menggunakan arrow, konsep this nya jadi berubah

let univ = {
    members : ['asep', 'dadan', 'agus'],
    getMembers() {
        this.members.map((name) => {
            console.log(name);
        })
    }
}

console.log(univ.getMembers());