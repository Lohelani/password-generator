var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

function generatePassword() {
    var length = parseInt(prompt("How many characters would you like? (Between 8-128)"));

    if (length < 8 || length > 128) {
        alert("Must choose a number between 8 and 128 characters");
        return;
    }

    var hasUppercase = confirm("Click OK to confirm uppercase letters.");
    var hasLowercase = confirm("Click OK to confirm lowercase letters");
    var hasSpecialcharacters = confirm("Click OK to confirm special case letters.");
    var hasNumbers = confirm("Click OK to confirm numbers letters.");


    var possibleCharacters = []
    console.log(possibleCharacters)

    if (hasUppercase === false && hasLowercase === false && hasSpecialcharacters === false && hasNumbers === false) {
        alert("Must choose at least one character type");
        return;
    }
    if (hasUppercase) {
        possibleCharacters = possibleCharacters.concat(uppercase);
        console.log(possibleCharacters);
    }
    if (hasLowercase) {
        possibleCharacters = possibleCharacters.concat(lowercase);
        console.log(possibleCharacters);
    }
    if (hasNumbers) {
        possibleCharacters = possibleCharacters.concat(numbers);
        console.log(possibleCharacters);
    }
    if (hasSpecialcharacters) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        console.log(specialCharacters)
    }


    var tempPassword = " ";
    var charactersLength = possibleCharacters.length;
    for (var i = 0; i < length; i++) {
        tempPassword += possibleCharacters[Math.floor(Math.random() * charactersLength)];
        console.log(tempPassword);
    }
    return tempPassword;

}



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
