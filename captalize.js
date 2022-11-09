
// text string to capitalize
const sampleText = "hElLo, WORld!";

// function to capitalize text

function capitalize(sampleText) {
    // identify and capitalize the first letter of the string
    firstInitial=sampleText.charAt(0).toUpperCase();

    // slice and lowercase the rest of the string
    restOfText=sampleText.slice(1).toLowerCase();

    // concatenate and return the two strings
    return firstInitial+restOfText;
}

// call the function and print the result
console.log(capitalize(sampleText));


