function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar
}

function kelilingPersegiPanjang(panjang, lebar) {
    return 2*(panjang + lebar)
}

let luas = luasPersegiPanjang(10,4)
let keliling = kelilingPersegiPanjang(10,4)

console.log('Luas persegi panjang     : ' + luas)
console.log('Keliling persegi panjang : ' + keliling)