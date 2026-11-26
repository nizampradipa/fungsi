function luasPersegi(sisi) {
    return sisi * sisi;
}

let luas1 = luasPersegi(5);
let luas2 = luasPersegi(8);

console.log('Luas persegi pertama: ' + luas1);
console.log('Luas persegi kedua: ' + luas2);
console.log('Jumlah kedua luas: ' + (luas1 + luas2));

// 1.maka luas1 dan luas 2  tidak akan memiliki value karena nilai luasPersegi tidak dikembalikan
// 2.karena mereka memiliki nilai di variabel yang berbeda sehingga kita dapat menjumlahkannya