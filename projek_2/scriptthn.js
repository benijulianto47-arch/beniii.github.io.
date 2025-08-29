    const words = ["Selamat Ulang Tahun","Jangan Lupa Traktir Yahh"]; 
    let currentWordIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    const typedText = document.getElementById("typedText");
    const speed = 150; 
    const delayBetweenWords = 1000;

    function type() {
        const currentWord = words[currentWordIndex];

        if (isDeleting) {
            currentCharIndex--;
        } else {
            currentCharIndex++;
        }

        typedText.textContent = currentWord.substring(0, currentCharIndex);

        if (!isDeleting && currentCharIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, delayBetweenWords);
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            setTimeout(type, speed);
        } else {
            setTimeout(type, speed);
        }
    }

    type();

const hamburger = document.getElementById("hamburger");
const sideBar = document.getElementById("side-bar");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll(".side-bar .nav-link");

// Klik hamburger → buka sidebar & overlay, sembunyikan hamburger
hamburger.addEventListener("click", () => {
  sideBar.classList.add("active");
  overlay.classList.add("active");
  hamburger.classList.add("active"); // sembunyikan hamburger
});

// Klik overlay → tutup sidebar & overlay, tampilkan hamburger
overlay.addEventListener("click", () => {
  sideBar.classList.remove("active");
  overlay.classList.remove("active");
  hamburger.classList.remove("active");
});

// Klik salah satu item → tutup sidebar & overlay, tampilkan hamburger
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    sideBar.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

