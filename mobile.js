const hamburger = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('.body');
const close = document.querySelector('.close');
const toolbarMobileMenu = document.querySelector('.toolbar-mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden'); // shows the mobile menu
  // hamburger.classList.toggle('hidden'); // hides the hamburger icon
  body.classList.toggle('overflow');
});

close.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  body.classList.toggle('overflow');
});

toolbarMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  body.classList.toggle('overflow');
});
{/* <div class="popup-window">
  <img class="pop-close-desk" src="images/icons/pop-close-desk.svg" alt="pop-close-desk">
  <div class="pop-image-and-close">
    <img src=${projects[i].image} alt="exit" class="pop-close hidden"></img>
  </div>
  <div class="pop-project-name">${projects[i].name}</div>
  <div class="pop-project-name-and-live-and-source-desk">
    <div class="pop-project-name-desk">${projects[i].name}</div>
    <div class="pop-see-live-and-source-desk">
      <a href=${projects[i].live} class="pop-see-live">
        <h3 class="pop-see-live-text">See live</h3>
        <img src="images/icons/see-live.svg" alt="" class="pop-see-live-image">
      </a>
      <a href=${projects[i].github} class="pop-see-source">
        <h3 class="pop-see-source-text">See Source</h3>
        <img src="images/icons/see-source.svg" alt="" class="pop-see-source-image">
      </a>
    </div>
  </div>
  <div class="pop-languages">
    <h4 class="pop-languages-1">${projects[i].languages[0]}</h4>
    <h4 class="pop-languages-2">${projects[i].languages[1]}</h4>
    <h4 class="pop-languages-3">${projects[i].languages[2]}</h4>
  </div>
  <div class="pop-languages-desk">
    <h4 class="pop-languages-1 desk">${projects[i].languages[3]}</h4>
    <h4 class="pop-languages-2 desk">${projects[i].languages[4]}</h4>
    <h4 class="pop-languages-3 desk">${projects[i].languages[5]}</h4>
    <h4 class="pop-languages-1 desk">${projects[i].languages[6]}</h4>
    <h4 class="pop-languages-2 desk">${projects[i].languages[7]}</h4>
    <h4 class="pop-languages-3 desk">${projects[i].languages[8]}</h4>
  </div>
  <p class="pop-lorem">${projects[i].description}</p>
  <div class="pop-see-live-and-source mobile">
    <a href=${projects[i].live} class="pop-see-live">
      <h3 class="pop-see-live-text">See live</h3>
      <img src="images/icons/see-live.svg" alt="" class="pop-see-live-image">
    </a>
    <a href=${projects[i].github} class="pop-see-source">
      <h3 class="pop-see-source-text">See Source</h3>
      <img src="images/icons/see-source.svg" alt="" class="pop-see-source-image">
    </a>
  </div>
  </div> */}