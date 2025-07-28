# Program Identifikasi Jenis Segitiga (Bahasa C)

## Deskripsi
Program ini dibuat menggunakan bahasa pemrograman C untuk menentukan jenis segitiga berdasarkan panjang ketiga sisinya.

## Aturan Identifikasi
Program mengikuti aturan sebagai berikut:
1. **Sama Sisi**: Jika ketiga panjang sisi sama, maka segitiga tersebut adalah sama sisi
2. **Sama Kaki**: Jika hanya dua panjang sisi sama, maka segitiga tersebut sama kaki  
3. **Sembarang**: Jika ketiga sisi berbeda, maka segitiga tersebut adalah segitiga sembarang

## Cara Menggunakan

### 1. Kompilasi Program
```bash
gcc -o triangle_identifier triangle_identifier.c
```

### 2. Menjalankan Program
```bash
./triangle_identifier
```

### 3. Input Data
Program akan meminta input panjang ketiga sisi segitiga:
- Masukkan panjang sisi a
- Masukkan panjang sisi b  
- Masukkan panjang sisi c

## Contoh Penggunaan

### Contoh 1: Segitiga Sama Sisi
```
Input: a = 5, b = 5, c = 5
Output: Jenis segitiga: SAMA SISI
```

### Contoh 2: Segitiga Sama Kaki
```
Input: a = 5, b = 5, c = 8
Output: Jenis segitiga: SAMA KAKI
```

### Contoh 3: Segitiga Sembarang
```
Input: a = 3, b = 4, c = 5
Output: Jenis segitiga: SEMBARANG
```

### Contoh 4: Input Tidak Valid
```
Input: a = 1, b = 2, c = 5
Output: Error: Sisi-sisi tersebut tidak dapat membentuk segitiga!
```

## Validasi Input
Program melakukan validasi sebagai berikut:
1. **Nilai Positif**: Semua sisi harus bernilai positif (> 0)
2. **Ketidaksamaan Segitiga**: Jumlah dua sisi harus lebih besar dari sisi ketiga untuk membentuk segitiga yang valid

## Struktur Program
- Input menggunakan `scanf()` untuk membaca integer
- Validasi input untuk memastikan nilai valid
- Logika kondisional untuk menentukan jenis segitiga
- Output yang jelas dan informatif

## File Program
- `triangle_identifier.c` - Source code program utama
- `triangle_identifier` - File executable hasil kompilasi