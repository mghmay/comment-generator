// get randomiser button from html

const randomiserButton = document.getElementById("btn");
const commentContainer = document.getElementById("comment");

// object of arrays: nouns(key) : []{value}
const words = {
  nouns: [
    "fridge",
    "door",
    "computer",
    "internet",
    "wall",
    "happiness",
    "fun",
    "code",
    "lamp",
  ],
  adjectives: [
    "good",
    "fantastic",
    "scam",
    "terrible",
    "excellent",
    "amazing",
    "rubbish",
    "bollocks",
  ],
  phrases: [
    "would highly recommend",
    "waste of money",
    "wouldn't recommend",
    "right bargain",
    "cheap as chips",
    "better deal than maguire",
    "happy ending",
    "for the greater good",
  ],
};

// array of sentences with missing words

const sentences = [
  "I (phrase) ITcareerChange. It is (adjectives) . I had a lot of (nouns)",
  "I think ITCareerChange is an absolute (phrase) . It is (adjectives) :) . There was a lot of (nouns) during this course. ",
  "When I first found ITCareerChange, I was as happy as a (nouns) , after reading all the reviews on how (adjectives) the course was, I think it was something (phrase)",
  "After 2 weeks of starting ITCareerSwitch, I have now finish the course and secured a position at a (nouns) company. I have now got a (adjectives) job. (phrase)",
  "I think ITCareer is a (adjectives) company, It is not only a (phrase) , it is a $(adjectives) idea. What on earth was i (nouns) ing thinking",
];

const randomElement = (array) => {
  let randomElementNumber = Math.floor(Math.random() * (array.length - 1));
  return array[randomElementNumber];
};

const sentenceGenerator = () => {
  const sentArr = randomElement(sentences).split(" ");

  for (let i = 0; i < sentArr.length; i++) {
    if (sentArr[i] === "(phrase)") {
      sentArr[i] = randomElement(words.phrases);
    }
    if (sentArr[i] === "(adjectives)") {
      sentArr[i] = randomElement(words.adjectives);
    }
    if (sentArr[i] === "(nouns)") {
      sentArr[i] = randomElement(words.nouns);
    }
  }

  return sentArr.join(" ");
};

const messageGenerator = () => {
  commentContainer.innerHTML = "";
  const returnValue =
    sentenceGenerator() + " " + sentenceGenerator() + " " + sentenceGenerator();
  commentContainer.innerHTML = returnValue;
};

randomiserButton.addEventListener("click", () => messageGenerator());
