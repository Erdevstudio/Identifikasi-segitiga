const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Triangle classification function
function classifyTriangle(a, b, c) {
    // Convert to numbers and validate
    const side1 = parseFloat(a);
    const side2 = parseFloat(b);
    const side3 = parseFloat(c);

    // Check if inputs are valid numbers
    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
        return {
            success: false,
            error: 'Semua input harus berupa angka yang valid'
        };
    }

    // Check if all sides are positive
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
        return {
            success: false,
            error: 'Semua sisi segitiga harus bernilai positif'
        };
    }

    // Check triangle inequality theorem
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
        return {
            success: false,
            error: 'Nilai yang dimasukkan tidak dapat membentuk segitiga yang valid'
        };
    }

    // Classify triangle type
    let type, description;
    
    if (side1 === side2 && side2 === side3) {
        type = 'Sama Sisi (Equilateral)';
        description = 'Segitiga dengan ketiga sisi sama panjang';
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        type = 'Sama Kaki (Isosceles)';
        description = 'Segitiga dengan dua sisi sama panjang';
    } else {
        type = 'Sembarang (Scalene)';
        description = 'Segitiga dengan ketiga sisi berbeda panjang';
    }

    return {
        success: true,
        type: type,
        description: description,
        sides: {
            a: side1,
            b: side2,
            c: side3
        }
    };
}

// API endpoint for triangle classification
app.post('/api/classify-triangle', (req, res) => {
    const { sideA, sideB, sideC } = req.body;
    
    if (!sideA || !sideB || !sideC) {
        return res.status(400).json({
            success: false,
            error: 'Semua sisi segitiga harus diisi'
        });
    }

    const result = classifyTriangle(sideA, sideB, sideC);
    
    if (!result.success) {
        return res.status(400).json(result);
    }
    
    res.json(result);
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server berjalan di http://0.0.0.0:${PORT}`);
});
