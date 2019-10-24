function crazyCase(str) {
  let crazyCased = '';

  for (let i = 0; i < str.length; i++) {

    if (i % 2 === 1) {
      crazyCased += str[i].toUpperCase()
    } else {
      crazyCased += str[i].toLowerCase()
    }
  }

  return crazyCased;
}

function ciEmailify(str) {
  let newStr= ''
str = str.toLowerCase()
for (i=0; i<str.length; i++) {
 if (str[i] === " ") {
 newStr = newStr + '.'
 } else {
 newStr = newStr + str[i]
 }
 }
 return newStr + '@codeimmersives.com'
}

function exclaim(str) {
  let newStr= ''
  for (i = 0; i < str.length;i++) {
    if (str[i] === '?') {
    newStr = newStr + '!'
    } else if(str[i] === '.') {
    newStr = newStr + '!'
    } else {
    newStr = newStr + str[i]
    }
  }
    return newStr;
}

function reverse(str) {newStr =""
  for (i = 1; i <= str.length; i++){
    if(str[i] !== ' ' ){
    newStr =  newStr +  str[str.length - i]
    }
  }
    return newStr;
}

function crazyCase2ReturnOfCrazyCase(str) {
  let crazyCased = '';
  let crazyIndex = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      if (crazyIndex % 1 === 0) {
        crazyCased = crazyCased + str[i].toLowerCase()
      } else {
        crazyCased = crazyCased + str[i].toUpperCase()
      }

      crazyIndex++;
    } else {
      crazyCased = crazyCased + ' ';
    }
  }
  
  return crazyCased;
}

function titleCase(str) {
  let newStr= ''
  for (i = 0; i <str.length; i++){
   if(i === 0){
     newStr = newStr + str[0].toUpperCase()
   } else{
   if (str[i - 1] === ' ') {
   newStr = newStr + str[i].toUpperCase()}
   else {
   newStr = newStr + str[i].toLowerCase()
     }
     }
   }
     return newStr;
}

function onlyVowels(str) {
  const listOfVowels = 'aeiouAEIOU';
  let vowels = '';
  for (let i = 0; i < str.length; i++) {
    const character = str[i];
    if (listOfVowels.includes(character)) {
      vowels = vowels + character;
    }
  }

  return listOfVowels;
}

function crazyCase3SonOfCrazyCase(str) {
  let crazyCased = '';
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let crazyIndex = 0;
  
  for (let i = 0; i < str.length; i++) {
    const currentCharacter = str[i].toLowerCase();
    if (currentCharacter.includes(alphabet)) {
      if (crazyIndex % 2 === 0) {
        crazyCased = crazyCased + currentCharacter;
      } else {
        crazyCased = crazyCased + currentCharacter.toUpperCase()
      }

      crazyIndex++;
    } else {
      crazyCased = crazyCased + currentCharacter;
    }
  }
  
  return crazyCased;
}


module.exports = {
  crazyCase,
  exclaim,
  ciEmailify,
  reverse,
  crazyCase2ReturnOfCrazyCase,
  titleCase,
  onlyVowels,
  crazyCase3SonOfCrazyCase
}