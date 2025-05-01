const express = require('express');
const app = express();
const PORT = 3000;

// Static dosyalar için public klasörünü açıyoruz
app.use(express.static('public'));

// Basit bir API endpoint - test için
app.get('/api/fistiklar', (req, res) => {
    res.json([
        { isim: "Ali", miktar: 30 },
        { isim: "Ayşe", miktar: 50 }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server çalışıyor: http://localhost:${PORT}`);
});
