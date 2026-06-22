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
});