function uçanFistik(x, y) {
    const fistik = document.createElement("div");
    fistik.textContent = "🥜";
    fistik.classList.add("fistik-anim");
    fistik.style.left = `${x}px`;
    fistik.style.top = `${y}px`;
    document.body.appendChild(fistik);
    setTimeout(() => fistik.remove(), 2000);
  }
  
  document.querySelectorAll(".bardak-kutu").forEach(bardak => {
    bardak.addEventListener("click", () => {
      const rect = bardak.getBoundingClientRect();
      const x = rect.left + Math.random() * rect.width;
      const y = rect.top + Math.random() * rect.height;
      uçanFistik(x, y);
    });
  });
  
  
  
  document.querySelectorAll('.bardak-kutu').forEach(fiyat => {
    fiyat.addEventListener('click', () => {
      fiyat.classList.remove('clicked'); // eski animasyonu sıfırla
      void fiyat.offsetWidth; // yeniden başlatma hilesi
      fiyat.classList.add('clicked');
    });
  });
  




  let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Her 5 saniyede bir geçiş
setInterval(nextSlide, 5000);



// Product
function toggleFavorite(button) {
  button.classList.toggle('active');
}



// Attention
const slider = document.getElementById('slider');
const totalSlides = slider.children.length;
const counter = document.getElementById('counter');
let currentIndex = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  counter.textContent = `${currentIndex + 1} / ${totalSlides}`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
}