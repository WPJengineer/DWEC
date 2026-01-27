const username = document.getElementById("username");
const password = document.getElementById("password");
const btnSubmit = document.querySelector('.loginMenu input[type="submit"]');
const collectionPicked = document.querySelector('#collection');

const animals = ["elefant", "girafa", "pingui", "cangur", "dofi", "cocodril", "papallona", "pop", "tigre", "lloro"];
const sports = ["futbol", "basquet", "tennis", "natacio", "voleibol", "golf", "boxa", "ciclisme", "atletisme", "esqui"];
const objects = ["cadira", "finestra", "llapis", "quadern", "tisores", "ampolla", "paraigua", "mirall", "motxilla", "telefon"];
const fruit = ["poma", "platan", "maduixa", "tomaquet", "sindria", "pinya", "cogombre", "alvocat", "melo", "melicoto"];
const professions = ["mestre", "enginyer", "metge", "artista", "bomber", "cientific", "music", "pages", "arquitecte", "pilot"];
const parametros = new URLSearchParams(window.location.search);
const parametroUsername = parametros.get("username");
let result = false;

// in case we are sent back to change word to continue playing with the same username, we check for username and autofill textbox automatically.
if (parametroUsername) {
    username.value = `${parametroUsername}`;
}

// checks validity of username entered.
function checkUsername(username) {
    if (username.value.trim() === "") {
        // show error.
        // missing styling.
        console.log('Error, incorrect input.');

    } else {
        //show correct.
        
        // space to add other requirements if necessary.
        return result = true;
    }
}


/*testing*/

// function showError(input, missatge) {
//   const formControl = input.parentElement;
//   formControl.className = 'form-control error';
//   const label = formControl.querySelector('label');
//   const small = formControl.querySelector('small');
//   small.innerText = label.innerText + ' ' + missatge;
// }

// function showCorrect(input) {
//   const formControl = input.parentElement;
//   formControl.className = 'form-control correcto';
// }

/*testing*/


btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    checkUsername(username);
    if (result) {
        const category = collectionPicked.value;
        let selectedArray = [];
        switch (category) {
            case "animals":
                selectedArray = animals;
                break;
            case "sports":
                selectedArray = sports;
                break;
            case "objects":
                selectedArray = objects;
                break;
            case "fruit":
                selectedArray = fruit;
                break;
            case "professions":
                selectedArray = professions;
                break;
            default:
                console.log("Cap categoria seleccionada!");
                return;
        }
        let word = selectedArray[Math.floor(Math.random() * selectedArray.length)].toUpperCase().split("");
        localStorage.setItem('username', username.value);
        localStorage.setItem('word', JSON.stringify(word));
        location.href = "./html/game.html";
    }
});
