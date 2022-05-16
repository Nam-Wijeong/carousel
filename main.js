const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

(function addEvent(){
    prevBtn.addEventListener('click', translateCarousel.bind(this, 1));
    nextBtn.addEventListener('click', translateCarousel.bind(this, -1));
  })();

  function translateCarousel(direction){
    if(direction === 1) {
        selectedBtn = 'prev'
        carousel.style.transitionDuration = '0.5s';
        carousel.style.transform = `rotateY(60deg)`;
        carousel.ontransitionend = () => reorganizeEl(selectedBtn);
    }else {
       selectedBtn = 'next'
        carousel.style.transitionDuration = '0.5s';
        carousel.style.transform = `rotateY(-60deg)`;
        carousel.ontransitionend = () => reorganizeEl(selectedBtn);
    }
  }
  
  function reorganizeEl(selectedBtn) {
    carousel.removeAttribute('style');
    if(selectedBtn === 'prev') {
      carousel.insertBefore(carousel.lastElementChild,carousel.firstElementChild)
    }else {
      carousel.appendChild(carousel.firstElementChild);
    }
  }

  const panels = document.querySelectorAll('.panel');
  for(let i = 0; i <= 5; i++) {
      panels[i].innerHTML = `<img src="images/dog${i}.jpg">`
  }