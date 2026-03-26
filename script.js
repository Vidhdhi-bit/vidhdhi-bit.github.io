let currentTestimonial = 0;
const slides = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".dot");

function nextTestimonial() {
    if (slides.length === 0) return;

    currentTestimonial = (currentTestimonial + 1) % slides.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    if (slides.length === 0) return;

    currentTestimonial =
        (currentTestimonial - 1 + slides.length) % slides.length;
    showTestimonial(currentTestimonial);
}

function showTestimonial(index) {
    if (slides.length === 0) return;

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentTestimonial = index;
}

// AUTO SLIDE (SAFE)
if (slides.length > 0) {
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % slides.length;
        showTestimonial(currentTestimonial);
    }, 5000);
}
