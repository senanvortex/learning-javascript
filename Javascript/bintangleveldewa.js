function generatePattern() {
    const n = 8; // Tinggi setengah dari pola (atas atau bawah)
    let pattern = "";

    // Bagian atas pola
    for (let i = 1; i <= n; i++) {
        pattern += " ".repeat(n - i) + "*".repeat(2 * i - 1) + "\n";
    }

    // Bagian bawah pola
    for (let i = n - 1; i >= 1; i--) {
        pattern += " ".repeat(n - i) + "*".repeat(2 * i - 1) + "\n";
    }

    return pattern;
}

console.log(generatePattern());
