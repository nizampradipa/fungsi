// Non-void: menghasilkan nilai
function kelilingPersegi(sisi) {
  return 4 * sisi;
}

// Void: menampilkan hasil
function cetakKeliling(sisi) {
    let hasil = kelilingPersegi(sisi);
    console.log('Persegi dengan sisi ' + sisi + ' memiliki keliling ' + hasil);
}

cetakKeliling(6);
cetakKeliling(10);
