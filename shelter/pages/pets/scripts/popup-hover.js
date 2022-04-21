import {closePopupButton, popupOverlay, popupContainer} from './variables.js';

export const popupHover = () => {
  popupOverlay.onmouseover = () => {
    closePopupButton.style.backgroundColor='#FDDCC4';
    closePopupButton.style.borderColor='#FDDCC4';
  };
  
  closePopupButton.onmouseover = () => {
    closePopupButton.style.backgroundColor='#FDDCC4';
    closePopupButton.style.borderColor='#FDDCC4';
  };
  
  popupContainer.onmouseover = (e) => {e.stopPropagation()};
  popupOverlay.onmouseout = () => {
    closePopupButton.style.backgroundColor='initial';
    closePopupButton.style.borderColor='#F1CDB3';
  };
}