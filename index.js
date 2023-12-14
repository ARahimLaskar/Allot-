function encode(input) {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let encodedStr = "";
  let n = input.length;
  for (let i = 0; i < n; i++) {
    const ch = input[i]; // accessing the current character in the loop;
    const index = alphabets.indexOf(ch) + 1; // index can be use as the value of the alphabet and index starts from 0;

    if (index % 2 == 1) {
      // checking if the alphabet index is odd or not;
      encodedStr += alphabets[26 - index]; // for the odd value alphabet, getting the opposite alphabet ;
    } else {
      encodedStr += ch + alphabets[26 - index]; // for the even   value alphabet, getting the opposite alphabet ;
    }
  }
  return encodedStr;
}

function decode(input) {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabets1 = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  let decodedStr = "";

  let i = 0;
  while (i < input.length) {
    const currentChar = input[i];
    const index = alphabets1.indexOf(currentChar) + 1;
    if (index % 2 === 1 && index < 13) {
      decodedStr += alphabets1[26 - index];
      i++;
    } else {
      decodedStr += currentChar; // Append the current character as it is
      i += 2; // Move the index by 2 positions for even-indexed characters
    }
  }
  return decodedStr;
}

const inputString = "ABC";
const encodedString = encode(inputString);
console.log(`Encoded: ${encodedString}`);

const decodedString = decode(encodedString);
console.log(`Decoded: ${decodedString}`);
