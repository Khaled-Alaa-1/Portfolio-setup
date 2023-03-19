const hamburger = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('.body');
const close = document.querySelector('.close');
const toolbarMobileMenu = document.querySelector('.toolbar-mobile-menu');
const projects = [
  {
    image: 'photo/Snapshoot Portfolio (1).png',
    name: 'Tonic',
    languages: ['HTML', 'CSS', 'JavaScript', 'RUby', 'Bootstrap', 'Javascript', 'Bootstrap'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate vitae tempore temporibus quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaecati temporibus incidunt. A assumenda explicabo perspiciatis soluta tempora facilis suscipit  culpa quo, alias nesciunt omnis similique quisquam fuga consectetur error laboriosam! Qui  s, quos repellendus.',
    live: 'https://khaled-alaa-1.github.io/Portfolio-setup/',
    github: 'https://github.com/Khaled-Alaa-1',
  },
  {
    image: 'photo/Snapshoot Portfolio (2).png',
    name: 'Multi-Post Stories',
    languages: ['HTML', 'CSS', 'JavaScript', 'RUby', 'Bootstrap', 'Javascript', 'Bootstrap'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate vitae tempore temporibus quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaecati temporibus incidunt. A assumenda explicabo perspiciatis soluta tempora facilis suscipit  culpa quo, alias nesciunt omnis similique quisquam fuga consectetur error laboriosam! Qui  s, quos repellendus.',
    live: 'https://khaled-alaa-1.github.io/Portfolio-setup/',
    github: 'https://github.com/Khaled-Alaa-1',
  },
  {
    image: 'photo/Snapshoot Portfolio (3).png',
    name: 'Tonic',
    languages: ['HTML', 'CSS', 'JavaScript', 'RUby', 'Bootstrap', 'Javascript', 'Bootstrap'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate vitae tempore temporibus quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaecati temporibus incidunt. A assumenda explicabo perspiciatis soluta tempora facilis suscipit  culpa quo, alias nesciunt omnis similique quisquam fuga consectetur error laboriosam! Qui  s, quos repellendus.',
    live: 'https://khaled-alaa-1.github.io/Portfolio-setup/',
    github: 'https://github.com/Khaled-Alaa-1',
  },
  {
    image: 'photo/Snapshoot Portfolio.png',
    name: 'Multi-Post Stories',
    languages: ['Ruby on Rails', 'css', 'JavaScript', 'Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate vitae tempore temporibus quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaecati temporibus incidunt. A assumenda explicabo perspiciatis soluta tempora facilis suscipit  culpa quo, alias nesciunt omnis similique quisquam fuga consectetur error laboriosam! Qui  s, quos repellendus.',
    live: 'https://khaled-alaa-1.github.io/Portfolio-setup/',
    github: 'https://github.com/Khaled-Alaa-1',
  },
];

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden'); // shows the mobile menu
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

// see project ////////////////////////////////////////////
const seeProject = document.querySelectorAll('.Project-link');

for (let i = 0; i < 4; i += 1) {
  const html = `    <div class="popup-1">
  <div class="pop-head">
    <h2>${projects[i].name}</h2>
<img class="exit" src="photo/x.png" alt="">  
</div>
  <ul class="Project-list">
    <li class="Project-name">CANOPY</li>
    <li class="dot">&#8226;</li>
    <li class="Project-info">Back End Dev</li>
    <li class="dot">&#8226;</li>
    <li class="Project-info">2015</li>
  </ul>
  <div class="Tonic-img">
    <img  class="Project-img" src="${projects[i].image}" alt="Snapshoot Tonic">
    <img class="Project-img-2" src="photo/work-1.png" alt=" Work Tonic">
  </div>
  <div class="pop">
  <p class="text-pop">${projects[i].description}</p>
  <div class="pop-lan">
    <ul class="Links-list">
      <li class="links-1"><a href="">${projects[i].languages[1]}</a></li>
      <li class="links-2"><a href="">${projects[i].languages[2]}</a></li>
      <li class="links-3"><a href="">${projects[i].languages[3]}</a></li>
      </ul>
      <ul class="Links-list-2">
      <li class="links-4"><a href="">${projects[i].languages[4]}</a></li>
      <li class="links-5"><a href="">${projects[i].languages[5]}</a></li>
    </ul>
    <br>
    <ul class="button-pop">
      <li class="button"><button href=${projects[i].live}>See live <img src="photo/see live.png" alt=""></button></li>
      <li class="button"><button href=${projects[i].github}>See source <img src="photo/Vector.png" alt=""></button></li>
    </ul>
  </div>
  </div>
</div>`;
  seeProject[i].addEventListener('click', () => {
    const main = document.querySelector('.popup');
    main.innerHTML = html;
    main.classList.toggle('blur');
    const popClose = document.querySelector('.exit');
    const popupWindow = document.querySelector('.popup-1');
    popClose.addEventListener('click', () => {
      popupWindow.classList.toggle('hidden');
      main.classList.toggle('blur');
    });
  });
  // validate contact form //////////////
}
const submit = document.querySelector('#submit');
const errorMessage = document.querySelector('#error-message');
submit.addEventListener('click', (event) => {
  const emailInput = document.querySelector('#email');
  const emailValue = emailInput.value;
  if (emailValue !== emailValue.toLowerCase()) {
    event.preventDefault();
    errorMessage.innerHTML = '<span class="error-star">*</span>Email address must be in lowercase.';
    return false;
  }
  return true;
});