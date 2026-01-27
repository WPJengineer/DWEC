const form = document.getElementById('form');
const nomUsuari = document.getElementById('nomusuari');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const button = document.querySelector('.open-popup');
const contenidorPopup = document.querySelector('.contenidor-popup');
const tancaPopup = document.querySelector('.tanca-popup');
let result = false;

// Funcions
function mostraError(input, missatge) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const label = formControl.querySelector('label');
  const small = formControl.querySelector('small');
  small.innerText = label.innerText + ' ' + missatge;
}

function mostraCorrecte(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control correcto';
}

function esEmailValid(input) {
  // google -> js email regex
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(re.test(String(input.value.trim().toLowerCase()))) {
    mostraCorrecte(input);
  } else {
    mostraError(input, 'L\'email no es valid');
  }

}

function esObligatori(inputArray) {
  inputArray.forEach((input) => {
    if(input.value.trim() === '') {
      mostraError(input, 'es obligatori');
    } else {
      comprovaLongitud(nomUsuari, 3, 15);
      comprovaLongitud(password, 6, 25);
      comprovaLongitud(password2, 6, 25); //this is shit
      comprovaContrasenyesIguals(password, password2);
      esEmailValid(email);
      result = true;
    }
  });
}

function comprovaLongitud(input, min, max) {
  if(input.value.length < min) {
    mostraError(input, `ha de tenir almenys ${min} caracters`);
  } else if(input.value.length > max) {
    mostraError(input, `ha de tenir ${max} caracters com a maxim`);
  } else {
    mostraCorrecte(input);
  }
}

function comprovaContrasenyesIguals(input1, input2) {
  if(input1.value != input2.value) {
    mostraError(input2, 'contrasenya no igual.');
  }
}

// Eventos Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();
  esObligatori([nomUsuari, email, password, password2]);
  if(result) {
    contenidorPopup.style.display = "none";
    // need to clear fields in form.
    
  }

});

button.addEventListener('click', () => {
  contenidorPopup.style.display = "block";
});

tancaPopup.addEventListener('click', () => {
  contenidorPopup.style.display = "none";
});

// need to close popup and delete fields in form when clicking outside form
// contenidorPopup.addEventListener('click', () => {
//   contenidorPopup.style.display = "none";
// });