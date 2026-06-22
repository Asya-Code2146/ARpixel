// Efek Teks Mengetik Otomatis (Auto Typing Effect) untuk Hero Section
document.addEventListener("DOMContentLoaded", () => {
    const words = ["WEBSITE", "CODING", "DEBUGGING", "UI/UX DESIGN"];
    let i = 0;
    let timer;

    function typingEffect() {
        const word = words[i].split("");
        const loopTyping = () => {
            if (word.length > 0) {
                document.getElementById('typing-text').innerHTML += word.shift();
            } else {
                setTimeout(deletingEffect, 2000);
                return false;
            }
            timer = setTimeout(loopTyping, 150);
        };
        loopTyping();
    }

    function deletingEffect() {
        const word = words[i].split("");
        const loopDeleting = () => {
            if (word.length > 0) {
                word.pop();
                document.getElementById('typing-text').innerHTML = word.join("");
            } else {
                if (words.length > i + 1) {
                    i++;
                } else {
                    i = 0;
                }
                setTimeout(typingEffect, 500);
                return false;
            }
            timer = setTimeout(loopDeleting, 100);
        };
        loopDeleting();
    }

    // Eksekusi fungsi jika elemen target ditemukan di halaman
    if(document.getElementById('typing-text')) {
        typingEffect();
    }

    /* ==========================================================================
       TAMBAHAN: Logika Hamburger Menu (Garis Tiga) Aktif
       ========================================================================== */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // Jika menu sedang terbuka, kita sembunyikan lagi
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                // Jika menu sedang sembunyi, kita tampilkan secara vertikal di bawah navbar
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'rgba(4, 6, 13, 0.95)';
                navLinks.style.padding = '20px';
                navLinks.style.gap = '1.5rem';
                navLinks.style.borderBottom = '1px solid rgba(0, 240, 255, 0.08)';
            }
        });
    }
});