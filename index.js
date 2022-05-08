// get randomiser button from html


// object of arrays: nouns(key) : []{value}
const words = {
  nouns:
    {
      concrete: ["fridge", "door"],
      abstract: ["happiness", "fun"]
    },
  adjectives: 
    {
      positive: ["good", "fantastic"],
      negative: ["scam", "terrible"]
    },
    phrases: 
    {
      positive: ["would highly recommend"],
      negative: ["waste of money", "wouldn't recommend"]
    }
  }

// array of sentences with missing words

const sentences = [`I ${phrase} ITcareerChange. It is ${adjective}. I had a lot of ${noun}`]


// function return a random element from an array

// function that returns complete sentences - takes sentences with words missing and puts words in the correct places

// combine function which takes a few random completes entences from sentence array, combines them together into a paragraph and returns paragraph on click randomiser button.

