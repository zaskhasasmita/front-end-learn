// Rest & Spread

let signIn = (username, password) => {
    console.log('username: ' + username + ', password: ' + password);
}
let data = ['zaskhas', '123123']
signIn(...data)

//bisa juga di balik, penerimaan parameter menggunakan spread
let login = (...data) => {
    console.log(data);
}
const namaPengguna = 'jek'
const kataSandi = '098098'

login(namaPengguna, kataSandi)