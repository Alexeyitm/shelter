import { pets } from './contain.js';
import { page, petCard, closePopupButton, popup, popupOverlay, popupContainer, firstButton, previousButton, count, nextButton, lastButton } from './variables.js';
import { popupHover } from './popup-hover.js'


//function create cards
const createCard = (cards, pets) => {
  let i = 0;
  cards.forEach(card => {
    addCard(card, i, pets);
    i += 1;
  });
}

//function add card
const addCard = (card, i, pets) => {
  card.querySelector('.our-friends__card-img').src = pets[i]["img"];
  card.querySelector('.our-friends__card-img').alt = pets[i]["name"];
  card.querySelector('.our-friends__card-name').textContent = pets[i]["name"];

  //function open popup
  const openPopup = () => {
    popup.querySelector('.popup__img').src = pets[i]["img"];
    card.querySelector('.our-friends__card-img').alt = pets[i]["name"];
    popup.querySelector('.popup__title').textContent = pets[i]["name"];
    popup.querySelector('.popup_subtitle').textContent = `${pets[i]["type"]} - ${pets[i]["breed"]}`;
    popup.querySelector('.popup_paragraph').textContent = pets[i]["description"];
    popup.querySelector('.popup__element-value_age').textContent = pets[i]["age"];
    popup.querySelector('.popup__element-value_inoculations').textContent = pets[i]["inoculations"];
    popup.querySelector('.popup__element-value_diseases').textContent = pets[i]["diseases"];
    popup.querySelector('.popup__element-value_parasites').textContent = pets[i]["parasites"];
    popup.classList.add('popup_active');
    page.classList.add('page_disabled');
  }

  //function close popup
  const closePopup = () => {
    popup.classList.remove('popup_active');
    page.classList.remove('page_disabled');
  }
  
  //listener close popup
  card.addEventListener('click', () => openPopup());  

  //listener close popup button
  closePopupButton.addEventListener('click', () => closePopup());

  //listener close popup overlay
  popupOverlay.addEventListener('click', () => closePopup());
  popupContainer.addEventListener('click', (e) => e.stopPropagation());
}


//function change cards
const generateCards = () => {
  const bigContainer = [pets];
  
  for (let i = 1; i < 8; i++) {
    bigContainer.push((Array.from(pets).slice(i, pets.length)).concat(Array.from(pets).slice(0, i)));
  }

  return bigContainer;
}

firstButton.addEventListener('click', () => {
  createCard(petCard, generateCards()[0]);
  count.textContent = 1;
  firstButton.classList.remove('our-friends__button_active');
  lastButton.classList.add('our-friends__button_active');
  nextButton.classList.add('our-friends__button_active');
  previousButton.classList.remove('our-friends__button_active');
})
previousButton.addEventListener('click', () => {
  if (count.textContent > 1) {
    count.textContent = +count.textContent - 1;
    createCard(petCard, generateCards()[+count.textContent-1]);
    nextButton.classList.add('our-friends__button_active');
    lastButton.classList.add('our-friends__button_active');
  }
  if (count.textContent == 1) {
    previousButton.classList.remove('our-friends__button_active');
    firstButton.classList.remove('our-friends__button_active');
  }
})

nextButton.addEventListener('click', () => {
  if (count.textContent < 8) {
    count.textContent = +count.textContent + 1;
    createCard(petCard, generateCards()[+count.textContent-1]);
    firstButton.classList.add('our-friends__button_active');
    previousButton.classList.add('our-friends__button_active');
  }
  if (count.textContent == 8) {
    nextButton.classList.remove('our-friends__button_active');
    lastButton.classList.remove('our-friends__button_active');
  }
})
lastButton.addEventListener('click', () => {
  createCard(petCard, generateCards()[7]);
  count.textContent = 8;
  lastButton.classList.remove('our-friends__button_active');
  firstButton.classList.add('our-friends__button_active');
  previousButton.classList.add('our-friends__button_active');
  nextButton.classList.remove('our-friends__button_active');
})

createCard(petCard, pets);
popupHover();