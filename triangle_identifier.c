#include <stdio.h>
#include <stdlib.h>

// Fungsi untuk mengidentifikasi jenis segitiga
void identifikasiSegitiga(float a, float b, float c) {
    // Periksa apakah sisi-sisi membentuk segitiga yang valid
    if (a + b <= c || a + c <= b || b + c <= a) {
        printf("\n=== HASIL IDENTIFIKASI ===\n");
        printf("Error: Nilai yang dimasukkan tidak dapat membentuk segitiga yang valid!\n");
        printf("(Ketentuan: Jumlah dua sisi harus lebih besar dari sisi ketiga)\n");
        return;
    }
    
    // Identifikasi jenis segitiga
    printf("\n=== HASIL IDENTIFIKASI ===\n");
    printf("Panjang sisi: A = %.2f, B = %.2f, C = %.2f\n", a, b, c);
    printf("Status: Segitiga VALID ✓\n\n");
    
    if (a == b && b == c) {
        printf("Jenis Segitiga: SAMA SISI (Equilateral)\n");
        printf("Deskripsi: Segitiga dengan ketiga sisi sama panjang\n");
        printf("Ciri-ciri:\n");
        printf("  • Ketiga sisi sama panjang\n");
        printf("  • Ketiga sudut sama besar (60°)\n");
        printf("  • Simetris dan beraturan\n");
    }
    else if (a == b || b == c || a == c) {
        printf("Jenis Segitiga: SAMA KAKI (Isosceles)\n");
        printf("Deskripsi: Segitiga dengan dua sisi sama panjang\n");
        printf("Ciri-ciri:\n");
        printf("  • Dua sisi sama panjang\n");
        printf("  • Dua sudut sama besar\n");
        printf("  • Memiliki satu sumbu simetri\n");
    }
    else {
        printf("Jenis Segitiga: SEMBARANG (Scalene)\n");
        printf("Deskripsi: Segitiga dengan ketiga sisi berbeda panjang\n");
        printf("Ciri-ciri:\n");
        printf("  • Ketiga sisi berbeda panjang\n");
        printf("  • Ketiga sudut berbeda besar\n");
        printf("  • Tidak memiliki simetri\n");
    }
}

// Fungsi untuk validasi input
int validasiInput(float sisi) {
    if (sisi <= 0) {
        printf("Error: Panjang sisi harus bernilai positif!\n");
        return 0;
    }
    return 1;
}

// Fungsi untuk menampilkan header program
void tampilkanHeader() {
    printf("===============================================\n");
    printf("    PROGRAM IDENTIFIKASI JENIS SEGITIGA\n");
    printf("===============================================\n");
    printf("Program ini akan mengidentifikasi jenis segitiga\n");
    printf("berdasarkan panjang ketiga sisinya.\n\n");
    printf("Jenis-jenis segitiga:\n");
    printf("1. Sama Sisi (Equilateral)  : Ketiga sisi sama\n");
    printf("2. Sama Kaki (Isosceles)    : Dua sisi sama\n");
    printf("3. Sembarang (Scalene)      : Ketiga sisi berbeda\n");
    printf("===============================================\n\n");
}

// Fungsi untuk menampilkan menu pilihan
int tampilkanMenu() {
    int pilihan;
    printf("\n=== MENU UTAMA ===\n");
    printf("1. Identifikasi Segitiga Baru\n");
    printf("2. Keluar dari Program\n");
    printf("Pilihan Anda (1-2): ");
    
    if (scanf("%d", &pilihan) != 1) {
        // Membersihkan buffer input jika input tidak valid
        while (getchar() != '\n');
        return -1;
    }
    
    return pilihan;
}

// Fungsi utama
int main() {
    float sisiA, sisiB, sisiC;
    int pilihan;
    
    // Tampilkan header program
    tampilkanHeader();
    
    do {
        pilihan = tampilkanMenu();
        
        switch (pilihan) {
            case 1:
                printf("\n=== INPUT PANJANG SISI SEGITIGA ===\n");
                
                // Input sisi A
                do {
                    printf("Masukkan panjang sisi A: ");
                    if (scanf("%f", &sisiA) != 1) {
                        printf("Error: Input harus berupa angka!\n");
                        while (getchar() != '\n'); // Bersihkan buffer
                        sisiA = -1;
                    }
                } while (!validasiInput(sisiA));
                
                // Input sisi B
                do {
                    printf("Masukkan panjang sisi B: ");
                    if (scanf("%f", &sisiB) != 1) {
                        printf("Error: Input harus berupa angka!\n");
                        while (getchar() != '\n'); // Bersihkan buffer
                        sisiB = -1;
                    }
                } while (!validasiInput(sisiB));
                
                // Input sisi C
                do {
                    printf("Masukkan panjang sisi C: ");
                    if (scanf("%f", &sisiC) != 1) {
                        printf("Error: Input harus berupa angka!\n");
                        while (getchar() != '\n'); // Bersihkan buffer
                        sisiC = -1;
                    }
                } while (!validasiInput(sisiC));
                
                // Identifikasi jenis segitiga
                identifikasiSegitiga(sisiA, sisiB, sisiC);
                break;
                
            case 2:
                printf("\nTerima kasih telah menggunakan program ini!\n");
                printf("Program berakhir.\n");
                break;
                
            default:
                printf("\nError: Pilihan tidak valid! Silakan pilih 1 atau 2.\n");
                break;
        }
        
    } while (pilihan != 2);
    
    return 0;
}