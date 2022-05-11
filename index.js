// get randomiser button from html

// object of arrays: nouns(key) : []{value}
const words = {
  nouns: ["fridge", "door", "computer", "internet", "wall", "happiness", "fun"],
  adjectives: ["good", "fantastic", "scam", "terrible"],
  phrases: [
    "would highly recommend",
    "waste of money",
    "wouldn't recommend",
    "right bargain",
    "cheap as chips",
    "better deal than maguire",
  ],
};

// array of sentences with missing words

const sentences = [
  "I (phrase) ITcareerChange. It is (adjectives). I had a lot of (nouns)",
  "I think ITCareerChange is an absolute (phrase). It is (phrase) :) . There was a lot of (nouns) during this course. ",
  "When I first found ITCareerChange, I was as happy as a (nouns), after reading all the reviews on how (adjectives) the course was, I think it was something (phrase)",
  "After 2 weeks of starting ITCareerSwitch, I have now finish the course and secured a position at a (nouns) company. I have now got a (adjectives) job. (phrase)",
  "I think ITCareer is a (adjectives) company, It is not only a (phrase), it is a $(adjectives) idea. What on earth was i (nouns) ing thinking",
];

const randomElement = (array) => {
  let randomElementNumber = Math.floor(Math.random() * array.length - 1);
  return array[randomElementNumber].split(" ");
};
const messageGenerator = () => {
  return randomElement(sentences);
};

console.log(randomElement(sentences));

// function return a random element from an array

// function that returns complete sentences - takes sentences with words missing and puts words in the correct places

// combine function which takes a few random completes entences from sentence array, combines them together into a paragraph and returns paragraph on click randomiser button.
