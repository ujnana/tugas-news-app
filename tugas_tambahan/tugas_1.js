
const string = "NEGIE1";
function reverseString(str) {
    const letters = str.split("").filter(char => char.match(/[a-zA-Z]/));
    return letters.reverse().join("") + str[str.length - 1];
}

const reversedString = reverseString(string);
console.log(reversedString); // Output: "EIGEN1"