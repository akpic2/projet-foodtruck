(function(){
    const header = document.querySelector('header');
    const onScroll = () => {
        if(window.scrollY > 5) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    };
    document.addEventListener('scroll', onScroll, {passive:true});
    
    onScroll();
})();

const histoireWrapper = document.querySelector('.acceuil_histoire_wrapper');
let isPaused = false;

window.addEventListener('scroll', () => {
    const top = histoireWrapper.offsetTop;
    const bottom = top + histoireWrapper.offsetHeight;
    const scroll = window.scrollY + window.innerHeight / 2;

    if (!isPaused && scroll >= top && scroll <= bottom) {
        isPaused = true;
        document.body.classList.add('stop-scroll');
        setTimeout(() => {
            document.body.classList.remove('stop-scroll');
            isPaused = false;
        }, 500); // 500ms pause
    }
});
document.addEventListener("DOMContentLoaded", () => {
  /* ===============================
    ANIMATION FORMULES (CARDS)
  =============================== */
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease";

    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-8px) scale(1.03)";
      card.style.boxShadow = "0 15px 30px rgba(255, 140, 0, 0.35)";
      card.style.borderColor = "var(--primary-color)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
      card.style.boxShadow = "none";
      card.style.borderColor = "#444";
    });
  });

  /* ===============================
    ANIMATION BURGERS (MENU ITEM)
  =============================== */
  const burgers = document.querySelectorAll(".menu-item");

  burgers.forEach(item => {
    item.style.transition = "transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease";

    item.addEventListener("mouseenter", () => {
      item.style.transform = "translateX(8px)";
      item.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.4)";
      item.style.backgroundColor = "#666";
    });

    item.addEventListener("mouseleave", () => {
      item.style.transform = "translateX(0)";
      item.style.boxShadow = "none";
      item.style.backgroundColor = "#555";
    });
  });
});

/* Animation apparition img histoire du haut */
const foodtruckImg = document.querySelector('.acceuil_foodtruck');
const histoireSection = document.querySelector('.acceuil_histoire_img');

window.addEventListener('scroll', () => {
    const sectionRect = histoireSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (sectionRect.top < windowHeight * 1.05 && sectionRect.bottom > 0) {
        foodtruckImg.classList.add('visible');
    } else {
        foodtruckImg.classList.remove('visible');
    }
});

// Animation apparition texte histoire depuis la droite
const histoireTexte = document.querySelector('.acceuil_histoire_texte');
const histoireTextSection = document.querySelector('section');

window.addEventListener('scroll', () => {
    const sectionRect = histoireTextSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (sectionRect.top < windowHeight * 0.8 && sectionRect.bottom > 0) {
        histoireTexte.classList.add('visible');
    } else {
        histoireTexte.classList.remove('visible');
    }
});
