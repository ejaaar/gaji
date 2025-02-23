/*
Studi Kasus :
Sebuah perusahaan memiliki sistem penggajian dengan aturan sebagai berikut:

1. Gaji pokok setiap pegawai adalah Rp5.000.000.
2. Pegawai mendapatkan Rp200.000 tambahan untuk setiap hari hadir.
3. Jika pegawai hadir lebih dari 20 hari, maka mereka berhak mendapatkan bonus Rp500.000.
4. Jika pegawai memiliki potongan (misalnya karena keterlambatan atau denda), jumlah tersebut dikurangkan dari total gaji.
*/


let gajiPokok = 5000000;
let bonusHadir = 200000;
let bonusBulanan = 500000;
let dendaTelat = 100000;

console.log('gaji tiap kehadiran');

let hadir = prompt('anda masuk berapa hari'+'')
let telat = prompt('anda telat berapa kali' + "")

for (var gajiAwal = 0; gajiAwal < hadir ; gajiAwal++) {
    var gajiTotal = gajiPokok + bonusHadir * gajiAwal;

    if (gajiAwal >= 20) {
        gajiTotal += bonusBulanan;
    }

    console.log(`masuk hari ke-${gajiAwal + 1} gaji anda adalah : ${gajiTotal} Rp`);
}

let totalTelat = telat * dendaTelat

gajiTotal = gajiTotal - totalTelat;

console.log(`anda masuk ${gajiAwal} hari dan anda telat ${telat} kali total gaji anda : ${gajiTotal} Rp`);

confirm(`anda masuk ${gajiAwal} hari`)
confirm(`anda telat ${telat} kali denda ${totalTelat} Rp`)
confirm(`total gaji anda ${gajiTotal} Rp`)


