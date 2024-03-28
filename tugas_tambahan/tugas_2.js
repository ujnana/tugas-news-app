const kalimat = "Saya sangat senang mengerjakan soal algoritma";
const kataKata = kalimat.split(" ");

let panjangKataTerpanjang = 0;
for (const kata of kataKata) {
    const panjangKata = kata.length;
    if (panjangKata > panjangKataTerpanjang) {
        panjangKataTerpanjang = panjangKata;
    }
}

let kataTerpanjang = "";
for (const kata of kataKata) {
    if (kata.length === panjangKataTerpanjang) {
        kataTerpanjang = kata;
        break;
    }
}

console.log(kataTerpanjang);