const app_name='Dodac API';
const allowed_hosts= ['*'];
const root_path=" ";

class Config{
  constructor(){
    this.env_file=".env";
  }
}
let currentConversationNode = conversationTree;


import { conversationTree ,extractMessages} from './conversation.js';
import {buildingShortForms,verticalShortForms } from './shortforms.js';

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  const sendButton = document.getElementById("messages");


  
  output(currentConversationNode.message, currentConversationNode.options);

  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
      //processInput(input);
    }
  });

  sendButton.addEventListener("click", () => {
    sendMessage();
  });
});

let selectedVerticalShortForm = "";
let selectedBuildingShortForm = "";
function sendMessage() {
  const inputField = document.getElementById("input");
  let input = inputField.value;
  inputField.value = "";
  //let currentConversationNode="";
  if (currentConversationNode.nodes && currentConversationNode.nodes[input]) {
    currentConversationNode = currentConversationNode.nodes[input];
    output(currentConversationNode.message, currentConversationNode.options);

    if (currentConversationNode.prompt === "SelectVertical") {
      // Store selected vertical short form
      selectedVerticalShortForm = verticalShortForms[input];
    } else if (currentConversationNode.prompt === "SelectBuilding") {
      // Store selected building short form
      selectedBuildingShortForm = buildingShortForms[input];

      // Display the selected shortforms
      console.log("Selected Vertical Short Form:", selectedVerticalShortForm);
      console.log("Selected Building Short Form:", selectedBuildingShortForm);
    }
  }

  
}
// function generateUrl(input,value1,value2) {
//   const url = `http://localhost:4000/data/${value1}/${value2}`;
//   const response = `Here is the generated URL: ${url}`;
//   //addChat(input, response);

//   return url;

  

//   // Reset the stored values
//   // value1 = "";
//   // value2 = "";
// }
// function processInput(input) {
//   if (input.startsWith("generate data")) {
//     const inputParts = input.split(" ");
//     if (inputParts.length >= 4) {
//       value1 = inputParts[2];
//       value2 = inputParts[3];
//       // const generatedUrl = generateUrl(input,value1, value2);
//       //addChat(input,`Generating url for ${value1} ${value2}`);
//       fetchExternalData(generatedUrl,input);
//     } else {
//       output("Invalid input for generating data. Please use 'generate data <value1> <value2>'.");
//     }
//   } else {
//     //let response = getResponseForInput(input);
//     output(input);
//   }
// }
function output(message, options) {
  const messagesContainer = document.getElementById("messages");

  let botDiv = document.createElement("div");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  messagesContainer.appendChild(botDiv);

  setTimeout(() => {
    botText.innerText = message;
    //messagesContainer.scrollTop = messagesContainer.scrollHeight;
  

  if (options) {
    let optionsDiv = document.createElement("div");
    optionsDiv.id = "options";
    optionsDiv.className = "options response";

    for (const option of options) {
      let optionButton = document.createElement("button");
      optionButton.textContent = option.text;

      optionButton.className = "option-button";

      optionButton.addEventListener("click", () => handleOptionClick(option.next));
      optionsDiv.appendChild(optionButton);

      optionsDiv.appendChild(document.createElement("br"));
       
    }

    messagesContainer.appendChild(optionsDiv);
  }
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
},1000);
}

function handleOptionClick(nextNode) {
  currentConversationNode = conversationTree.nodes[nextNode];
  addChat(currentConversationNode.message, currentConversationNode.options);
}


// function output(input) {
//   let product;

//   // Regex remove non word/space chars
//   // Trim trailing whitespce
//   // Remove digits - not sure if this is best
//   // But solves problem of entering something like 'hi1'

//   let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
//   text = text
//     .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
//     .replace(/i feel /g, "")
//     .replace(/whats/g, "what is")
//     .replace(/please /g, "")
//     .replace(/ please/g, "")
//     .replace(/r u/g, "are you");

//   if (compare(prompts, replies, text)) { 
//     // Search for exact match in `prompts`
//     product = compare(prompts, replies, text);
//   } else if (text.match(/thank/gi)) {
//     product = "You're welcome!"
//   } //else if (text.match(/(corona|covid|virus)/gi)) {
//     // If no match, check if message contains `coronavirus`
//     //product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
//    else {
//     // If all else fails: random alternative
//     product = alternative[Math.floor(Math.random() * alternative.length)];
//   }

//   // Update DOM
//   addChat(input, product);
// }

// // function fetchExternalData(url,input) {
// //   var myHeaders = new Headers();
// //   myHeaders.append("X-M2M-Origin", "iiith_guest:iiith_guest");
// //   myHeaders.append("Accept", "application/json");

// //   var requestOptions = {
// //     method: 'GET',
// //     headers: myHeaders,
// //     redirect: 'follow'
// //   };

// //   fetch(url, requestOptions)
// //     .then(response => response.json())
// //     .then(result => {
// //       printFetchedData(result,input);
// //     }
// //       )
// //     .catch(error => console.log('error', error));
// // }

// // // function printFetchedData(data,input) {
// // //   // Convert the data to a JSON string for printing
// // //   const dataString = JSON.stringify(data, null, 2);
  
// // //   // Print the data in the chatbox
// // //   addChat(input, dataString);
// // // }
// // function printFetchedData(data, input) {
// //   let formattedData = "";

// //   for (const key in data) {
// //     if (Object.prototype.hasOwnProperty.call(data, key)) {
// //       if(key=== "Timestamp'"){

// //         const epochTimestamp =data[key];
// //         const normalTime =new Date(epochTimestamp *1000).toLocaleString();
// //         formattedData += `${key}: ${normalTime}\n`;
// //       }
// //       else{
      
// //       formattedData += `${key}: ${data[key]}\n`;
// //     }}
// //   }

//   addChat(input, formattedData);
// }
function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        // Stop inner loop when input value matches prompts
        break;
      }
    }
    if (replyFound) {
      // Stop outer loop when reply is found instead of interating through the entire array
      break;
    }
  }
  return reply;
}

// function addChat(input, product) {
//   const messagesContainer = document.getElementById("messages");

//   let userDiv = document.createElement("div");
//   userDiv.id = "user";
//   userDiv.className = "user response";
//   userDiv.innerHTML = `<span>${input}</span>`;
//   messagesContainer.appendChild(userDiv);

//   let botDiv = document.createElement("div");
//   let botImg = document.createElement("img");
//   let botText = document.createElement("span");
//   botDiv.id = "bot";
//   //botImg.src = "images/bot-mini.png";
//   //botImg.className = "avatar";
//   botDiv.className = "bot response";
//   botText.innerText = "Typing...";
//   botDiv.appendChild(botText);
//   botDiv.appendChild(botImg);
//   messagesContainer.appendChild(botDiv);
//   // Keep messages at most recent
//   messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

//   // Fake delay to seem "real"
//   setTimeout(() => {
//     botText.innerText = `${product}`;
//     //textToSpeech(product)
//   }, 2000
//   )

// }

function addChat(message, options) {
  const messagesContainer = document.getElementById("messages");

  let botDiv = document.createElement("div");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  messagesContainer.appendChild(botDiv);

  // Simulate bot typing delay
  setTimeout(() => {
    botText.innerText = message;
    if (options) {
      let optionsDiv = document.createElement("div");
      optionsDiv.id = "options";
      optionsDiv.className = "options response";

      for (const option of options) {
        let optionButton = document.createElement("button");
        optionButton.textContent = option.text;
        optionButton.addEventListener("click", () => handleOptionClick(option.next));
        optionsDiv.appendChild(optionButton);
      }

      messagesContainer.appendChild(optionsDiv);
    }
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, 1000);
}




// Used to get the popup open and close 

class Chatbox {
  constructor() {
      this.args = {
          openButton: document.querySelector('.chatbox__button'),
          chatBox: document.querySelector('.chatbox__support'),
          sendButton: document.querySelector('.send__button'),
          minimizeButton: document.querySelector('.minimize-btn'), // New minimize button



      };
      

      this.state = false;
      this.messages = [];
  }

  display() {
      const {openButton, chatBox, sendButton,minimizeButton} = this.args;
      
      
      openButton.addEventListener('click', () => this.toggleState(chatBox));
      minimizeButton.addEventListener('click', () => this.toggleState(chatBox)); // Minimize button event listener
      sendButton.addEventListener('click', () => this.onSendButton(chatBox));

      const node = chatBox.querySelector('input');
      node.addEventListener("keyup", ({key}) => {
          if (key === "Enter") {
              this.onSendButton(chatBox);
          }
      });
  }

  toggleState(chatbox) {
      this.state = !this.state;

      // show or hides the box
      if(this.state) {
          chatbox.classList.add('chatbox--active')
      } else {
          chatbox.classList.remove('chatbox--active')
      }
  }

  onSendButton(chatbox) {
      var textField = chatbox.querySelector('input');
      let text1 = textField.value.trim();
      if (text1 === "") {
          return;
      }

      let msg1 = { name: "User", message: text1 }
      this.messages.push(msg1);

      fetch('/predict', {
          method: 'POST',
          body: JSON.stringify({ message: text1 }),
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
        })
        .then(r => r.json())
        .then(r => {
          let msg2 = { name: "Sam", message: r.answer };
          this.messages.push(msg2);
          this.updateChatText(chatbox)
          textField.value = ''

      }).catch((error) => {
          console.error('Error:', error);
          this.updateChatText(chatbox)
          textField.value = ''
        });
  }

  updateChatText(chatbox) {
      var html = '';
      this.messages.slice().reverse().forEach(function(item, index) {
          if (item.name === "Sam")
          {
              html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
          }
          else
          {
              html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
          }
        });

      const chatmessage = chatbox.querySelector('.chatbox__messages');
      chatmessage.innerHTML = html;
  }
}


const chatbox = new Chatbox();
chatbox.display();