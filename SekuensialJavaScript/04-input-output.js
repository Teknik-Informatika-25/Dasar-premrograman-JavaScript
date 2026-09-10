// ============================================================
// MATERI 4: INPUT & OUTPUT SECARA SEKUENSIAL
// ============================================================
//
// Dalam materi ini kita belajar:
// 1. Output (menampilkan data ke layar)
// 2. Input (menerima data dari pengguna)
// 3. Konversi tipe data (type casting)
// 4. Studi kasus input-proses-output (IPO)
//
// ============================================================


// -----------------------------------------------------------
// BAGIAN A: OUTPUT — Menampilkan Data
// -----------------------------------------------------------
// Ada beberapa cara menampilkan output di JavaScript.

console.log("=== BAGIAN A: Berbagai Cara Output ===\n");

// ---------- 1. console.log() ----------
// Cara PALING UMUM untuk menampilkan output.
// Muncul di Console (Developer Tools browser / terminal Node.js).

console.log("Ini adalah console.log()");
// Bisa menampilkan banyak nilai sekaligus, dipisah koma:
console.log("Nama:", "Budi", "| Umur:", 17);

// ---------- 2. console.info() ----------
// Sama seperti console.log(), tapi semantiknya untuk INFORMASI.
console.info("ℹ Ini adalah informasi penting");

// ---------- 3. console.warn() ----------
// Menampilkan PERINGATAN (biasanya berwarna kuning di browser).
console.warn(" Ini adalah peringatan!");

// ---------- 4. console.error() ----------
// Menampilkan pesan ERROR (biasanya berwarna merah di browser).
console.error(" Ini adalah pesan error!");

// ---------- 5. console.table() ----------
// Menampilkan data dalam bentuk TABEL (sangat berguna untuk array/object).
let dataBarang = [
    { nama: "Buku", harga: 25000, stok: 10 },
    { nama: "Pensil", harga: 5000, stok: 50 },
    { nama: "Penghapus", harga: 3000, stok: 30 }
];
console.log("\nTabel Barang:");
console.table(dataBarang);

// ---------- 6. Khusus Browser: alert(), document.write() ----------
// Kode di bawah HANYA berjalan di browser, TIDAK di Node.js.
// Uncomment jika menjalankan di browser:

// alert("Ini adalah popup alert!");
// document.write("<h1>Ini ditulis ke halaman HTML</h1>");
// document.getElementById("output").innerHTML = "Hello!";


// -----------------------------------------------------------
// BAGIAN B: INPUT — Menerima Data dari Pengguna
// -----------------------------------------------------------

console.log("\n=== BAGIAN B: Input dari Pengguna ===\n");

// ---------- Di Browser: prompt() ----------
// prompt() menampilkan popup untuk input pengguna.
// Hasilnya SELALU bertipe STRING.
// Uncomment jika menjalankan di browser:

// let namaUser = prompt("Masukkan nama Anda:");
// let umurUser = prompt("Masukkan umur Anda:");
// console.log("Halo, " + namaUser + "! Umur Anda " + umurUser + " tahun.");

// ---------- Di Node.js: readline ----------
// Di Node.js kita menggunakan module 'readline' untuk input.
// Contoh kode readline ada di file terpisah (04b-input-nodejs.js).

// ---------- Simulasi Input (untuk pembelajaran) ----------
// Karena prompt() hanya berjalan di browser, kita SIMULASI
// input dengan variabel agar kode bisa berjalan di mana saja.

let inputNama = "Andi Pratama";          // Simulasi: user memasukkan nama
let inputUmur = "20";                    // Simulasi: user memasukkan umur (string!)
let inputTinggi = "175.5";               // Simulasi: user memasukkan tinggi (string!)

console.log("Input nama   : " + inputNama);
console.log("Input umur   : " + inputUmur);
console.log("Input tinggi : " + inputTinggi);

// PERHATIAN:
// Input dari prompt() atau readline SELALU bertipe STRING.
// Meskipun user mengetik angka "20", hasilnya tetap STRING "20".
console.log("\nTipe inputUmur   : " + typeof inputUmur);     // "string"
console.log("Tipe inputTinggi : " + typeof inputTinggi);     // "string"


// -----------------------------------------------------------
// BAGIAN C: KONVERSI TIPE DATA (TYPE CASTING / PARSING)
// -----------------------------------------------------------
// Karena input selalu string, kita perlu MENGKONVERSI
// ke tipe data yang sesuai sebelum melakukan operasi.

console.log("\n=== BAGIAN C: Konversi Tipe Data ===\n");

// ---------- 1. String → Number (Integer) ----------
// Menggunakan parseInt() untuk mengubah string menjadi bilangan bulat.

let umurString = "20";                        // String "20"
let umurNumber = parseInt(umurString);        // Number 20

console.log("Sebelum konversi: " + umurString + " (tipe: " + typeof umurString + ")");
console.log("Setelah parseInt(): " + umurNumber + " (tipe: " + typeof umurNumber + ")");

// parseInt() mengabaikan bagian desimal:
console.log("parseInt('25.9') = " + parseInt("25.9"));   // 25 (desimal dibuang)


// ---------- 2. String → Number (Desimal/Float) ----------
// Menggunakan parseFloat() untuk mengubah string menjadi bilangan desimal.

let tinggiString = "175.5";                         // String "175.5"
let tinggiNumber = parseFloat(tinggiString);        // Number 175.5

console.log("\nSebelum konversi: " + tinggiString + " (tipe: " + typeof tinggiString + ")");
console.log("Setelah parseFloat(): " + tinggiNumber + " (tipe: " + typeof tinggiNumber + ")");


// ---------- 3. Menggunakan Number() ----------
// Number() juga bisa mengkonversi string ke number.
// Bedanya: Number() lebih ketat, mengembalikan NaN jika tidak valid.

console.log("\nNumber('42')     = " + Number("42"));       // 42
console.log("Number('3.14')   = " + Number("3.14"));     // 3.14
console.log("Number('hello')  = " + Number("hello"));    // NaN (Not a Number)
console.log("Number(true)     = " + Number(true));       // 1
console.log("Number(false)    = " + Number(false));      // 0


// ---------- 4. Number → String ----------
// Menggunakan String() atau .toString()

let angka = 2026;
let angkaString1 = String(angka);             // Cara 1: String()
let angkaString2 = angka.toString();          // Cara 2: .toString()

console.log("\nNumber ke String:");
console.log("String(2026) = '" + angkaString1 + "' (tipe: " + typeof angkaString1 + ")");
console.log("(2026).toString() = '" + angkaString2 + "' (tipe: " + typeof angkaString2 + ")");


// ---------- 5. Ke Boolean ----------
// Menggunakan Boolean() untuk mengkonversi ke boolean.

console.log("\nKonversi ke Boolean:");
console.log("Boolean(1)         = " + Boolean(1));           // true
console.log("Boolean(0)         = " + Boolean(0));           // false
console.log("Boolean('')        = " + Boolean(""));          // false (string kosong)
console.log("Boolean('hello')   = " + Boolean("hello"));    // true  (string berisi)
console.log("Boolean(null)      = " + Boolean(null));        // false
console.log("Boolean(undefined) = " + Boolean(undefined));   // false

// Nilai yang menjadi false disebut "FALSY":
// false, 0, "", null, undefined, NaN
// Semua nilai lainnya adalah "TRUTHY" (menjadi true).


// -----------------------------------------------------------
// BAGIAN D: STUDI KASUS — INPUT-PROSES-OUTPUT (IPO)
// -----------------------------------------------------------
// Pola IPO adalah pola dasar pemrograman sekuensial:
// 1. INPUT   → Menerima data
// 2. PROSES  → Mengolah data
// 3. OUTPUT  → Menampilkan hasil
//
// Setiap langkah dijalankan BERURUTAN (sekuensial).

console.log("\n=== BAGIAN D: Studi Kasus IPO ===\n");

// --------- Studi Kasus 1: Menghitung Luas Persegi Panjang ---------

console.log("--- Kasus 1: Luas Persegi Panjang ---\n");

// LANGKAH 1 (INPUT): Terima data panjang dan lebar
let panjang = "12";                     // Simulasi input (string dari user)
let lebar = "8";                        // Simulasi input (string dari user)
console.log("Input panjang: " + panjang);
console.log("Input lebar  : " + lebar);

// LANGKAH 2 (PROSES): Konversi ke number lalu hitung
let panjangNum = parseFloat(panjang);   // Konversi "12" → 12
let lebarNum = parseFloat(lebar);       // Konversi "8" → 8
let luas = panjangNum * lebarNum;       // 12 × 8 = 96
let keliling = 2 * (panjangNum + lebarNum);  // 2 × (12 + 8) = 40

// LANGKAH 3 (OUTPUT): Tampilkan hasil
console.log(`\nLuas     = ${panjangNum} × ${lebarNum} = ${luas} cm²`);
console.log(`Keliling = 2 × (${panjangNum} + ${lebarNum}) = ${keliling} cm`);


// --------- Studi Kasus 2: Konversi Suhu ---------

console.log("\n--- Kasus 2: Konversi Suhu ---\n");

// LANGKAH 1 (INPUT): Terima suhu dalam Celsius
let celsiusInput = "37.5";
console.log("Input suhu: " + celsiusInput + "°C");

// LANGKAH 2 (PROSES): Konversi ke berbagai skala suhu
let celsius = parseFloat(celsiusInput);                  // 37.5
let fahrenheit = (celsius * 9 / 5) + 32;                // 99.5
let reamur = celsius * 4 / 5;                           // 30
let kelvin = celsius + 273.15;                           // 310.65

// LANGKAH 3 (OUTPUT): Tampilkan hasil konversi
console.log("\nHasil Konversi:");
console.log(`${celsius}°C = ${fahrenheit}°F`);
console.log(`${celsius}°C = ${reamur}°R`);
console.log(`${celsius}°C = ${kelvin} K`);


// --------- Studi Kasus 3: Menghitung Total Belanja ---------

console.log("\n--- Kasus 3: Total Belanja ---\n");

// LANGKAH 1 (INPUT): Data belanja
let namaBarang1 = "Nasi Goreng";
let hargaBarang1 = "25000";
let jumlahBarang1 = "2";

let namaBarang2 = "Es Teh";
let hargaBarang2 = "5000";
let jumlahBarang2 = "3";

// LANGKAH 2 (PROSES): Hitung total per item dan total keseluruhan
let subtotal1 = parseInt(hargaBarang1) * parseInt(jumlahBarang1);  // 25000 × 2 = 50000
let subtotal2 = parseInt(hargaBarang2) * parseInt(jumlahBarang2);  // 5000 × 3  = 15000
let totalBelanja = subtotal1 + subtotal2;                           // 50000 + 15000 = 65000
let pajak = totalBelanja * 0.1;                                     // 10% pajak = 6500
let totalBayar = totalBelanja + pajak;                              // 65000 + 6500 = 71500

// LANGKAH 3 (OUTPUT): Tampilkan struk belanja
console.log("========== STRUK BELANJA ==========");
console.log(`${namaBarang1}  x${jumlahBarang1}  @Rp${hargaBarang1}  = Rp${subtotal1}`);
console.log(`${namaBarang2}       x${jumlahBarang2}  @Rp${hargaBarang2}   = Rp${subtotal2}`);
console.log("-----------------------------------");
console.log(`Subtotal                    = Rp${totalBelanja}`);
console.log(`Pajak (10%)                 = Rp${pajak}`);
console.log("===================================");
console.log(`TOTAL BAYAR                 = Rp${totalBayar}`);
console.log("===================================");


// ============================================================
//  KESIMPULAN MATERI 4:
// ============================================================
//
// 1. OUTPUT:
//    - console.log()   → menampilkan output umum
//    - console.warn()  → menampilkan peringatan
//    - console.error() → menampilkan error
//    - console.table() → menampilkan data dalam tabel
//    - alert()         → popup di browser
//
// 2. INPUT:
//    - prompt()        → input popup di browser
//    - readline        → input di Node.js
//    - Input SELALU bertipe STRING
//
// 3. KONVERSI TIPE DATA:
//    - parseInt()      → string ke integer
//    - parseFloat()    → string ke desimal
//    - Number()        → ke number (lebih ketat)
//    - String()        → ke string
//    - Boolean()       → ke boolean
//
// 4. POLA IPO (Input-Proses-Output):
//    - Pola dasar pemrograman SEKUENSIAL
//    - INPUT dulu → PROSES data → tampilkan OUTPUT
//    - Setiap langkah BERURUTAN dan saling bergantung
//
// ============================================================
