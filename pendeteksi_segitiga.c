#include <stdio.h>

// Program untuk menentukan jenis segitiga
// Sesuai dengan aturan:
// 1. Jika tiga panjang sisi sama, maka segitiga tersebut adalah sama sisi
// 2. Jika hanya dua panjang sisi sama, maka segitiga tersebut sama kaki  
// 3. Jika ketiga sisi berbeda, maka segitiga tersebut adalah segitiga sembarang

int main() {
    int a, b, c;
    
    printf("Program untuk menentukan jenis segitiga\n");
    printf("=======================================\n\n");
    
    // Input panjang sisi segitiga
    printf("Masukkan panjang sisi a: ");
    scanf("%d", &a);
    
    printf("Masukkan panjang sisi b: ");
    scanf("%d", &b);
    
    printf("Masukkan panjang sisi c: ");
    scanf("%d", &c);
    
    printf("\n");
    printf("Panjang sisi segitiga:\n");
    printf("a = %d\n", a);
    printf("b = %d\n", b);
    printf("c = %d\n", c);
    printf("\n");
    
    // Cek apakah input valid (sisi positif)
    if (a <= 0 || b <= 0 || c <= 0) {
        printf("Error: Semua sisi harus bernilai positif!\n");
        return 1;
    }
    
    // Cek apakah dapat membentuk segitiga (ketidaksamaan segitiga)
    if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
        printf("Error: Sisi-sisi tersebut tidak dapat membentuk segitiga!\n");
        return 1;
    }
    
    // Tentukan jenis segitiga berdasarkan aturan
    if (a == b && b == c) {
        // Ketiga sisi sama panjang
        printf("Jenis segitiga: SAMA SISI\n");
        printf("Keterangan: Segitiga dengan ketiga sisi sama panjang\n");
    }
    else if (a == b || b == c || a == c) {
        // Dua sisi sama panjang
        printf("Jenis segitiga: SAMA KAKI\n");
        printf("Keterangan: Segitiga dengan dua sisi sama panjang\n");
    }
    else {
        // Ketiga sisi berbeda panjang
        printf("Jenis segitiga: SEMBARANG\n");
        printf("Keterangan: Segitiga dengan ketiga sisi berbeda panjang\n");
    }
    
    return 0;
}