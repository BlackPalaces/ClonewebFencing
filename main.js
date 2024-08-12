document.addEventListener("DOMContentLoaded", function() {
    const words = document.querySelectorAll(".words-wrapper b");
    let currentIndex = 0;

    setInterval(() => {
        words[currentIndex].classList.remove("active");
        words[currentIndex].classList.add("hidden");

        currentIndex = (currentIndex + 1) % words.length;

        words[currentIndex].classList.remove("hidden");
        words[currentIndex].classList.add("active");
    }, 2000); // ปรับเวลาตามที่คุณต้องการ (2000ms = 2วินาที)
});
