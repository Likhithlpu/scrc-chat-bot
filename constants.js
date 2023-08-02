// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["what do you do", "what can you do", "what is your purpose"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ['thanks','thank you','thanku'],
  //["Can i know the air quality at Vindhya Block?","What is the humidity at the hostel?"]
]

// Possible responses, in corresponding order

const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!"],
  [
    "I fetch details from the dashboard",
    "I help find the parameters of different locations"
  ],
  ["ok cool", "ok","ya"],
  ["Bye", "Goodbye", "See you later"],
  ["Anytime","Your welcome"],
  //["The corresponding calculated data is given","The value is given"]
]

// Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]