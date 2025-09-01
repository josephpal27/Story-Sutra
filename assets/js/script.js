// Top Banner Animatons
gsap.to([".banner-left h3", ".banner-left h1", ".banner-left p"], {
    opacity: 1,
    y: 40,
    duration: 1,
    ease: "power2.out", 
    stagger: 0.3
});
gsap.to(".banner-left img", {
    opacity: 1,
    scale: 1,
    duration: 1.5,
    ease: "power2.out",
});
gsap.to(".banner-pill-img img", {
    scale: 1.07,
    duration: 5,
});
gsap.to(".banner-pill-img", {
    opacity: 1,
    duration: 1,
});
gsap.to(["#banner-rounded-img-1","#banner-rounded-img-2"], {
    opacity: 1,
    duration: 1,
});

// Banner Rounded Images Movement Function
const body = document.querySelector('body');

// Select only the rounded images
const roundedImages = document.querySelectorAll(
  '.banner-right .banner-rounded-img img'
);

body.addEventListener('mousemove', (e) => {
  const rect = body.getBoundingClientRect();
  const mouseX = e.clientX - rect.left; // Mouse X relative to the banner content
  const mouseY = e.clientY - rect.top;  // Mouse Y relative to the banner content

  // Normalize mouse positions to range between 1 and -1
  const xOffset = ((mouseX / rect.width) - 0.5) * -12; // Scale movement: 6px to -6px
  const yOffset = ((mouseY / rect.height) - 0.5) * -6; // Scale movement: 3px to -3px

  // Apply the transformation to each rounded image
  roundedImages.forEach((img) => {
    img.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
  });
});

// --------------------------------------------------------------------------------------------------------------------------------

// Couple Section Animations
// gsap.to(".couple #couple-desc-1", {

//     scrollTrigger: {
//         trigger: ".couple",
//         scroller: 'body',
//         markers: false,
//         start: "top 70%",
//         end: "top -30%",
//         scrub: 2,
//     },

//     left: "-50rem",
//     duration: 1,
// })

if (window.innerWidth >= 768) {
    gsap.to(".couple #couple-desc-1", {
        scrollTrigger: {
            trigger: ".couple",
            scroller: 'body',
            markers: false,
            start: "top 70%",
            end: "top -30%",
            scrub: 2,
        },
        left: "-50rem",
        duration: 1,
    });
}

gsap.to(".couple #couple-desc-2", {

    scrollTrigger: {
        trigger: ".couple",
        scroller: 'body',
        markers: false,
        start: "top 70%",
        end: "top -30%",
        scrub: 2,
    },

    right: "-50rem",
    duration: 1,
})

gsap.to(".couple #bride-img", {

    scrollTrigger: {
        trigger: ".couple",
        scroller: 'body',
        markers: false,
        start: "top 70%",
        end: "top -30%",
        scrub: 2,
    },

    left: "32%",
    duration: 1,
})

gsap.to(".couple #groom-img", {

    scrollTrigger: {
        trigger: ".couple",
        scroller: 'body',
        markers: false,
        start: "top 70%",
        end: "top -30%",
        scrub: 2,
    },

    right: "31%",
    duration: 1,
})

gsap.to(".couple #left-ball", {

    scrollTrigger: {
        trigger: ".couple",
        scroller: 'body',
        markers: false,
        start: "top 70%",
        end: "top -30%",
        scrub: 2,
    },

    left: "95%",
    duration: 1,
})

gsap.to(".couple #right-ball", {

    scrollTrigger: {
        trigger: ".couple",
        scroller: 'body',
        markers: false,
        start: "top 70%",
        end: "top -30%",
        scrub: 2,
    },

    right: "95%",
    duration: 1,
})

// ------------------------------------------------------------------------------------------------------------------------------------

// Our Story Section Animations
gsap.to("#floating-dots", {
    y: -14,      
    x: -10,      
    duration: 1,      
    yoyo: true,       
    repeat: -1,      
    ease: "power1.inOut"
  });

// ------------------------------------------------------------------------------------------------------------------------------------

// Slider Card Overlay Hover Effect using Js
let sliderCard = document.querySelectorAll('.slider .slider-card');
let sliderOverlay = document.querySelectorAll('.slider .card-overlay');

sliderCard.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        sliderOverlay[index].style.scale = '1';
        sliderOverlay[index].style.opacity = '1';
    });

    card.addEventListener('mouseleave', () => {
        sliderOverlay[index].style.scale = '0';
        sliderOverlay[index].style.opacity = '0';
    });
});


// Slider Card Overlay Hover Effect using GSAP


gsap.to("#slide-1", {
    y: 40,            
    duration: 2,      
    yoyo: true,       
    repeat: -1,      
    ease: "power1.inOut"
});
gsap.to("#slide-2", {
    y: -40,                       
    duration: 2,      
    yoyo: true,       
    repeat: -1,      
    ease: "power1.inOut"
});


// ------------------------------------------------------------------------------------------------------------------------------------

// Contact Us Section Select Box Functionality
let select = document.querySelector('.contact .input-div select');
select.addEventListener('click', () => {
    select.classList.add('active');
})

// ------------------------------------------------------------------------------------------------------------------------------------

// Blog Cards Hover Effect using Js
let blogCard = document.querySelectorAll('.blog-card');
let blogCardImg = document.querySelectorAll('.blog-card img');

blogCard.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        blogCardImg[index].style.scale = '1.15';
        blogCardImg[index].style.filter = 'grayscale(100%)';
    });

    card.addEventListener('mouseleave', () => {
        blogCardImg[index].style.scale = '1';
        blogCardImg[index].style.filter = 'grayscale(0)';
    });
});


// ------------------------------------------------------------------------------------------------------------------------------------

// Functionality For Back to Top Btn
let backToTopButton = document.querySelector('.back-to-top');
window.addEventListener("scroll", () => {
if (window.scrollY > 200) {
  backToTopButton.classList.add("show");
} else {
  backToTopButton.classList.remove("show");
}
});
backToTopButton.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default jump
  lenis.scrollTo(0); // Smoothly scroll to the top
});


// ------------------------------------------------------------------------------------------------------------------------------------

// Footer Links Smooth Scroll
let footerLeftLinks = document.querySelectorAll('.foot-left a');

footerLeftLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default navigation behavior
    
    const targetId = link.getAttribute('href'); // Get the href (e.g., #section)
    const targetElement = document.querySelector(targetId); // Find the target element

    if (targetElement) {
      // Scroll to the target section using Lenis
      lenis.scrollTo(targetElement);
    }
  });
});



