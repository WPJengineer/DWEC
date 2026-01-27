const button = document.querySelector('.open-popup');
const contenidorPopup = document.querySelector('.contenidor-popup');
const tancaPopup = document.querySelector('.tanca-popup');

button.addEventListener('click', () => {
  contenidorPopup.style.display = "block";
});

tancaPopup.addEventListener('click', () => {
  contenidorPopup.style.display = "none";
});

contenidorPopup.addEventListener('click', () => {
  contenidorPopup.style.display = "none";
});