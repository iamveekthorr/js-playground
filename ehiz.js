// variable with an array of size 10 ([...Array(10)])
// map method acts on it and returns a new array of
// the same size but with the values multiplied by 10
// to return a whole number
// This is an auto generated array
var nombreOrdinateur = [...Array(4)].map(() => Math.floor(Math.random() * 10));

console.log(nombreOrdinateur);

function estUnNombre(nombreUtilisateur) {
  // opens prompt and accepts values of type number
  var nombreUtilisateur = Number(prompt('entre un nombre à 4 chiffres ')),
    output = [], // creates a variable initialized to an empty array
    userInput = nombreUtilisateur.toString(); // converts user input to string

  for (var i = 0, len = userInput.length; i < len; i++) {
    output.push(+userInput.charAt(i));
  }
  console.log(typeof output);
  console.log(typeof userInput);
  if (!isNaN(nombreUtilisateur)) {
    nombreOrdinateur.forEach((element) => {
      output.forEach((el) => {
        if (element === el) {
          if (nombreOrdinateur.indexOf(element) === output.indexOf(el)) {
            console.log(`${el}, ${element}`);
            console.log(
              `Your number ${output[x]} found a Match at ${output.indexOf(
                output[x]
              )}`
            );
          }
        }
      });
    });
  } else if (isNaN(nombreUtilisateur)) {
    alert("ceci n'est pas un nombre ou vous n'avez pas entré 4 chiffres");
    return false;
  }
}

estUnNombre();
