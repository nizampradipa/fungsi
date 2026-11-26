function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar
}

function kelilingPersegiPanjang(panjang, lebar) {
    return 2*(panjang + lebar)
}

let luas = luasPersegiPanjang(2,3)
let keliling = kelilingPersegiPanjang(3,3)

console.log('Luas persegi panjang     : ' + luas)
console.log('Keliling persegi panjang : ' + keliling)