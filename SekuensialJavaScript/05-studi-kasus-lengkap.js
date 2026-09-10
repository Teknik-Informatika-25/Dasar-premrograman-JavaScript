// ============================================================
// 📘 MATERI 5: STUDI KASUS LENGKAP — PEMROGRAMAN SEKUENSIAL
// ============================================================
//
// Materi ini berisi berbagai studi kasus LENGKAP yang menerapkan
// semua konsep sekuensial yang sudah dipelajari:
// - Variabel & tipe data
// - Operator
// - Input-Proses-Output (IPO)
// - Konversi tipe data
//
// Setiap kasus menunjukkan bagaimana kode dieksekusi
// BARIS DEMI BARIS secara BERURUTAN.
//
// ============================================================


// ============================================================
// 🎯 KASUS 1: BIODATA SISWA
// ============================================================
// Membuat program yang menampilkan biodata siswa secara lengkap.
// Menerapkan: variabel, string, number, boolean, template literal

console.log("╔════════════════════════════════════╗");
console.log("║     🎯 KASUS 1: BIODATA SISWA      ║");
console.log("╚════════════════════════════════════╝\n");

// LANGKAH 1: Deklarasi data siswa (INPUT)
const namaSiswa = "Muhammad Rizky Pratama";   // Nama tidak berubah → const
const nisn = "0012345678";                    // NISN tidak berubah → const
let kelas = "XII RPL 2";                      // Kelas bisa berubah → let
let nilaiAkhir = 87.5;                        // Nilai bisa berubah → let
let statusLulus = true;                       // Status bisa berubah → let

// LANGKAH 2: Proses format data (PROSES)
// Konversi boolean ke teks yang mudah dipahami
let statusTeks = statusLulus ? "LULUS ✅" : "TIDAK LULUS ❌";
// Operator ternary (? :):
// kondisi ? nilaiJikaTrue : nilaiJikaFalse
// statusLulus = true → hasilnya "LULUS ✅"

// Tentukan predikat berdasarkan nilai
let predikat;
// Kita belum belajar if-else, jadi gunakan cara sekuensial:
// Untuk saat ini, kita anggap nilainya sudah pasti
predikat = "Sangat Baik";  // Karena 87.5 > 85

// LANGKAH 3: Tampilkan biodata (OUTPUT)
console.log("┌──────────────────────────────────┐");
console.log("│          BIODATA SISWA           │");
console.log("├──────────────────────────────────┤");
console.log(`│ Nama    : ${namaSiswa}  │`);
console.log(`│ NISN    : ${nisn}            │`);
console.log(`│ Kelas   : ${kelas}               │`);
console.log(`│ Nilai   : ${nilaiAkhir}                   │`);
console.log(`│ Status  : ${statusTeks}              │`);
console.log(`│ Predikat: ${predikat}            │`);
console.log("└──────────────────────────────────┘");


// ============================================================
// 🎯 KASUS 2: KALKULATOR BMI (Body Mass Index)
// ============================================================
// Menghitung BMI seseorang berdasarkan berat dan tinggi badan.
// Rumus BMI = berat (kg) / (tinggi (m))²
// Menerapkan: konversi tipe, operator aritmatika, pembulatan

console.log("\n╔════════════════════════════════════╗");
console.log("║    🎯 KASUS 2: KALKULATOR BMI      ║");
console.log("╚════════════════════════════════════╝\n");

// LANGKAH 1 (INPUT): Data pasien
let inputBerat = "70";       // Simulasi input berat badan (kg) — string
let inputTinggiCm = "170";   // Simulasi input tinggi badan (cm) — string

console.log("Data yang dimasukkan:");
console.log("Berat badan : " + inputBerat + " kg");
console.log("Tinggi badan: " + inputTinggiCm + " cm");

// LANGKAH 2 (PROSES): Konversi dan hitung

// 2a. Konversi string ke number
let beratBadan = parseFloat(inputBerat);       // "70" → 70
let tinggiBadanCm = parseFloat(inputTinggiCm); // "170" → 170

// 2b. Konversi cm ke meter (dibagi 100)
let tinggiBadanM = tinggiBadanCm / 100;        // 170 / 100 = 1.7

// 2c. Hitung BMI
// Rumus: BMI = berat / (tinggi × tinggi)
let bmi = beratBadan / (tinggiBadanM ** 2);    // 70 / (1.7²) = 70 / 2.89 = 24.22...

// 2d. Bulatkan ke 1 desimal
let bmiRounded = Math.round(bmi * 10) / 10;   // 24.2
// Penjelasan Math.round():
// bmi * 10 = 242.2...
// Math.round(242.2) = 242
// 242 / 10 = 24.2

// 2e. Tentukan kategori BMI (menggunakan operator ternary bertingkat)
let kategoriBMI =
    bmiRounded < 18.5 ? "Kurus (Underweight)" :
    bmiRounded < 25.0 ? "Normal" :
    bmiRounded < 30.0 ? "Gemuk (Overweight)" :
    "Obesitas";

// LANGKAH 3 (OUTPUT): Tampilkan hasil
console.log("\n📊 HASIL PERHITUNGAN BMI:");
console.log("─".repeat(35));
console.log(`Berat       : ${beratBadan} kg`);
console.log(`Tinggi      : ${tinggiBadanCm} cm (${tinggiBadanM} m)`);
console.log(`BMI         : ${bmiRounded}`);
console.log(`Kategori    : ${kategoriBMI}`);
console.log("─".repeat(35));


// ============================================================
// 🎯 KASUS 3: KONVERSI WAKTU
// ============================================================
// Mengkonversi total detik menjadi jam, menit, dan detik.
// Menerapkan: pembagian integer, modulus, template literal

console.log("\n╔════════════════════════════════════╗");
console.log("║   🎯 KASUS 3: KONVERSI WAKTU       ║");
console.log("╚════════════════════════════════════╝\n");

// LANGKAH 1 (INPUT): Total detik
let totalDetik = 45296;    // = 12 jam, 34 menit, 56 detik
console.log("Total detik: " + totalDetik + " detik");

// LANGKAH 2 (PROSES): Konversi
// Penjelasan logika:
// 1 menit = 60 detik
// 1 jam   = 3600 detik (60 × 60)

// Hitung jam (bagi total detik dengan 3600, buang sisa)
let jam = Math.floor(totalDetik / 3600);
// Math.floor() → membulatkan ke BAWAH
// 45296 / 3600 = 12.58... → Math.floor → 12

// Hitung sisa detik setelah jam dihitung
let sisaSetelahJam = totalDetik % 3600;
// 45296 % 3600 = 2096 detik (sisa yang belum jadi jam)

// Hitung menit dari sisa detik
let menit = Math.floor(sisaSetelahJam / 60);
// 2096 / 60 = 34.93... → Math.floor → 34

// Hitung sisa detik setelah menit dihitung
let detik = sisaSetelahJam % 60;
// 2096 % 60 = 56 detik

// Format angka agar selalu 2 digit (misal: 5 → "05")
let jamStr = String(jam).padStart(2, "0");
let menitStr = String(menit).padStart(2, "0");
let detikStr = String(detik).padStart(2, "0");
// padStart(2, "0"):
// "5".padStart(2, "0") → "05"
// "12".padStart(2, "0") → "12" (sudah 2 digit, tidak berubah)

// LANGKAH 3 (OUTPUT): Tampilkan hasil
console.log("\n⏱️ HASIL KONVERSI:");
console.log(`${totalDetik} detik = ${jam} jam, ${menit} menit, ${detik} detik`);
console.log(`Format waktu: ${jamStr}:${menitStr}:${detikStr}`);


// ============================================================
// 🎯 KASUS 4: MENGHITUNG DISKON BELANJA
// ============================================================
// Menghitung total belanja dengan berbagai jenis diskon.
// Menerapkan: operator aritmatika, konversi, format angka

console.log("\n╔════════════════════════════════════╗");
console.log("║  🎯 KASUS 4: KALKULATOR DISKON     ║");
console.log("╚════════════════════════════════════╝\n");

// LANGKAH 1 (INPUT): Data belanja
let namaProduct = "Laptop ASUS VivoBook";
let hargaAsli = 12500000;                // Rp 12.500.000
let persenDiskon = 15;                   // Diskon 15%
let jumlahBeli = 1;

console.log("📦 Detail Belanja:");
console.log(`Produk    : ${namaProduct}`);
console.log(`Harga     : Rp ${hargaAsli.toLocaleString("id-ID")}`);
console.log(`Diskon    : ${persenDiskon}%`);
console.log(`Jumlah    : ${jumlahBeli}`);

// LANGKAH 2 (PROSES): Hitung diskon dan total

// 2a. Hitung nominal diskon
let nominalDiskon = hargaAsli * (persenDiskon / 100);
// 12.500.000 × (15/100) = 12.500.000 × 0.15 = 1.875.000

// 2b. Hitung harga setelah diskon
let hargaDiskon = hargaAsli - nominalDiskon;
// 12.500.000 - 1.875.000 = 10.625.000

// 2c. Hitung subtotal (harga × jumlah)
let subtotal = hargaDiskon * jumlahBeli;
// 10.625.000 × 1 = 10.625.000

// 2d. Hitung PPN 11%
let ppn = subtotal * 0.11;
// 10.625.000 × 0.11 = 1.168.750

// 2e. Hitung total akhir
let totalAkhir = subtotal + ppn;
// 10.625.000 + 1.168.750 = 11.793.750

// 2f. Hitung total hemat
let totalHemat = hargaAsli - hargaDiskon;
// 12.500.000 - 10.625.000 = 1.875.000

// LANGKAH 3 (OUTPUT): Tampilkan struk
console.log("\n" + "═".repeat(42));
console.log("         🧾 STRUK PEMBAYARAN");
console.log("═".repeat(42));
console.log(`Produk       : ${namaProduct}`);
console.log(`Harga asli   : Rp ${hargaAsli.toLocaleString("id-ID")}`);
console.log(`Diskon ${persenDiskon}%   : -Rp ${nominalDiskon.toLocaleString("id-ID")}`);
console.log(`Harga diskon : Rp ${hargaDiskon.toLocaleString("id-ID")}`);
console.log(`Jumlah       : ${jumlahBeli}`);
console.log("─".repeat(42));
console.log(`Subtotal     : Rp ${subtotal.toLocaleString("id-ID")}`);
console.log(`PPN (11%)    : Rp ${ppn.toLocaleString("id-ID")}`);
console.log("═".repeat(42));
console.log(`TOTAL BAYAR  : Rp ${totalAkhir.toLocaleString("id-ID")}`);
console.log("═".repeat(42));
console.log(`💰 Anda hemat: Rp ${totalHemat.toLocaleString("id-ID")}`);


// ============================================================
// 🎯 KASUS 5: MENGHITUNG NILAI AKHIR MAHASISWA
// ============================================================
// Menghitung nilai akhir dengan bobot yang berbeda-beda.
// Rumus: NA = (Tugas×20%) + (UTS×30%) + (UAS×40%) + (Kehadiran×10%)

console.log("\n╔════════════════════════════════════╗");
console.log("║  🎯 KASUS 5: NILAI AKHIR KULIAH    ║");
console.log("╚════════════════════════════════════╝\n");

// LANGKAH 1 (INPUT): Data nilai mahasiswa
let namaMahasiswa = "Siti Aminah";
let mataKuliah = "Algoritma & Pemrograman";
let nilaiTugas = 85;         // Bobot 20%
let nilaiUTS = 78;           // Bobot 30%
let nilaiUAS = 90;           // Bobot 40%
let nilaiKehadiran = 95;     // Bobot 10%

console.log(`Mahasiswa   : ${namaMahasiswa}`);
console.log(`Mata Kuliah : ${mataKuliah}\n`);
console.log("Komponen Nilai:");
console.log(`  Tugas      : ${nilaiTugas}`);
console.log(`  UTS        : ${nilaiUTS}`);
console.log(`  UAS        : ${nilaiUAS}`);
console.log(`  Kehadiran  : ${nilaiKehadiran}`);

// LANGKAH 2 (PROSES): Hitung nilai akhir dengan bobot

// 2a. Hitung kontribusi setiap komponen
let bobotTugas = nilaiTugas * 0.20;          // 85 × 0.20 = 17
let bobotUTS = nilaiUTS * 0.30;              // 78 × 0.30 = 23.4
let bobotUAS = nilaiUAS * 0.40;              // 90 × 0.40 = 36
let bobotKehadiran = nilaiKehadiran * 0.10;  // 95 × 0.10 = 9.5

// 2b. Hitung Nilai Akhir (total semua bobot)
let nilaiAkhirMhs = bobotTugas + bobotUTS + bobotUAS + bobotKehadiran;
// 17 + 23.4 + 36 + 9.5 = 85.9

// 2c. Bulatkan ke 1 desimal
nilaiAkhirMhs = Math.round(nilaiAkhirMhs * 10) / 10;

// 2d. Tentukan huruf mutu (menggunakan operator ternary bertingkat)
let hurufMutu =
    nilaiAkhirMhs >= 85 ? "A" :
    nilaiAkhirMhs >= 80 ? "A-" :
    nilaiAkhirMhs >= 75 ? "B+" :
    nilaiAkhirMhs >= 70 ? "B" :
    nilaiAkhirMhs >= 65 ? "B-" :
    nilaiAkhirMhs >= 60 ? "C+" :
    nilaiAkhirMhs >= 55 ? "C" :
    nilaiAkhirMhs >= 40 ? "D" :
    "E";

// 2e. Tentukan angka mutu
let angkaMutu =
    hurufMutu === "A"  ? 4.0 :
    hurufMutu === "A-" ? 3.7 :
    hurufMutu === "B+" ? 3.3 :
    hurufMutu === "B"  ? 3.0 :
    hurufMutu === "B-" ? 2.7 :
    hurufMutu === "C+" ? 2.3 :
    hurufMutu === "C"  ? 2.0 :
    hurufMutu === "D"  ? 1.0 :
    0.0;

// LANGKAH 3 (OUTPUT): Tampilkan hasil
console.log("\n" + "═".repeat(42));
console.log("      📊 KARTU HASIL STUDI (KHS)");
console.log("═".repeat(42));
console.log(`Mahasiswa    : ${namaMahasiswa}`);
console.log(`Mata Kuliah  : ${mataKuliah}`);
console.log("─".repeat(42));
console.log("Rincian Perhitungan:");
console.log(`  Tugas     : ${nilaiTugas} × 20% = ${bobotTugas}`);
console.log(`  UTS       : ${nilaiUTS} × 30% = ${bobotUTS}`);
console.log(`  UAS       : ${nilaiUAS} × 40% = ${bobotUAS}`);
console.log(`  Kehadiran : ${nilaiKehadiran} × 10% = ${bobotKehadiran}`);
console.log("─".repeat(42));
console.log(`NILAI AKHIR  : ${nilaiAkhirMhs}`);
console.log(`HURUF MUTU   : ${hurufMutu}`);
console.log(`ANGKA MUTU   : ${angkaMutu}`);
console.log("═".repeat(42));
console.log(`Status: ${nilaiAkhirMhs >= 55 ? "LULUS ✅" : "TIDAK LULUS ❌"}`);


// ============================================================
// 🎯 KASUS 6: SIMULASI ATM — TRANSFER UANG
// ============================================================
// Simulasi proses transfer uang yang berjalan secara sekuensial.
// Setiap langkah HARUS berurutan karena bergantung langkah sebelumnya.

console.log("\n╔════════════════════════════════════╗");
console.log("║   🎯 KASUS 6: SIMULASI ATM         ║");
console.log("╚════════════════════════════════════╝\n");

// LANGKAH 1: Data awal rekening
let saldoPengirim = 5000000;                 // Saldo Andi: Rp 5.000.000
let saldoPenerima = 2000000;                 // Saldo Budi: Rp 2.000.000
let namaPengirim = "Andi";
let namaPenerima = "Budi";
let jumlahTransfer = 1500000;                // Transfer Rp 1.500.000
let biayaAdmin = 6500;                       // Biaya admin Rp 6.500

console.log("📋 DATA SEBELUM TRANSFER:");
console.log(`Saldo ${namaPengirim}: Rp ${saldoPengirim.toLocaleString("id-ID")}`);
console.log(`Saldo ${namaPenerima}: Rp ${saldoPenerima.toLocaleString("id-ID")}`);
console.log(`\nJumlah transfer: Rp ${jumlahTransfer.toLocaleString("id-ID")}`);
console.log(`Biaya admin: Rp ${biayaAdmin.toLocaleString("id-ID")}`);

// LANGKAH 2: Hitung total potongan dari pengirim
let totalPotongan = jumlahTransfer + biayaAdmin;
// 1.500.000 + 6.500 = 1.506.500
console.log(`\nTotal potongan: Rp ${totalPotongan.toLocaleString("id-ID")}`);

// LANGKAH 3: Cek kecukupan saldo (menggunakan ekspresi boolean)
let saldoCukup = saldoPengirim >= totalPotongan;
// 5.000.000 >= 1.506.500 → true
console.log(`Saldo cukup? ${saldoCukup}`);

// LANGKAH 4: Proses transfer (sekuensial — urutan sangat penting!)
// 4a. Kurangi saldo pengirim
saldoPengirim = saldoPengirim - totalPotongan;
// 5.000.000 - 1.506.500 = 3.493.500

// 4b. Tambah saldo penerima
saldoPenerima = saldoPenerima + jumlahTransfer;
// 2.000.000 + 1.500.000 = 3.500.000

// ⚠️ PERHATIKAN URUTAN SEKUENSIAL:
// Saldo pengirim HARUS dikurangi sebelum saldo penerima ditambah.
// Jika dibalik, bisa terjadi inkonsistensi data!

// LANGKAH 5: Tampilkan bukti transfer
console.log("\n" + "═".repeat(42));
console.log("     🏧 BUKTI TRANSFER BERHASIL");
console.log("═".repeat(42));
console.log(`Dari     : ${namaPengirim}`);
console.log(`Ke       : ${namaPenerima}`);
console.log(`Nominal  : Rp ${jumlahTransfer.toLocaleString("id-ID")}`);
console.log(`Admin    : Rp ${biayaAdmin.toLocaleString("id-ID")}`);
console.log("─".repeat(42));
console.log("📋 SALDO SETELAH TRANSFER:");
console.log(`Saldo ${namaPengirim}: Rp ${saldoPengirim.toLocaleString("id-ID")}`);
console.log(`Saldo ${namaPenerima}: Rp ${saldoPenerima.toLocaleString("id-ID")}`);
console.log("═".repeat(42));


// ============================================================
// 📝 KESIMPULAN MATERI 5 (KESIMPULAN AKHIR):
// ============================================================
//
// 🔑 RANGKUMAN PEMROGRAMAN SEKUENSIAL:
//
// 1. SEKUENSIAL = kode berjalan BERURUTAN dari ATAS ke BAWAH.
//    Tidak ada lompatan, tidak ada pengulangan.
//
// 2. POLA IPO (Input-Proses-Output) adalah inti dari
//    pemrograman sekuensial:
//    - INPUT   → menerima/menyiapkan data
//    - PROSES  → mengolah data dengan operator
//    - OUTPUT  → menampilkan hasil
//
// 3. URUTAN SANGAT PENTING karena:
//    - Variabel harus dideklarasikan sebelum digunakan
//    - Setiap baris bisa bergantung pada hasil baris sebelumnya
//    - Mengubah urutan bisa mengubah hasil atau menyebabkan error
//
// 4. TIPS MENULIS KODE SEKUENSIAL YANG BAIK:
//    - Gunakan nama variabel yang DESKRIPTIF dan JELAS
//    - Tambahkan KOMENTAR untuk menjelaskan logika
//    - Pisahkan kode menjadi bagian INPUT, PROSES, OUTPUT
//    - Gunakan const untuk nilai yang tidak berubah
//    - Gunakan let untuk nilai yang bisa berubah
//    - Lakukan KONVERSI TIPE DATA sebelum operasi matematika
//
// 5. SETELAH MENGUASAI SEKUENSIAL, langkah selanjutnya:
//    - Percabangan (if-else, switch) → membuat keputusan
//    - Perulangan (for, while) → mengulang proses
//    - Fungsi → mengelompokkan kode yang bisa dipakai ulang
//
// ============================================================
// 🎉 Selamat! Kamu telah menyelesaikan materi Sekuensial JavaScript!
// ============================================================
