const scroll = document.querySelector(".navi");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    scroll.classList.add("scrolled");
  }
  else{
    scroll.classList.remove("scrolled");
  }
});
const sliderTrack = document.getElementById('sliderTrack');
  const slides = sliderTrack.children;
  const totalSlides = slides.length;
  const visibleSlides = 4; 
  let currentIndex = 0;

  
  for(let i = 0; i < visibleSlides; i++) {
    const clone = slides[i].cloneNode(true);
    sliderTrack.appendChild(clone);
  }

 
  const slideWidthPercent = 100 / visibleSlides;


  function moveSlider() {
    currentIndex++;
    sliderTrack.style.transition = 'transform 0.5s ease';
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidthPercent}%)`;

    
    if(currentIndex >= totalSlides) {
      setTimeout(() => {
        sliderTrack.style.transition = 'none';
        currentIndex = 0;
        sliderTrack.style.transform = `translateX(0)`;
      }, 300); // 
    }
  }

  
  setInterval(moveSlider, 1500);