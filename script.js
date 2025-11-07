gsap.registerPlugin(ScrollTrigger);

gsap.to(".ek", {
  duration: 3,
  scrollTrigger: {
    trigger: ".ek",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
    pinSpacing: false
  },
});

gsap.to(".do", {
  duration: 3,
  scrollTrigger: {
    trigger: ".do",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
    pinSpacing: false
  },
});

gsap.to(".tin", {
  duration: 3,
  scrollTrigger: {
    trigger: ".tin",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
    pinSpacing: false
  },
});

gsap.to(".char", {
  duration: 3,
  scrollTrigger: {
    trigger: ".char",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
    pinSpacing: false
  },
});

gsap.to(".paanch", {
  duration: 3,
  scrollTrigger: {
    trigger: ".paanch",
    start: "top top",
    end: "+=60%",
    scrub: true,
    pin: true,
    pinSpacing: false
  },
});



gsap.registerPlugin(SplitText);

// wait until all fonts are loaded
document.fonts.ready.then(() => {

  gsap.set(".animation-section h1", { opacity: 1 });

  let split = SplitText.create("#heading", { type: "chars" });

  gsap.from(split.chars, {
    y: 20,
    autoAlpha: 0,
    stagger: 0.05
  });

});

const lines = gsap.utils.toArray("#heading2")
gsap.from(lines, {
      duration: 3,
      yPercent: 150,
      ease: "power4.out",
      stagger: 0.2
});




const scrollElements = gsap.utils.toArray(".scroll-up");

scrollElements.forEach((el) => {
  gsap.from(el, {
    yPercent: 20,
    duration: 2,
    ease: "power4.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: el,
      start: "top 90%",   
      toggleActions: "play none none reverse", // play on scroll down, reverse on scroll up
    },
  });
});




  const text = document.querySelector(".about-text");
  const words = text.textContent.split(" ");

  // Split text into spans for per-word animation
  text.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(" ");

  gsap.set(".word", { color: "#999" }); // start faded

  gsap.to(".word", {
    color: "#174e37ff", // darker color when active
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".about-text",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    }
  });



  // faq

  let questionButton = document.querySelectorAll('.question button');


questionButton.forEach((elem)=>{
  elem.addEventListener("click",()=>{
    elem.classList.toggle("show");
  })
})



        // mobile menu
            $( document ).ready(function() {

            $( ".cross" ).hide();
            $( ".menu" ).hide();
            $( ".canva_expander" ).click(function() {
            $( ".menu" ).slideToggle( "slow", function() {
            $( ".canva_expander" ).hide();
            $( ".cross" ).show();
            });
            });

            $( ".cross" ).click(function() {
            $( ".menu" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".canva_expander" ).show();
            });
            });

            });

            // Close out sub menu
            $('.sub__close').click(function(e) {
            e.preventDefault();

            $(this).parent().parent().removeClass('is-active');
            });

            // Trigger sub menu
            $('.menu ul .nav__submenu').click(function(e) {
        e.preventDefault();

        $(this).siblings().addClass('is-active');
        });
  