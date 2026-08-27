let number = 12345;
let numStr = number.toString();
let reversedStr = "";

for (let i = numStr.length - 1; i >= 0; i--) {
    reversedStr += numStr[i];
}

console.log(reversedStr);
