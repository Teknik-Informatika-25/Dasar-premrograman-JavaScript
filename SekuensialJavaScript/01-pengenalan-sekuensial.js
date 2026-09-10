// ============================================================
//  MATERI 1: PENGENALAN PEMROGRAMAN SEKUENSIAL
// ============================================================
//
//  APA ITU PEMROGRAMAN SEKUENSIAL?
// -----------------------------------
// Pemrograman sekuensial adalah pola eksekusi program di mana
// instruksi/perintah dijalankan SATU PER SATU secara BERURUTAN
// dari ATAS ke BAWAH (top-to-bottom), baris demi baris.
//
// Bayangkan seperti membaca buku:
// - Kamu membaca halaman 1 dulu, baru halaman 2, lalu halaman 3.
// - Tidak bisa langsung loncat ke halaman 5 tanpa melewati halaman sebelumnya.
//
// Dalam pemrograman sekuensial:
// - Baris ke-1 dijalankan PERTAMA
// - Baris ke-2 dijalankan KEDUA (setelah baris ke-1 selesai)
// - Baris ke-3 dijalankan KETIGA (setelah baris ke-2 selesai)
// - Dan seterusnya...
//
// ============================================================

// -----------------------------------------------------------
// CONTOH 1: Urutan Eksekusi Dasar
// -----------------------------------------------------------
// Perhatikan bahwa setiap console.log() akan dijalankan
// secara berurutan dari atas ke bawah.

console.log("=== CONTOH 1: Urutan Eksekusi Dasar ===");

console.log("Langkah 1: Bangun tidur");       // Dijalankan PERTAMA
console.log("Langkah 2: Mandi");               // Dijalankan KEDUA
console.log("Langkah 3: Sarapan");             // Dijalankan KETIGA
console.log("Langkah 4: Berangkat sekolah");   // Dijalankan KEEMPAT
console.log("Langkah 5: Belajar di sekolah");  // Dijalankan KELIMA

// OUTPUT yang dihasilkan PASTI berurutan:
// Langkah 1: Bangun tidur
// Langkah 2: Mandi
// Langkah 3: Sarapan
// Langkah 4: Berangkat sekolah
// Langkah 5: Belajar di sekolah
//
//  TIDAK MUNGKIN "Sarapan" muncul sebelum "Bangun tidur"
//    karena kode dieksekusi secara SEKUENSIAL (berurutan).


// -----------------------------------------------------------
// CONTOH 2: Mengapa Urutan Itu Penting?
// -----------------------------------------------------------
// Dalam kehidupan nyata maupun pemrograman, urutan sangat penting.
// Contoh: kamu tidak bisa menuangkan air ke gelas yang belum disiapkan.

console.log("\n=== CONTOH 2: Urutan Itu Penting ===");

// Urutan yang BENAR:
console.log("1. Ambil gelas dari lemari");    // Langkah pertama
console.log("2. Taruh gelas di atas meja");   // Langkah kedua
console.log("3. Tuang air ke dalam gelas");   // Langkah ketiga
console.log("4. Minum air dari gelas");       // Langkah keempat

// Jika urutannya dibalik, hasilnya tidak masuk akal:
// ❌ "Minum air dari gelas" → gelas belum ada!
// ❌ "Tuang air ke dalam gelas" → gelasnya di mana?


// -----------------------------------------------------------
// CONTOH 3: Sekuensial dengan Variabel
// -----------------------------------------------------------
// Variabel juga harus dideklarasikan SEBELUM digunakan.
// Ini adalah contoh nyata pentingnya urutan sekuensial.

console.log("\n=== CONTOH 3: Sekuensial dengan Variabel ===");

// Langkah 1: Deklarasikan variabel terlebih dahulu
let nama = "Budi";                            // Baris ini dijalankan PERTAMA
let umur = 17;                                // Baris ini dijalankan KEDUA
let sekolah = "SMA Negeri 1";                 // Baris ini dijalankan KETIGA

// Langkah 2: Gunakan variabel yang sudah dideklarasikan
console.log("Nama    : " + nama);             // Baris ini dijalankan KEEMPAT
console.log("Umur    : " + umur + " tahun");  // Baris ini dijalankan KELIMA
console.log("Sekolah : " + sekolah);          // Baris ini dijalankan KEENAM

//  Ini berhasil karena variabel 'nama', 'umur', dan 'sekolah'
//   sudah dideklarasikan DI ATAS sebelum digunakan DI BAWAH.


// -----------------------------------------------------------
// CONTOH 4: Error Jika Urutan Salah
// -----------------------------------------------------------
// Jika kamu menggunakan variabel SEBELUM dideklarasikan
// dengan 'let' atau 'const', maka akan terjadi ERROR.

console.log("\n=== CONTOH 4: Pentingnya Urutan Deklarasi ===");

//  CONTOH YANG SALAH (jangan di-uncomment, akan ERROR):
// console.log(nilaiMatematika);  // ERROR! variabel belum ada
// let nilaiMatematika = 90;

// CONTOH YANG BENAR:
let nilaiMatematika = 90;                         // Deklarasi DULU
console.log("Nilai Matematika: " + nilaiMatematika); // Baru GUNAKAN

// Penjelasan:
// JavaScript membaca kode dari ATAS ke BAWAH.
// Jika kamu menggunakan variabel sebelum dideklarasikan,
// JavaScript belum "tahu" variabel itu ada, sehingga ERROR.


// -----------------------------------------------------------
// CONTOH 5: Analogi Resep Masak (Sekuensial di Kehidupan Nyata)
// -----------------------------------------------------------
// Memasak nasi goreng adalah contoh sempurna dari proses sekuensial.
// Setiap langkah HARUS dilakukan secara berurutan.

console.log("\n=== CONTOH 5: Resep Nasi Goreng (Analogi Sekuensial) ===");

let bahan = "Nasi, Telur, Bawang, Kecap";     // Langkah 1: Siapkan bahan
console.log("1. Bahan disiapkan: " + bahan);

let kompor = "menyala";                         // Langkah 2: Nyalakan kompor
console.log("2. Kompor " + kompor);

let minyak = "sudah panas";                     // Langkah 3: Panaskan minyak
console.log("3. Minyak " + minyak);

let masak = "Tumis bawang hingga harum";        // Langkah 4: Tumis bawang
console.log("4. " + masak);

let tambahNasi = "Nasi dimasukkan ke wajan";    // Langkah 5: Masukkan nasi
console.log("5. " + tambahNasi);

let bumbu = "Kecap dan garam ditambahkan";      // Langkah 6: Tambah bumbu
console.log("6. " + bumbu);

let hasil = "Nasi Goreng Siap Disajikan! 🍳";   // Langkah 7: Selesai
console.log("7. " + hasil);

// Setiap langkah bergantung pada langkah sebelumnya.
// Tidak mungkin menumis bawang kalau kompor belum menyala!


// ============================================================
//  KESIMPULAN MATERI 1:
// ============================================================
//
// 1. Pemrograman SEKUENSIAL = kode dijalankan BERURUTAN
//    dari ATAS ke BAWAH, satu per satu.
//
// 2. Urutan SANGAT PENTING karena:
//    - Variabel harus dideklarasikan sebelum digunakan
//    - Setiap langkah bisa bergantung pada langkah sebelumnya
//    - Urutan yang salah bisa menyebabkan ERROR atau hasil yang salah
//
// 3. Sekuensial adalah DASAR dari semua pemrograman.
//    Sebelum belajar percabangan (if-else) atau perulangan (loop),
//    kamu HARUS memahami konsep sekuensial ini.
//
// ============================================================
