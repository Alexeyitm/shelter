import { pets } from './contain.js';
import { page, petCard, closePopupButton, popup, popupOverlay, popupContainer, firstButton, previousButton, count, nextButton, lastButton } from './variables.js';
import { popupHover } from './popup-hover.js'

//create start random array
const randomArr = pets.sort(()=>Math.random()-0.5);

//create array with 48 cards;
const bigContainer = [];
for (let i = 0; i < 6; i++) {
  randomArr.forEach((card) => bigContainer.push(card));
}

//function create cards
const createCard = (cards, pets) => {
  let i = 0;

  if (document.documentElement.clientWidth >= 1280) {
    for (let i = 0; i < 8; i++) {
      addCard(cards[i], i, pets);
    }
  }
  if (document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768) {
    for (let i = 0; i < 6; i++) {
      addCard(cards[i], i, pets);
    }
  }
  if (document.documentElement.clientWidth < 768) {
    for (let i = 0; i < 3; i++) {
      addCard(cards[i], i, pets);
    }
  }
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


// functions generate page cards
const generateEightCards = () => {
  const eightCardsContainer = [bigContainer.slice(0, 8)];
  for (let i = 1; i < 6; i++) {
    eightCardsContainer.push(bigContainer.slice(i, 8+i));
  }
  return eightCardsContainer;
}
console.log(generateEightCards())

const generateSixCards = () => {
  const sixCardsContainer = [bigContainer.slice(0, 6)];
  for (let i = 1; i < 8; i++) {
    sixCardsContainer.push(bigContainer.slice(i, 6+i));
  }
  return sixCardsContainer;
}
console.log(generateSixCards())

const generateThreeCards = () => {
  const threeCardsContainer = [bigContainer.slice(0, 3)];
  for (let i = 1; i < 16; i++) {
    threeCardsContainer.push(bigContainer.slice(i, 3+i));
  }
  return threeCardsContainer;
}
console.log(generateThreeCards())





firstButton.addEventListener('click', () => {
  if (document.documentElement.clientWidth >= 1280) {
    count.textContent = '1';
    createCard(petCard, generateEightCards()[0]);
  }
  if (document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768) {
    count.textContent = '1';
    createCard(petCard, generateSixCards()[0]);
  }
  if (document.documentElement.clientWidth < 768) {
    count.textContent = '1';
    createCard(petCard, generateThreeCards()[0]);
  }
  firstButton.classList.remove('our-friends__button_active');
  lastButton.classList.add('our-friends__button_active');
  nextButton.classList.add('our-friends__button_active');
  previousButton.classList.remove('our-friends__button_active');
})

previousButton.addEventListener('click', () => {
  if (count.textContent > 1) {
    count.textContent = +count.textContent - 1;
    
    if (document.documentElement.clientWidth >= 1280) {
      createCard(petCard, generateEightCards()[+count.textContent-1])
    }
    if (document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768) {
      createCard(petCard, generateSixCards()[+count.textContent-1])
    }
    if (document.documentElement.clientWidth < 768) {
      createCard(petCard, generateThreeCards()[+count.textContent-1]) 
    }
    nextButton.classList.add('our-friends__button_active');
    lastButton.classList.add('our-friends__button_active');
  }
  if (count.textContent == 1) {
    previousButton.classList.remove('our-friends__button_active');
    firstButton.classList.remove('our-friends__button_active');
  }
})

nextButton.addEventListener('click', () => {
  
  if (document.documentElement.clientWidth >= 1280) {
    if (count.textContent < 6) {
      count.textContent = +count.textContent + 1;
      createCard(petCard, generateEightCards()[+count.textContent-1]);
      firstButton.classList.add('our-friends__button_active');
      previousButton.classList.add('our-friends__button_active');
    }
    if (count.textContent == 6) {
      nextButton.classList.remove('our-friends__button_active');
      lastButton.classList.remove('our-friends__button_active');
    }
  }
  if (document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768) {
    if (count.textContent < 8) {
      count.textContent = +count.textContent + 1;
      createCard(petCard, generateSixCards()[+count.textContent-1]);
      firstButton.classList.add('our-friends__button_active');
      previousButton.classList.add('our-friends__button_active');
    }
    if (count.textContent == 8) {
      nextButton.classList.remove('our-friends__button_active');
      lastButton.classList.remove('our-friends__button_active');
    }
  }
  if (document.documentElement.clientWidth < 768) {
    if (count.textContent < 16) {
      count.textContent = +count.textContent + 1;
      createCard(petCard, generateThreeCards()[+count.textContent-1]);
      firstButton.classList.add('our-friends__button_active');
      previousButton.classList.add('our-friends__button_active');
    } 
    if (count.textContent == 16) {
      nextButton.classList.remove('our-friends__button_active');
      lastButton.classList.remove('our-friends__button_active');
    }
  }
})

lastButton.addEventListener('click', () => {
  if (document.documentElement.clientWidth >= 1280) {
    count.textContent = '6';
    createCard(petCard, generateEightCards()[5]);
  }
  if (document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768) {
    count.textContent = '8';
    createCard(petCard, generateSixCards()[7]);
  }
  if (document.documentElement.clientWidth < 768) {
    count.textContent = '16';
    createCard(petCard, generateThreeCards()[15]);
  }
  lastButton.classList.remove('our-friends__button_active');
  firstButton.classList.add('our-friends__button_active');
  previousButton.classList.add('our-friends__button_active');
  nextButton.classList.remove('our-friends__button_active');
})

createCard(petCard, randomArr);
popupHover();