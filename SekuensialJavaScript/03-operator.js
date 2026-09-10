// ============================================================
// 📘 MATERI 3: OPERATOR DALAM JAVASCRIPT (SEKUENSIAL)
// ============================================================
//
// Operator adalah simbol yang digunakan untuk melakukan OPERASI
// pada nilai (operand). Dalam materi ini kita belajar:
// 1. Operator Aritmatika (hitung-hitungan)
// 2. Operator Penugasan (assignment)
// 3. Operator Perbandingan (comparison)
// 4. Operator Logika (logical)
// 5. Operator String (concatenation)
//
// Semua contoh dijalankan secara SEKUENSIAL (berurutan).
//
// ============================================================


// -----------------------------------------------------------
// BAGIAN A: OPERATOR ARITMATIKA
// -----------------------------------------------------------
// Digunakan untuk melakukan operasi MATEMATIKA.
//
// Simbol | Nama           | Contoh  | Hasil
// -------|----------------|---------|------
//   +    | Penjumlahan    | 5 + 3   | 8
//   -    | Pengurangan    | 5 - 3   | 2
//   *    | Perkalian      | 5 * 3   | 15
//   /    | Pembagian      | 6 / 3   | 2
//   %    | Modulus (sisa) | 7 % 3   | 1
//   **   | Pangkat        | 2 ** 3  | 8

console.log("=== BAGIAN A: Operator Aritmatika ===\n");

// Deklarasi dua angka untuk operasi
let angka1 = 15;    // Operand pertama
let angka2 = 4;     // Operand kedua

// Penjumlahan (+)
// Menjumlahkan dua nilai
let hasilTambah = angka1 + angka2;       // 15 + 4 = 19
console.log(angka1 + " + " + angka2 + " = " + hasilTambah);

// Pengurangan (-)
// Mengurangkan nilai kedua dari nilai pertama
let hasilKurang = angka1 - angka2;       // 15 - 4 = 11
console.log(angka1 + " - " + angka2 + " = " + hasilKurang);

// Perkalian (*)
// Mengalikan dua nilai
let hasilKali = angka1 * angka2;         // 15 * 4 = 60
console.log(angka1 + " * " + angka2 + " = " + hasilKali);

// Pembagian (/)
// Membagi nilai pertama dengan nilai kedua
let hasilBagi = angka1 / angka2;         // 15 / 4 = 3.75
console.log(angka1 + " / " + angka2 + " = " + hasilBagi);

// Modulus (%) — Sisa bagi
// Mengembalikan SISA dari pembagian
// Contoh: 15 / 4 = 3 sisa 3 → maka 15 % 4 = 3
let hasilModulus = angka1 % angka2;      // 15 % 4 = 3
console.log(angka1 + " % " + angka2 + " = " + hasilModulus);

// Pangkat (**)
// Memangkatkan nilai pertama dengan nilai kedua
let hasilPangkat = angka1 ** angka2;     // 15 ** 4 = 50625
console.log(angka1 + " ** " + angka2 + " = " + hasilPangkat);


// -----------------------------------------------------------
// BAGIAN B: OPERATOR PENUGASAN (ASSIGNMENT)
// -----------------------------------------------------------
// Digunakan untuk MEMBERI NILAI atau MENGUBAH NILAI variabel.
//
// Simbol | Nama              | Sama dengan
// -------|-------------------|------------
//   =    | Penugasan         | x = 5
//   +=   | Tambah & tugaskan | x = x + 5
//   -=   | Kurang & tugaskan | x = x - 5
//   *=   | Kali & tugaskan   | x = x * 5
//   /=   | Bagi & tugaskan   | x = x / 5
//   %=   | Modulus & tugaskan| x = x % 5

console.log("\n=== BAGIAN B: Operator Penugasan ===\n");

let nilai = 100;                          // Penugasan dasar: nilai = 100
console.log("Nilai awal: " + nilai);      // 100

// += (Tambah lalu tugaskan)
// nilai += 20 SAMA DENGAN nilai = nilai + 20
nilai += 20;                              // 100 + 20 = 120
console.log("Setelah += 20: " + nilai);   // 120

// -= (Kurang lalu tugaskan)
// nilai -= 30 SAMA DENGAN nilai = nilai - 30
nilai -= 30;                              // 120 - 30 = 90
console.log("Setelah -= 30: " + nilai);   // 90

// *= (Kali lalu tugaskan)
// nilai *= 2 SAMA DENGAN nilai = nilai * 2
nilai *= 2;                               // 90 * 2 = 180
console.log("Setelah *= 2: " + nilai);    // 180

// /= (Bagi lalu tugaskan)
// nilai /= 3 SAMA DENGAN nilai = nilai / 3
nilai /= 3;                               // 180 / 3 = 60
console.log("Setelah /= 3: " + nilai);    // 60

// %= (Modulus lalu tugaskan)
// nilai %= 7 SAMA DENGAN nilai = nilai % 7
nilai %= 7;                               // 60 % 7 = 4 (60/7 = 8 sisa 4)
console.log("Setelah %= 7: " + nilai);    // 4

// PERHATIKAN SEKUENSIAL:
// Setiap operasi menggunakan nilai TERBARU dari variabel 'nilai'.
// Nilai berubah di setiap baris karena eksekusi berurutan.


// -----------------------------------------------------------
// BAGIAN C: INCREMENT & DECREMENT
// -----------------------------------------------------------
// Operator khusus untuk menambah atau mengurangi nilai SATU.
//
// ++variabel  → Pre-increment (tambah dulu, baru gunakan)
// variabel++  → Post-increment (gunakan dulu, baru tambah)
// --variabel  → Pre-decrement (kurang dulu, baru gunakan)
// variabel--  → Post-decrement (gunakan dulu, baru kurang)

console.log("\n=== BAGIAN C: Increment & Decrement ===\n");

let counter = 10;
console.log("Counter awal: " + counter);       // 10

// Post-increment (counter++)
// Nilai yang ditampilkan adalah nilai SEBELUM ditambah
console.log("counter++ = " + counter++);       // Tampilkan 10, lalu counter jadi 11
console.log("Setelah counter++: " + counter);  // 11

// Pre-increment (++counter)
// Nilai ditambah DULU, baru ditampilkan
console.log("++counter = " + (++counter));     // Counter jadi 12, tampilkan 12
console.log("Setelah ++counter: " + counter);  // 12

// Post-decrement (counter--)
console.log("counter-- = " + counter--);       // Tampilkan 12, lalu counter jadi 11
console.log("Setelah counter--: " + counter);  // 11

// Pre-decrement (--counter)
console.log("--counter = " + (--counter));     // Counter jadi 10, tampilkan 10
console.log("Setelah --counter: " + counter);  // 10


// -----------------------------------------------------------
// BAGIAN D: OPERATOR PERBANDINGAN
// -----------------------------------------------------------
// Membandingkan dua nilai dan menghasilkan BOOLEAN (true/false).
//
// Simbol | Nama                      | Contoh   | Hasil
// -------|---------------------------|----------|------
//   ==   | Sama dengan (nilai)       | 5 == "5" | true
//   ===  | Sama persis (nilai+tipe)  | 5 ==="5" | false
//   !=   | Tidak sama (nilai)        | 5 != "5" | false
//   !==  | Tidak sama persis         | 5 !=="5" | true
//   >    | Lebih besar               | 5 > 3    | true
//   <    | Lebih kecil               | 5 < 3    | false
//   >=   | Lebih besar atau sama     | 5 >= 5   | true
//   <=   | Lebih kecil atau sama     | 3 <= 5   | true

console.log("\n=== BAGIAN D: Operator Perbandingan ===\n");

let a = 10;
let b = "10";
let c = 20;

// == (Sama dengan — hanya cek NILAI, bukan tipe data)
console.log("10 == '10'  → " + (a == b));     // true  (nilai sama, tipe diabaikan)

// === (Sama persis — cek NILAI DAN TIPE DATA)
console.log("10 === '10' → " + (a === b));    // false (nilai sama, tapi tipe beda: number vs string)

// != (Tidak sama — hanya cek NILAI)
console.log("10 != '10'  → " + (a != b));     // false (nilai sama, jadi "tidak sama" = false)

// !== (Tidak sama persis — cek NILAI DAN TIPE)
console.log("10 !== '10' → " + (a !== b));    // true  (tipe beda, jadi "tidak sama persis" = true)

// > (Lebih besar)
console.log("10 > 20     → " + (a > c));      // false

// < (Lebih kecil)
console.log("10 < 20     → " + (a < c));      // true

// >= (Lebih besar atau sama dengan)
console.log("10 >= 10    → " + (a >= 10));     // true

// <= (Lebih kecil atau sama dengan)
console.log("10 <= 20    → " + (a <= c));      // true

// TIPS PENTING:
// Selalu gunakan === (triple equals) daripada == (double equals)
// untuk menghindari bug akibat type coercion (konversi tipe otomatis).


// -----------------------------------------------------------
// BAGIAN E: OPERATOR LOGIKA
// -----------------------------------------------------------
// Digunakan untuk menggabungkan beberapa kondisi boolean.
//
// Simbol | Nama | Penjelasan
// -------|------|------------------------------------------
//   &&   | AND  | true jika SEMUA kondisi true
//   ||   | OR   | true jika SALAH SATU kondisi true
//   !    | NOT  | Membalik nilai boolean (true → false)

console.log("\n=== BAGIAN E: Operator Logika ===\n");

let sudahMakan = true;
let sudahMandi = false;

// AND (&&) — SEMUA harus true agar hasilnya true
console.log("sudahMakan && sudahMandi → " + (sudahMakan && sudahMandi));
// true && false = false
// Penjelasan: "Sudah makan DAN sudah mandi?" → Tidak, karena belum mandi.

// OR (||) — SALAH SATU true, hasilnya true
console.log("sudahMakan || sudahMandi → " + (sudahMakan || sudahMandi));
// true || false = true
// Penjelasan: "Sudah makan ATAU sudah mandi?" → Ya, sudah makan.

// NOT (!) — Membalik nilai boolean
console.log("!sudahMakan → " + (!sudahMakan));
// !true = false
// Penjelasan: "BUKAN sudah makan?" → false (karena memang sudah makan)

console.log("!sudahMandi → " + (!sudahMandi));
// !false = true
// Penjelasan: "BUKAN sudah mandi?" → true (karena memang belum mandi)

// Contoh kombinasi logika yang lebih kompleks:
let usia = 20;
let punyaKTP = true;
let punyaSIM = false;

// Apakah boleh menyetir?
// Syarat: usia >= 17 DAN punya SIM
let bolehMenyetir = (usia >= 17) && punyaSIM;
console.log("\nBoleh menyetir? " + bolehMenyetir);    // false (punya SIM = false)

// Apakah bisa verifikasi identitas?
// Syarat: punya KTP ATAU punya SIM (salah satu cukup)
let bisaVerifikasi = punyaKTP || punyaSIM;
console.log("Bisa verifikasi? " + bisaVerifikasi);    // true (punya KTP = true)


// -----------------------------------------------------------
// BAGIAN F: OPERATOR STRING (CONCATENATION)
// -----------------------------------------------------------
// Operator + pada string digunakan untuk MENGGABUNGKAN teks.

console.log("\n=== BAGIAN F: Operator String ===\n");

// Concatenation dengan operator +
let sapaan = "Halo";
let namaOrang = "Budi";
let kalimat = sapaan + ", " + namaOrang + "!";  // Menggabungkan string
console.log(kalimat);                             // "Halo, Budi!"

// Concatenation dengan += (menambahkan ke string yang sudah ada)
let pesan = "Selamat ";       // "Selamat "
pesan += "datang ";           // "Selamat datang "    (ditambah "datang ")
pesan += "di JavaScript!";    // "Selamat datang di JavaScript!"
console.log(pesan);

// Template Literal (cara modern — DISARANKAN)
// Menggunakan backtick (`) dan ${variabel}
let kota = "Jakarta";
let tahun = 2026;
let pesanModern = `Saya tinggal di ${kota} sejak tahun ${tahun}.`;
console.log(pesanModern);     // "Saya tinggal di Jakarta sejak tahun 2026."

// Keuntungan template literal:
// 1. Lebih mudah dibaca
// 2. Bisa menyisipkan ekspresi: ${2 + 3} → "5"
// 3. Mendukung multi-baris tanpa \n
console.log(`Hasil 10 + 5 = ${10 + 5}`);   // "Hasil 10 + 5 = 15"


// -----------------------------------------------------------
// BAGIAN G: STUDI KASUS — KALKULATOR SEDERHANA (SEKUENSIAL)
// -----------------------------------------------------------
// Menggabungkan semua operator dalam satu contoh kasus.

console.log("\n=== BAGIAN G: Kalkulator Sederhana ===\n");

// Langkah 1: Tentukan dua bilangan
let bil1 = 24;
let bil2 = 7;
console.log("Bilangan 1: " + bil1);
console.log("Bilangan 2: " + bil2);

// Langkah 2: Hitung semua operasi aritmatika (sekuensial)
let penjumlahan = bil1 + bil2;     // 24 + 7 = 31
let pengurangan = bil1 - bil2;     // 24 - 7 = 17
let perkalian   = bil1 * bil2;     // 24 * 7 = 168
let pembagian   = bil1 / bil2;     // 24 / 7 = 3.4285...
let sisa        = bil1 % bil2;     // 24 % 7 = 3

// Langkah 3: Tampilkan hasil (sekuensial)
console.log("\nHasil Perhitungan:");
console.log(`${bil1} + ${bil2} = ${penjumlahan}`);
console.log(`${bil1} - ${bil2} = ${pengurangan}`);
console.log(`${bil1} × ${bil2} = ${perkalian}`);
console.log(`${bil1} ÷ ${bil2} = ${pembagian.toFixed(2)}`);  // .toFixed(2) → 2 desimal
console.log(`${bil1} mod ${bil2} = ${sisa}`);

// Langkah 4: Cek apakah habis dibagi
let habisDebagi = (sisa === 0);    // false karena sisa = 3
console.log(`\nApakah ${bil1} habis dibagi ${bil2}? ${habisDebagi}`);


// ============================================================
//  KESIMPULAN MATERI 3:
// ============================================================
//
// 1. OPERATOR ARITMATIKA: +, -, *, /, %, **
//    → Untuk operasi matematika
//
// 2. OPERATOR PENUGASAN: =, +=, -=, *=, /=, %=
//    → Untuk memberi/mengubah nilai variabel
//
// 3. OPERATOR INCREMENT/DECREMENT: ++, --
//    → Menambah/mengurangi nilai 1
//    → Perhatikan perbedaan pre (++x) dan post (x++)
//
// 4. OPERATOR PERBANDINGAN: ==, ===, !=, !==, >, <, >=, <=
//    → Menghasilkan boolean (true/false)
//    → Selalu gunakan === dan !== (strict comparison)
//
// 5. OPERATOR LOGIKA: && (AND), || (OR), ! (NOT)
//    → Untuk menggabungkan kondisi boolean
//
// 6. OPERATOR STRING: + dan template literal (`...${var}...`)
//    → Untuk menggabungkan teks
//
// 7. Semua operasi di atas dieksekusi secara SEKUENSIAL.
//    Setiap baris menggunakan nilai TERBARU dari variabel.
//
// ============================================================
