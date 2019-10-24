function doubleAll(numbers) {
  let doubled = [];
  
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2)
  }
  return doubled;
}

function absoluteValues(numbers) {
  const newArr =[]
  numbers.forEach(a => {
    if(a>=0){
      newArr.push(a)
    }else if(a<0){
      newArr.push(a*-1)
    }
  })
  return newArr;
}

function yelledGreetings(greetings) {
  const yelled = [];
  greetings.forEach(s => yelled.push(s + '!'))
  return yelled;
}

function changeToInitials(arr) {
  const initials = arr.map(a => a.split(" ").map(word => word[0]).join(''))
  return initials;
}

function doubleOdd(numbers) {
  const answers = [];

  for (let i=0; i < numbers.length; i++) {
    const answer = Math.abs(numbers[i]) % 2 === 1 ? numbers[i]*2 : numbers[i];
    answers.push(answer)
  }
  return answers;
}

function upperCaseFirstLetters(arr) {
  const changedCase = [];
  arr.forEach(function(a) {
    changedCase.push(a.charAt(0).toUpperCase() + a.substr(1).toLowerCase())
  });
  return changedCase;
}

function add1ToLeft(numbers) {
  const answers = []
  for (let i=0; i < numbers.length;i++) {
    const stringified = numbers[i].toString();
    const answers = numbers[i] < 0 ? '-' + '1' + stringified.slice(1) : '1' + stringified

    answers.push(Numbers(answerString));
  }
  return answers
}


module.exports = {
  doubleAll,
  absoluteValues,
  yelledGreetings,
  changeToInitials,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
}