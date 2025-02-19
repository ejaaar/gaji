let gajiPokok = 5000000;
let bonusHadir = 200000;
let bonusBulanan = 500000;
let i = 0;

console.log('gaji tiap kehadiran');

for (let i = 0; i < 20; i++) {
    var gajiTotal = gajiPokok+bonusHadir*i;
    console.log(`gaji anda adalah : ${gajiTotal} Rp`);
    
}

let gajiAkhir = gajiTotal+bonusBulanan;
console.log(`total gaji + bonus anda adalah : ${gajiAkhir} Rp`);


