document.addEventListener('DOMContentLoaded', function(){
  headerFixed();
});
function headerFixed(){
  const header = document.querySelector('.header');
  const observer = new IntersectionObserver(function(entries){
    if(entries[0].isIntersecting){
      header.classList.remove('fixed-header');
    }
    else{
      header.classList.add('fixed-header');
    }
  });

  observer.observe(document.querySelector('.video'));
}

// Galeria
function showImg(event){
  const id = parseInt(event.target.dataset.imgId);
  const image = document.createElement('IMG');
  image.src =  `build/img/grande/${id}.webp`;

  const overlay = document.createElement('DIV');
  overlay.appendChild(image);
  overlay.classList.add('overlay');

  overlay.onclick = function() {
    overlay.remove();
    body.classList.remove('scroll');
  }

  const exit = document.createElement('P');
  exit.textContent = 'X';
  exit.classList.add('exit-button');
  overlay.appendChild(exit);
  exit.onclick = function() {
    overlay.remove();
    body.classList.remove('scroll');
  }
  const body = document.querySelector('BODY');
  body.appendChild(overlay);
  body.classList.add('scroll');
}


function setGallery(){
  const gallery = document.querySelector('.galeria-imagenes');
  
  for (let i = 1; i <= 12; i++) {
    const image = document.createElement('IMG');
    image.src =  `build/img/thumb/${i}.webp`;
    image.dataset.imgId = i;
    image.onclick = showImg;
    const list = document.createElement('LI');
    list.appendChild(image);
    gallery.appendChild(list);
  }
  
}

document.addEventListener('DOMContentLoaded',setGallery())


// smooth scroll
document.addEventListener('DOMContentLoaded', function(){
  scrollNav();
});



function scrollNav() {
  const enlaces = document.querySelectorAll('.navegacion-principal a');

  enlaces.forEach( function( enlace ) {
      enlace.addEventListener('click', function(event) {
          event.preventDefault();
          const seccion = document.querySelector(event.target.attributes.href.value);

          seccion.scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
}



