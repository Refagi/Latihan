//soal dari pascal
// Buatlah sebuah program dengan menggunakan bahasa pascal, untuk menghitung gaji bersih seseorang karyawan
// denagn ketentuan, GAJI BERSIH = GAJI POKOK + TUNJANGAN - PAJAK, tunjangan karyawan adalah20% dari besaran gaji
// pokok sedangkan pajak adalah 15% dari gaji pokok ditambah tunjangan
// program menerima 2 buah inputan berupa nama karywan dan gaji pokok, serta menampilkan besaran gaji bersih

function MenghitunGaji (nama, gajiPokok){
 const tunjangan = ((20/100) * gajiPokok)
 const pajak = ((15/100) * (gajiPokok + tunjangan))
 const gajiBersih = gajiPokok + tunjangan - pajak
 return ` Gaji bersih yang diterima oleh ${nama} adalah ${gajiBersih}`
}
console.log(MenghitunGaji('Refagi', 3000000 ))



//soal dari bahasa pascal
// Sebuah perusahaan ojek online menentukan tarif berdasarkan jarak tempuh, dimana untuk 
//     minimal 4Km pertama adalah Rp. 9.500,- sedangkan untuk Km selanjutnya adalah Rp. 
//     2.500,- per Km. Selain itu, pihak perusahaan ojek online juga memberikan promo 
//     berdasarkan jarak tempuh sebagai berikut: 
//     jarak tempuh    :       diskon    
//          0-10 km               0%
//          10-15 km             Rp 2500
//          >15 km               Rp 5000
//     Dari studi kasus diatas, buatlah sebuah program dengan menggunakan bahasa 
//     pemrograman pascal, dimana program menerima 2 buah inputan, yaitu nama customer 
//     dan jarak yang akan ditempuh. Kemudian menampilkan besaran biaya yang harus dibayar 
//     customer! 
//     Contoh output
//     Nama Customer : Tony Stark <inputan> 
//     Jarak yang akan ditempuh (Km) : 12 <inputan> 
//     Selamat, anda mendapatkan potongan Rp. 2000 
//     Tarif yang harus dibayarkan Tony Stark adalah sebesar 27500

function menghitungOngkosGojek (nama, jarak){
  let diskon = 0
  let totalOngkos = 0
  let hargaOngkos = 0
  if (jarak >= 0 && jarak < 10){
      diskon = 0
      console.log(`yah anda belum dapat diskon Rp. ${diskon}`)
  } else if (jarak >= 10 && jarak <= 15){
      diskon = 2000
      console.log(`Selamat, anda mendapatkan potongan Rp. ${diskon}`)
  } else {
      diskon = 5000
      console.log(`Selamat, anda mendapatkan potongan Rp. ${diskon}`)
  }

  if (jarak <= 4){
      hargaOngkos = 9500
  } else {
      hargaOngkos = 9500 + (jarak - 4) * 2500
  }

  totalOngkos = hargaOngkos - diskon
  return `Tarif yang harus dibayarkan ${nama} adalah sebesar ${totalOngkos}`
}
console.log(menghitungOngkosGojek('Refagi', 10))