

function hitungJam (detik) {
  let conversiJam = Math.floor(detik / (60 * 60));
  let sisaDetik = detik % (60 * 60);
  let conversiMenit = Math.floor(sisaDetik / 60)
  let conversiDetik = sisaDetik % 60

    return `${conversiJam} jam ${conversiMenit} menit ${conversiDetik} detik ` 
}

console.log(hitungJam(7000)); //1 jam 56 menit 40 detik



function hitungTahundariMenit (menit){
 let conversiMenitToTahun = Math.floor(menit /(365 * 24 * 60));
 let sisaMenitToTahun = Math.round(menit % (365 * 24 * 60));
 let conversiSisaToHari = Math.round(sisaMenitToTahun / 1440);
 return `${menit} menit = ${conversiMenitToTahun} Tahun ${conversiSisaToHari} hari`
}

console.log(hitungTahundariMenit(1000000)); //1000000 menit = 2 Tahun 329 hari