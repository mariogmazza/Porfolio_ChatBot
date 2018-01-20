// import { setTimeout, clearTimeout } from "timers";

const nav = document.querySelector('#navigation');
const navTop = nav.offsetTop;

function stickyNavigation() {
  //console.log('navTop = ' + navTop);
  //console.log('scrollY = ' + window.scrollY);

  if (window.scrollY >= navTop) {
    // nav offsetHeight = height of nav
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else{ 
      console.log("hey");
   // document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', stickyNavigation);




// THIS IS MY BASIC CHATBOT 

document.addEventListener('DOMContentLoaded', function () {

    // var c=0;
    // $('.play').hover(function(){  
     
    //     $('.intro').addClass('playback');  
      
    // });

    // $("p").hover(function(){
    //     $('.intro').removeClass('playback');     
    //    }); 


  var trigger = [
      ["hi", "hey", "hello", "aloha", "yo", "sup", "sup bro", "hey there", "what is up"],
      ["how are you", "how is life", "how are things"],
      ["what are you doing", "what is going on"],
      ["how old are you"],
      ["who are you", "are you human", "are you bot", "are you human or bot"],
      ["who created you", "who made you"],
      ["your name please","who are you" ,"your name", "may i know your name", "what is your name"],
      ["i love you", "do you like me","i like you"],
      ["happy", "good"],
      ["bad", "bored", "tired"],
      ["help me", "tell me story", "tell me joke","can you help me"],
      ["ah", "yes", "ok", "okay", "nice", "thanks", "thank you"],
      ["bye", "good bye", "goodbye", "see you later", "later"],
      ["you suck", "you stupid", "you're stupid", "stupid machine", "you dumb", "you're dumb"],
      ["tell me about you","tell me more about you", "tell me more about yourself"],
      ["what type of music do you like","what is your favorite music"],
      ["what can you do", "what do you do", "what is your purpose","what else do you do" ,"what else can you do","now what"],
      ["do you like me"],
      ["what do you like to do", "what do you like", "what is your favorite thing to do", "what is your favorite passtime"]
  ];


  var reply = [
      ["Hi, How may I help you?", "Hey there! what can I do for you?", "Hello, How can I help you?"],
      ["Fine", "Pretty well", "Fantastic"],
      ["Nothing much", "About to go to sleep", "Can you guest?", "I don't know actually"],
      ["I am 1 day old"],
      ["I am just a bot", "I am a bot. What are you?"],
      ["Gaston Mazza", "The Creator"],
      ["I am Jenny Gaston's personal assistant","Hello there I'm Jenny it's nice to meet you!"],
      ["I love you too", "Me too","I like you too"],
      ["Have you ever felt bad?", "Glad to hear it"],
      ["Why?", "Why? You shouldn't!", "Try watching TV"],
      ["I will", "What about?"],
      ["Tell me a story", "Tell me a joke", "Tell me about yourself", "You are welcome"],
      ["Bye", "Goodbye", "See you later", "See you later alligator"],
      ["What do you need meatbag!!", "To Error is human, I never error!"],
      ["I'm one of the most sophisticated AI's in the market ;)", "Well my mom says that mind is made out of Javascript, my body is composed of HTML and my looks come from my aunt CSS!"],
      ["I'm just a country girl!","You can say that country makes my digital bones move!"],
      ["My sole purpose is to help you get to know my boss (aka Gaston) so he can finally find a job and stops messing with my code! ", "You can ask me anything in reference to Mario's resume things like FULL RESUME, PICTURE, EXPERIENCE, SKILLS, EDUCATION, etc. You get the idea!! "],
      ["You know what I think I do!", "After getting to know you! you can say I do!"],
      ["You can say my favorite pass time is traversing to data found in servers"]
  ];


  document.querySelector("#input").addEventListener("keypress", function (e) {
      var key = e.which || e.keyCode;
      if (key === 13) { //Enter button is pressed
          var input = document.getElementById("input").value;
          document.getElementById("user").innerHTML = input;
          output(input);
      }
  });

  function output(input) {
      try {
          var product = input + "=" + eval(input); // if its an numerical computation. 
      } catch (e) {
          var text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, ""); //remove all chars except words, space and 

          text = text.replace(/ a /g, " ").replace(/ok /g,"").replace(/[ \t]+$/ ,"").replace(/i feel /g, "").replace(/whats/g, "what is").replace(/please /g, "").replace(/ please/g, "");

          console.log(text + " this is in output func");
          if (compare(trigger, reply, text)) {
              var product = compare(trigger, reply, text);
          } else {
              //var product = alternative[Math.floor(Math.random()*alternative.length)];
              var product = alternative(text);
          }
      }
      document.getElementById("chatbot").innerHTML = product;
      speak(product);
      $('#myModal').modal('toggle');

      document.getElementById("input").value = ""; //clear input value
  }

  function compare(arr, array, string) {
      var item;
      for (let x = 0; x < arr.length; x++) {
          for (let y = 0; y < array.length; y++) {
              if (arr[x][y] == string) {
                  items = array[x];
                  item = items[Math.floor(Math.random() * items.length)];
              }
          }
      }
      return item;
  }

/* 
This function is invoke in case the user 
input is NOT an standard or predetermined question. 
It will split the input and call a function to assign 
a value to each word
*/

  function alternative(input) {
      let fullArr = [];
      let splitQuetion = input.split(" ");
      let count = 0;
      let myObj = {};

      while (count !== splitQuetion.length) {

          if (isItThere(splitQuetion[count]) !== -1) {
              myObj[splitQuetion[count]] = isItThere(splitQuetion[count]) // input.indexOf(splitQuetion[count]);
              fullArr.push(isItThere(splitQuetion[count]));
          }

          count++;
      }

      return analysisArr(myObj);
  }













  /*This function checks the pattern in theObj 
    to make sure the user is requesting valid information
    and calls the appropiate function.
  */
  function analysisArr(theObj) {

      inputArr = Object.values(theObj);

      console.log(inputArr);

      if (inputArr[0] == "Q") { // The string input is " very likely" a question 
          if ((inputArr.includes("A") && inputArr.includes("O") && inputArr.includes("N")) ||
              (inputArr.includes("A") && inputArr.includes("O")) || inputArr.includes("S")) {

              if (inputArr.includes("S") && inputArr.includes("AM")) {
                  return `Well my ${ getKeyByValue(theObj,"AM") } in the following subject ${getKeyByValue(theObj,"S")} is (should go an amount specific to the S value)`;
              }

              if (inputArr.includes("AM") && inputArr.includes("O")) {
                  return `My ${getKeyByValue(theObj,"AM")} ${getKeyByValue(theObj,"O")} is best describe as Awsome!`;
              }


              return `Here is what you've asked ! ${ 
                
                allAnswers[getKeyByValue(theObj, "O")]
            
            }`;



          }




      } else if (inputArr[0] == "N" && inputArr.includes("O")) {
          return `Here: ${getKeyByValue(theObj,"O")} what else you need?`;

      } else if (inputArr.length == 1 && inputArr.includes("O")) {
          return `Here you go![1] ${getKeyByValue(theObj,"O")}`;
      } else if (inputArr[0] == "A" && inputArr.includes("O")) {
          return `Here you go [2]! ${getKeyByValue(theObj,"O")}`;
      }




  }



  const allAnswers ={
        skills:["React", "Javascript", "ES6", "Express", "MongoDB", "Git", "Java", "jQuery", "SQL", "Responsive design", "Bootstap", "HTML5", "CSS3"],
        picture: "doggy"

  }











  function getKeyByValue(object, value) {
      return Object.keys(object).find(key => object[key] === value);
  }


  function isItThere(thaWord) {
      const QuestionConstruct = [
          ["what", "where", "who", "when", "why", "how", "can", "could", "do", "does", "would"],
          ["i", "mine", "me", "my", "they", "we", "she", "he", "them"],
          ["need", "want", "favorite", "show", "get", "fetch", "serve", "give", "have", "has", "tell", "share", "provide", "request"],
          ["full resume", "attribute", "languages", "name", "background", "picture", "pics", "pictures", "pic", "job", "jobs", "skills", "contact info", "schooling", "education", "school", "degree", "degrees"],
          ["you", "your", "mario", "mazza", "marios", "jeanny", "him", "his", "he"],
          ["java", "javascript", "python", "html", "html5", "css", "css3", "nodejs", "reactjs", "react", "language"],
          ["level", "experience", "amount", "best", "more", "proficient", "most"]
      ];

      for (let x = 0; x < QuestionConstruct.length; x++) {
          for (let y = 0; y < QuestionConstruct[x].length; y++) {
              if (QuestionConstruct[x][y] == thaWord) {
                  switch (x) {
                      case 0:
                          return "Q"; // Question words 
                      case 1:
                          return "U"; // User identifier
                      case 2:
                          return "N"; // Needs words for request 
                      case 3:
                          return "O"; // General "objects" or "information"
                      case 4:
                          return "A"; // AI identifier
                      case 5:
                          return "S"; // Specific skills 
                      case 6:
                          return "AM";// AMOUNT ex. quantifying words
                      default:
                          break;
                  }
              }
          }
      }
      return -1;
  }


  function speak(string) {
      var utterance = new SpeechSynthesisUtterance();
      utterance.voice = speechSynthesis.getVoices().filter(function (voice) {
          return voice.name == "";
      })[0];
      utterance.text = string;
      utterance.lang = "en-US";
      utterance.volume = 1; //0-1 interval
      utterance.rate = 0.9;
      utterance.pitch = 2; //0-2 interval
      speechSynthesis.speak(utterance);
  }



  /*
  list of question NOT YET SOLVE 
  what are you most proficient at ? -- this is are  AM AM 
  what technology are you most proficient at ? -- AM AM 
  ok tell me more about mario.
  */


}, false);