const form = document.getElementById('form');
const nomUsuari = document.getElementById('nomusuari');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Funcions
function mostraError(input, missatge) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const label = formControl.querySelector('label');
  const small = formControl.querySelector('small');
  small.innerText = label.innerText + ' ' + missatge; //needs to point at each individual small
}

function mostraCorrecte(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control correcto';
}

function esEmailValid(email) {
  // google -> js email regex
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function esObligatori(inputArray) {
  inputArray.forEach((input) => {
    if(input.value.trim() === '') {
      mostraError(input, 'es obligatori');
    }
  });
}

// Eventos Listeners
form.addEventListener('submit', (e) => {

  e.preventDefault();

  // if(nomUsuari.value === '') {
  //   mostraError(nomUsuari, 'El nom d\'usuari es obligatori.');
  // } else {
  //   mostraCorrecte(nomUsuari);
  // }

  if(email.value === '') {
    mostraError(email, 'El email es obligatori.');
  } else if(!esEmailValid(email.value)) {
    mostraError(email, 'El email no es valid.');
  } else {
    mostraCorrecte(email);
  }

  // if(password.value === '') {
  //   mostraError(password, 'El password es obligatori.');
  // } else {
  //   mostraCorrecte(password);
  // }

  // if(password2.value === '') {
  //   mostraError(password2, 'Confirmar el password es obligatori.');
  // } else {
  //   mostraCorrecte(password2);
  // }

  esObligatori([nomUsuari,/* email,*/ password, password2]);

});