// Add any interactive animations or effects here
document.addEventListener("DOMContentLoaded", function () {
    // Example: Add a scroll animation
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(50px)";
    });
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    });
  
    sections.forEach((section) => observer.observe(section));
  });