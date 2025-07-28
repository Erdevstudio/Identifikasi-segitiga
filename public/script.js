document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('triangleForm');
    const resultContainer = document.getElementById('resultContainer');
    const errorContainer = document.getElementById('errorContainer');
    const resultContent = document.getElementById('resultContent');
    const errorMessage = document.getElementById('errorMessage');

    // Input elements
    const sideA = document.getElementById('sideA');
    const sideB = document.getElementById('sideB');
    const sideC = document.getElementById('sideC');

    // Add input validation on blur
    [sideA, sideB, sideC].forEach(input => {
        input.addEventListener('blur', validateInput);
        input.addEventListener('input', clearValidation);
    });

    function validateInput(event) {
        const input = event.target;
        const value = parseFloat(input.value);
        
        if (input.value && (isNaN(value) || value <= 0)) {
            input.classList.add('is-invalid');
            showError('Semua sisi harus berupa angka positif yang valid');
        } else {
            input.classList.remove('is-invalid');
            hideError();
        }
    }

    function clearValidation(event) {
        event.target.classList.remove('is-invalid');
        hideError();
    }

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Clear previous results and errors
        hideResult();
        hideError();
        
        // Get input values
        const sideAValue = sideA.value.trim();
        const sideBValue = sideB.value.trim();
        const sideCValue = sideC.value.trim();
        
        // Client-side validation
        if (!sideAValue || !sideBValue || !sideCValue) {
            showError('Semua sisi segitiga harus diisi');
            return;
        }

        // Disable form and show loading
        setFormLoading(true);
        
        try {
            const response = await fetch('/api/classify-triangle', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sideA: sideAValue,
                    sideB: sideBValue,
                    sideC: sideCValue
                })
            });
            
            const data = await response.json();
            
            if (data.success) {
                showResult(data);
            } else {
                showError(data.error);
            }
        } catch (error) {
            console.error('Error:', error);
            showError('Terjadi kesalahan saat memproses data. Silakan coba lagi.');
        } finally {
            setFormLoading(false);
        }
    });

    function showResult(data) {
        const typeClass = getTriangleTypeClass(data.type);
        
        resultContent.innerHTML = `
            <div class="result-details">
                <div class="triangle-type ${typeClass}">
                    <i class="fas fa-shapes me-2"></i>
                    ${data.type}
                </div>
                <p class="lead mb-4">${data.description}</p>
                
                <div class="sides-display">
                    <h6 class="mb-3"><i class="fas fa-ruler me-2"></i>Panjang Sisi:</h6>
                    <div class="row g-3">
                        <div class="col-4">
                            <div class="side-value">Sisi A: ${data.sides.a}</div>
                        </div>
                        <div class="col-4">
                            <div class="side-value">Sisi B: ${data.sides.b}</div>
                        </div>
                        <div class="col-4">
                            <div class="side-value">Sisi C: ${data.sides.c}</div>
                        </div>
                    </div>
                </div>
                
                <div class="mt-4">
                    <button class="btn btn-outline-primary" onclick="resetForm()">
                        <i class="fas fa-redo me-2"></i>
                        Hitung Lagi
                    </button>
                </div>
            </div>
        `;
        
        resultContainer.classList.remove('d-none');
        
        // Scroll to result
        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorContainer.classList.remove('d-none');
        
        // Scroll to error
        errorContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Auto-hide error after 5 seconds
        setTimeout(hideError, 5000);
    }

    function hideResult() {
        resultContainer.classList.add('d-none');
    }

    function hideError() {
        errorContainer.classList.add('d-none');
    }

    function setFormLoading(loading) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const inputs = form.querySelectorAll('input');
        
        if (loading) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <span class="spinner-border spinner-border-sm me-2" role="status"></span>
                Menganalisis...
            `;
            inputs.forEach(input => input.disabled = true);
        } else {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `
                <i class="fas fa-search me-2"></i>
                Identifikasi Segitiga
            `;
            inputs.forEach(input => input.disabled = false);
        }
    }

    function getTriangleTypeClass(type) {
        if (type.includes('Sama Sisi') || type.includes('Equilateral')) {
            return 'equilateral';
        } else if (type.includes('Sama Kaki') || type.includes('Isosceles')) {
            return 'isosceles';
        } else {
            return 'scalene';
        }
    }

    // Global function for reset button
    window.resetForm = function() {
        form.reset();
        hideResult();
        hideError();
        
        // Clear validation classes
        [sideA, sideB, sideC].forEach(input => {
            input.classList.remove('is-invalid');
        });
        
        // Focus on first input
        sideA.focus();
        
        // Scroll to form
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl + Enter to submit form
        if (e.ctrlKey && e.key === 'Enter') {
            form.dispatchEvent(new Event('submit'));
        }
        
        // Escape to reset form
        if (e.key === 'Escape') {
            resetForm();
        }
    });

    // Add number formatting on input
    [sideA, sideB, sideC].forEach(input => {
        input.addEventListener('input', function(e) {
            let value = e.target.value;
            
            // Remove any non-numeric characters except decimal point
            value = value.replace(/[^0-9.]/g, '');
            
            // Ensure only one decimal point
            const parts = value.split('.');
            if (parts.length > 2) {
                value = parts[0] + '.' + parts.slice(1).join('');
            }
            
            e.target.value = value;
        });
    });

    // Initialize tooltips if Bootstrap tooltips are available
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

    // Focus on first input when page loads
    sideA.focus();
});
