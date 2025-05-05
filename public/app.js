function uçanFistik(x, y) {
  const fistik = document.createElement("div");
  fistik.textContent = "🥜";
  fistik.classList.add("fistik-anim");
  fistik.style.left = `${x}px`;
  fistik.style.top = `${y}px`;
  document.body.appendChild(fistik);
  setTimeout(() => fistik.remove(), 2000);
}

document.querySelectorAll(".bardak-kutu").forEach((bardak) => {
  bardak.addEventListener("click", () => {
    const rect = bardak.getBoundingClientRect();
    const x = rect.left + Math.random() * rect.width;
    const y = rect.top + Math.random() * rect.height;
    uçanFistik(x, y);
  });
});

document.querySelectorAll(".bardak-kutu").forEach((fiyat) => {
  fiyat.addEventListener("click", () => {
    fiyat.classList.remove("clicked"); // eski animasyonu sıfırla
    void fiyat.offsetWidth; // yeniden başlatma hilesi
    fiyat.classList.add("clicked");
  });
});




// Slider
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  // Başlangıç için ilk slide'ı göster
  showSlide(current);

  // Her 4 saniyede bir slide değiştir
  setInterval(nextSlide, 4000);
});





// Hamburger
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  // Dışarı tıklanınca menüyü kapat
  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      mobileMenu.classList.remove("active");
    }
  });
});
