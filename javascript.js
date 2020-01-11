
const upperCaseCharacterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercaseCharacterArray = convertToLower(upperCaseCharacterArray);
const specialCharacters = ['!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];
const numericCharacters = Math.floor(Math.random() * 10);

function convertToLower(upperArray) {
    let lowerArrary = [];
    for (let z = 0; z < upperArray.length; z++) {
        lowerArrary.push(upperArray[z].toLowerCase());
    }

    return lowerArrary;
}



function getVariableFromDom(type, name) {
    if (type === 'id') {
        return document.getElementById(name);
    } else if (type === 'class') {
        document.getElementsByClassName(name);
    }    

}

function submit() {
    // getVariableFromDom('id', 'password-area').innerHTML = '';
    let passwordResult = '';
    let wantsSpecialCharacters = getVariableFromDom('id', 'special').checked;
    let wantsLowercaseCharacters = getVariableFromDom('id', 'lowercase').checked;
    let wantsUppercaseCharacters = getVariableFromDom('id', 'uppercase').checked;
    let wantsNumericCharacters = getVariableFromDom('id', 'numeric').checked;
    let characters = getVariableFromDom('id', 'character-field').value;

    if (!wantsSpecialCharacters && !wantsLowercaseCharacters && !wantsUppercaseCharacters && !wantsNumericCharacters) {
        alert('At lease one checkbox must be checked!');
        return;
    }

    let options = [];
    if (wantsSpecialCharacters) options.push('special');
    if (wantsLowercaseCharacters) options.push('lower');
    if (wantsUppercaseCharacters) options.push('upper');
    if (wantsNumericCharacters) options.push('numeric');
    let currentOption;
    let currentCharacter;

    for (let x = 1; x <= characters; x++) {
        console.log(characters);
        currentOption = Math.floor(Math.random() * options.length); 

        currentCharacter = options[currentOption];

        passwordResult.trim();

        switch (currentCharacter) {
            case 'numeric':
                let num = Math.floor(Math.random() * 10);
                passwordResult += num.toString();
                break;
            case 'lower':
                passwordResult += lowercaseCharacterArray[Math.floor(Math.random() * lowercaseCharacterArray.length)];
                break;
            case 'upper':
                passwordResult += upperCaseCharacterArray[Math.floor(Math.random() * upperCaseCharacterArray.length)];
                break;
            case 'special':
                passwordResult += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
        }
    }

    getVariableFromDom('id', 'password-area').innerHTML = passwordResult.trim();
}



function checkbox(event) {
    let value = document.getElementsByTagName('input');
    // console.log('value :', value);
}

function characterCountChanged(event) {
    let characterValue = event.target.value;
    let sliderValue = document.getElementById('slider-value');
    let passwordLengthField = document.getElementById('character-field');

    if (isNaN(characterValue)) alert('You can only enter a number to determin the password length!');
    if (characterValue < 8) alert('The length must be 8 or more characters!');
    if (characterValue > 128) alert('The length must be less than 128 characters!');

    sliderValue.value = characterValue;
    passwordLengthField.value = characterValue;
}

//  TODO password strength bars