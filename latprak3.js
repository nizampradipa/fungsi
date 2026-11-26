function hitungAvg(n1, n2, n3) {
    return ((n1 + n2 + n3) / 3).toFixed(2); 
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) {
        return 'A'
    } else if (nilai >= 75) {
        return 'B'
    } else if (nilai >= 60) {
        return 'C'
    }
    return 'D'
}

function cetakRapor (nama, n1, n2, n3) {
    const rataRata = hitungAvg(n1, n2, n3)
    console.log('Nama      : ' + nama)
    console.log('Rata-Rata : ' + rataRata)
    console.log('Predikat  : ' + tentukanPredikat(rataRata))
}

cetakRapor('Nizam', 60, 75, 90)
