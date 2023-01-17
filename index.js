const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// function wordIter(string) {
//   let words = string.split(" ")
//   return words;
// }
// wordIter("Nick freakin johnson")

// const titleCased = tutorials.map((lesson) => {
//   let words = wordIter(lesson);
//   debugger;
//   return Object.assign({}, lesson, {
//     words[0][0]
//   })

//   return tutorials
// })

// console.log(titleCased);


const titleCased = () => {
  return tutorials.map((lesson) => {
    const words = lesson.split(" ");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    return capitalizedWords.join(" ");
  });
};

console.log(titleCased());