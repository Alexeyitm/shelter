import { pets, petsStart} from './contain.js';
import { page, petCard, closePopupButton, popup, popupOverlay, popupContainer, leftButton, rightButton } from './variables.js';
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
const aaa = () => {
  const newContainer = [];
  let container = pets.slice(0);
  let cardActive;

  if (document.documentElement.clientWidth >= 1280) {
    cardActive = Array.from(petCard);
  }
  if (document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768) {
    cardActive = Array.from(petCard).slice(0, -1);
  }
  if (document.documentElement.clientWidth < 768) {
    cardActive = Array.from(petCard).slice(0, -2);
  }

  cardActive.forEach((card) => {
    container = container.filter(pet => card.querySelector('.our-friends__card-name').textContent !== pet['name']);    
  });

  while (newContainer.length < 3) {
    let obj = Math.floor(Math.random() * container.length);
    if (container[obj] != null) {
      newContainer.push(container[obj])
      delete container[obj];
    }
  }

  return newContainer;
}

// left/right buttons listeners
leftButton.addEventListener('click', () => createCard(petCard, aaa()));
rightButton.addEventListener('click', () => createCard(petCard, aaa()))

createCard(petCard, petsStart);
popupHover();