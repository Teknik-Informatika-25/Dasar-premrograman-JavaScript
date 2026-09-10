// ============================================================
//  MATERI 2: VARIABEL DAN TIPE DATA SECARA SEKUENSIAL
// ============================================================
//
// Dalam materi ini kita akan belajar:
// 1. Cara mendeklarasikan variabel (var, let, const)
// 2. Berbagai tipe data di JavaScript
// 3. Bagaimana variabel bekerja secara sekuensial
//
// ============================================================


// -----------------------------------------------------------
// BAGIAN A: DEKLARASI VARIABEL
// -----------------------------------------------------------
// JavaScript memiliki 3 cara untuk mendeklarasikan variabel:
// 1. var   → cara lama (ES5), sebaiknya hindari
// 2. let   → cara modern (ES6), nilai BISA diubah
// 3. const → cara modern (ES6), nilai TIDAK BISA diubah

console.log("=== BAGIAN A: Deklarasi Variabel ===\n");

// ---------- 1. Menggunakan 'var' (cara lama) ----------
// 'var' adalah cara lama mendeklarasikan variabel.
// Masih bisa digunakan, tapi TIDAK DISARANKAN di kode modern
// karena memiliki perilaku "hoisting" yang bisa membingungkan.

var namaLengkap = "Ahmad Fauzi";
console.log("(var) Nama: " + namaLengkap);
// Output: (var) Nama: Ahmad Fauzi


// ---------- 2. Menggunakan 'let' (cara modern) ----------
// 'let' digunakan untuk variabel yang NILAINYA BISA BERUBAH.
// Ini adalah cara yang DISARANKAN untuk variabel yang bisa berubah.

let skor = 0;                        // Deklarasi awal, skor = 0
console.log("(let) Skor awal: " + skor);
// Output: (let) Skor awal: 0

skor = 100;                          // Nilai skor DIUBAH menjadi 100
console.log("(let) Skor setelah diubah: " + skor);
// Output: (let) Skor setelah diubah: 100

// Perhatikan SEKUENSIAL-nya:
// - Baris pertama: skor bernilai 0
// - Baris kedua: skor bernilai 100 (karena sudah diubah di baris sebelumnya)


// ---------- 3. Menggunakan 'const' (konstanta) ----------
// 'const' digunakan untuk variabel yang NILAINYA TIDAK BOLEH BERUBAH.
// Sekali diberi nilai, tidak bisa diubah lagi (akan ERROR jika dicoba).

const PI = 3.14159;                  // Nilai PI tidak akan pernah berubah
console.log("(const) Nilai PI: " + PI);
// Output: (const) Nilai PI: 3.14159

const NAMA_APLIKASI = "Belajar JS";
console.log("(const) Aplikasi: " + NAMA_APLIKASI);
// Output: (const) Aplikasi: Belajar JS

// Jika kita coba mengubah nilai const, akan ERROR:
// PI = 3.14;  // TypeError: Assignment to constant variable.
// Silakan uncomment baris di atas untuk melihat errornya.


// -----------------------------------------------------------
// BAGIAN B: TIPE DATA PRIMITIF
// -----------------------------------------------------------
// JavaScript memiliki beberapa tipe data dasar (primitif).
// Kita bisa mengecek tipe data menggunakan operator 'typeof'.

console.log("\n=== BAGIAN B: Tipe Data Primitif ===\n");

// ---------- 1. String (Teks) ----------
// String adalah tipe data untuk menyimpan TEKS.
// Diapit oleh tanda kutip: " " atau ' ' atau ` ` (backtick)

let namaDepan = "Siti";              // Menggunakan kutip ganda
let namaBelakang = 'Nurhaliza';      // Menggunakan kutip tunggal
let namaFull = `${namaDepan} ${namaBelakang}`; // Menggunakan backtick (template literal)

console.log("Tipe data 'namaDepan': " + typeof namaDepan);  // "string"
console.log("Nama lengkap: " + namaFull);                    // "Siti Nurhaliza"

// Penjelasan backtick/template literal (`...`):
// - Bisa menyisipkan variabel dengan ${namaVariabel}
// - Lebih mudah dibaca dibanding concatenation (+)
// - Bisa membuat string multi-baris


// ---------- 2. Number (Angka) ----------
// Number digunakan untuk menyimpan angka (bulat maupun desimal).
// JavaScript TIDAK membedakan integer dan float seperti bahasa lain.

let umur = 17;                       // Angka bulat (integer)
let tinggi = 170.5;                  // Angka desimal (float)
let suhuNegatif = -5;                // Angka negatif

console.log("\nTipe data 'umur': " + typeof umur);           // "number"
console.log("Umur: " + umur);                                // 17
console.log("Tinggi: " + tinggi + " cm");                    // 170.5 cm
console.log("Suhu: " + suhuNegatif + "°C");                  // -5°C


// ---------- 3. Boolean (Benar/Salah) ----------
// Boolean hanya memiliki 2 nilai: true (benar) atau false (salah).
// Sangat penting untuk logika dan pengambilan keputusan.

let sudahLulus = true;               // Bernilai benar
let punyaHutang = false;             // Bernilai salah

console.log("\nTipe data 'sudahLulus': " + typeof sudahLulus); // "boolean"
console.log("Sudah lulus? " + sudahLulus);                     // true
console.log("Punya hutang? " + punyaHutang);                   // false


// ---------- 4. Undefined ----------
// Undefined artinya variabel SUDAH DIDEKLARASIKAN tapi BELUM DIBERI NILAI.
// JavaScript secara otomatis memberi nilai 'undefined'.

let alamat;                          // Dideklarasikan TANPA nilai
console.log("\nTipe data 'alamat': " + typeof alamat);        // "undefined"
console.log("Alamat: " + alamat);                              // undefined

// Sekarang kita beri nilai (secara sekuensial, setelah baris di atas):
alamat = "Jl. Merdeka No. 17";
console.log("Alamat (setelah diisi): " + alamat);
// Output: Jl. Merdeka No. 17
// Perhatikan: nilai berubah karena kode berjalan SEKUENSIAL.


// ---------- 5. Null ----------
// Null artinya variabel SENGAJA dikosongkan / tidak memiliki nilai.
// Berbeda dengan undefined yang "tidak sengaja" kosong.

let dataPasangan = null;             // Sengaja dikosongkan (belum punya pasangan)
console.log("\nNilai 'dataPasangan': " + dataPasangan);       // null
console.log("Tipe data: " + typeof dataPasangan);             // "object" (ini bug lama JS)

// Perbedaan undefined vs null:
// undefined → "Saya lupa mengisi nilai"
// null      → "Saya sengaja mengosongkan nilai"


// -----------------------------------------------------------
// BAGIAN C: TIPE DATA NON-PRIMITIF (Referensi)
// -----------------------------------------------------------

console.log("\n=== BAGIAN C: Tipe Data Non-Primitif ===\n");

// ---------- 1. Array (Daftar/Kumpulan Data) ----------
// Array menyimpan KUMPULAN DATA dalam satu variabel.
// Data di dalam array diakses menggunakan INDEX (dimulai dari 0).

let buah = ["Apel", "Mangga", "Jeruk", "Durian"];
//  Index:    [0]      [1]      [2]       [3]

console.log("Daftar buah: " + buah);           // Apel,Mangga,Jeruk,Durian
console.log("Buah pertama: " + buah[0]);       // Apel    (index 0)
console.log("Buah ketiga: " + buah[2]);        // Jeruk   (index 2)
console.log("Jumlah buah: " + buah.length);    // 4


// ---------- 2. Object (Objek) ----------
// Object menyimpan data dalam bentuk pasangan KEY-VALUE (kunci-nilai).
// Cocok untuk merepresentasikan entitas nyata (orang, barang, dll).

let siswa = {
    nama: "Dewi Sartika",           // key: "nama",    value: "Dewi Sartika"
    kelas: "XII IPA 1",             // key: "kelas",   value: "XII IPA 1"
    usia: 17,                       // key: "usia",    value: 17
    aktif: true                     // key: "aktif",   value: true
};

console.log("\nData Siswa:");
console.log("Nama  : " + siswa.nama);          // Dewi Sartika
console.log("Kelas : " + siswa.kelas);         // XII IPA 1
console.log("Usia  : " + siswa.usia);          // 17
console.log("Aktif : " + siswa.aktif);         // true


// -----------------------------------------------------------
// BAGIAN D: PERUBAHAN NILAI SECARA SEKUENSIAL
// -----------------------------------------------------------
// Bagian ini menunjukkan bagaimana nilai variabel berubah
// seiring kode dijalankan baris per baris (sekuensial).

console.log("\n=== BAGIAN D: Perubahan Nilai Sekuensial ===\n");

let saldo = 1000000;                            // Saldo awal: Rp 1.000.000
console.log("Saldo awal     : Rp " + saldo);

// Transaksi 1: Belanja Rp 250.000
saldo = saldo - 250000;                         // 1.000.000 - 250.000 = 750.000
console.log("Setelah belanja: Rp " + saldo);

// Transaksi 2: Terima gaji Rp 3.000.000
saldo = saldo + 3000000;                        // 750.000 + 3.000.000 = 3.750.000
console.log("Setelah gajian : Rp " + saldo);

// Transaksi 3: Bayar listrik Rp 500.000
saldo = saldo - 500000;                         // 3.750.000 - 500.000 = 3.250.000
console.log("Setelah bayar listrik: Rp " + saldo);

// Transaksi 4: Menabung Rp 1.000.000
saldo = saldo - 1000000;                        // 3.250.000 - 1.000.000 = 2.250.000
console.log("Setelah menabung: Rp " + saldo);

// PENTING: Setiap baris menggunakan NILAI TERBARU dari 'saldo'.
// Ini terjadi karena eksekusi SEKUENSIAL — setiap baris menunggu
// baris sebelumnya selesai sebelum dijalankan.


// ============================================================
//  KESIMPULAN MATERI 2:
// ============================================================
//
// 1. DEKLARASI VARIABEL:
//    - var   → cara lama, hindari penggunaan
//    - let   → untuk nilai yang BISA berubah
//    - const → untuk nilai yang TIDAK BISA berubah
//
// 2. TIPE DATA PRIMITIF:
//    - String    → teks ("hello")
//    - Number    → angka (42, 3.14)
//    - Boolean   → benar/salah (true, false)
//    - Undefined → belum diberi nilai
//    - Null      → sengaja dikosongkan
//
// 3. TIPE DATA NON-PRIMITIF:
//    - Array     → kumpulan data [1, 2, 3]
//    - Object    → pasangan key-value {nama: "Budi"}
//
// 4. Dalam eksekusi SEKUENSIAL:
//    - Variabel harus dideklarasikan SEBELUM digunakan
//    - Nilai variabel bisa berubah seiring baris kode dieksekusi
//    - Setiap baris menggunakan nilai TERBARU dari variabel
//
// ============================================================
