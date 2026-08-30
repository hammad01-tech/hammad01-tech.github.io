// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

// Reveal sections as they enter the viewport
const revealItems = document.querySelectorAll(
  ".service-card, .case-study, .timeline-item, .approach-row, .stat"
);

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    obs.unobserve(entry.target);
  });
}, { threshold: 0.12 });

revealItems.forEach(item => {
  item.style.opacity = "0";
  item.style.transform = "translateY(20px)";
  item.style.transition = "opacity .7s ease, transform .7s ease";
  observer.observe(item);
});

const style = document.createElement("style");
style.textContent = ".visible{opacity:1!important;transform:translateY(0)!important}";
document.head.appendChild(style);

