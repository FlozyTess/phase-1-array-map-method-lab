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

const titleCased = () => {
  return tutorials.map(tutorial => {
    return tutorial
      .split(" ") // Split the title into words
      .map(word => {
        // Check if word is fully uppercase (e.g., acronyms like JSONP, NaN)
        if (word === word.toUpperCase()) {
          return word; // Keep acronyms as-is
        }
        // Capitalize first letter and keep the rest of the word as-is
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" "); // Join the words back into a single title
  });
}
console.log(titleCased());
