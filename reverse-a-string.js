// Create a function that reverses a string:
// "Hi I am Saurav" should return
// "varauS ma I iH"

// first we validate, check for:
// 1. empty string
// 2. string with 1 letter (str.length < 2)
// 3. input of type 'string' (typeOf str !== 'string')
function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Error in input";
  }

  const backwards = [];
  for (let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);
  // it only prints on the console if we console.log it
  return backwards.join("");
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

const reverse3 = str => str.split("").reverse().join("");

const reverse4 = str => [...str].reverse().join("");

reverse("Hi I am Saurtrav");
reverse2("Hi I am Sauravio");
reverse3("Hi I am Saurddavio");
reverse4("Hi I am wSawwurddavio");
