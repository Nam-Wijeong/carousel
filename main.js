const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

(function addEvent(){
    prevBtn.addEventListener('click', translateCarousel.bind(this, 1));
    nextBtn.addEventListener('click', translateCarousel.bind(this, -1));
  })();

  function translateCarousel(direction){
    if(direction === 1) {
        selectedBtn = 'prev'
        carousel.style.transitionDuration = '500ms';
        carousel.style.transform = `rotateY(60deg)`;
        carousel.ontransitionend = () => reorganizeEl(selectedBtn);
    }else {
       selectedBtn = 'next'
        carousel.style.transitionDuration = '500ms';
        carousel.style.transform = `rotateY(-60deg)`;
        carousel.ontransitionend = () => reorganizeEl(selectedBtn);
    }
  }
  
  function reorganizeEl(selectedBtn) {
    carousel.removeAttribute('style');
    (selectedBtn === 'prev') ? carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild): carousel.appendChild(carousel.firstElementChild);
  }

  const panels = document.querySelectorAll('.panel');
//   panels[0].innerHTML = '<img src="images/dog1.jpg" alt="" />';
  for(let i = 0; i <= 5; i++) {
      panels[i].innerHTML = `<img src="images/dog${i}.jpg">`
  }