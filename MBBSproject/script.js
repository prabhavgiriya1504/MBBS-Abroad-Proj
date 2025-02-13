
        // Form Submission
document.getElementById('leadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully! 🎉');
});

// Accordion FAQ
let acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
}

// Back to Top Button
let backToTop = document.getElementById("back-to-top");
window.onscroll = function() {
    if (document.documentElement.scrollTop > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};
backToTop.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});



    