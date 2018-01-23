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

// document.addEventListener('DOMContentLoaded', function () {

    // var c=0;
    // $('.play').hover(function(){  
     
    //     $('.intro').addClass('playback');  
      
    // });

    // $("p").hover(function(){
    //     $('.intro').removeClass('playback');     
    //    }); 


  var trigger = [
      ["hi", "hey", "hello", "aloha", "yo", "sup", "sup bro", "hey there", "what is up"],
      ["how are you", "how is life", "how are things","hows life"],
      ["what are you doing", "what is going on"],
      ["how old are you"],
      ["who are you", "are you human", "are you bot", "are you human or bot"],
      ["who created you", "who made you"],
      ["do you have a name","your name please","who are you" ,"your name", "may i know your name", "what is your name"],
      ["i love you","i like you","do you love me","don't you like me","you love me"],
      ["happy", "good","im happy","im good","i am happy","i am good"],
      ["bad", "bored", "im sad","tired","im bored", "i am bored","you are boring"],
      ["help me", "tell me story", "tell me joke","can you help me"],
      ["ah", "yes", "ok", "okay", "nice", "thanks", "thank you"],
      ["bye", "good bye", "goodbye", "see you later", "later"],
      ["you suck", "you stupid", "youre stupid", "stupid machine", "you dumb", "youre dumb"],
      ["tell me about you","tell me more about you", "tell me more about yourself","tell me about yourself"],
      ["what type of music do you like","what kind of music do you like","what is your favorite music"],
      ["what can you do","tell me what you can do","tell me what can you do","command","commands", "what do you do","what can you do for me", "what is your purpose","what else do you do" ,"what else can you do","now what"],
      ["do you like me"],
      ["what do you like to do", "what do you like","what is your favorite pastime", "what is your favorite thing to do", "what is your favorite passtime"],
      ["are you smart","how smart are you","you smart"],
      ["do you have the time","do you know the time", "what time is it","can you tell me the time"]
  ];


  var reply = [
      ["Hi, How may I help you?", "Hey there! what can I do for you?", "Hello, How can I help you?"],
      ["Fine", "Pretty well", "Fantastic"],
      ["Nothing much", "About to go to sleep", "Can you guest?", "I don't know actually"],
      ["I am 1 day old"],
      ["I am just a bot", "I am a bot. What are you?"],
      ["Gaston Mazza", "The Creator"],
      ["I am Alex Gaston's personal assistant","Hello there I'm Alex it's nice to meet you!"],
      ["I love you too", "Me too","I like you too"],
      ["Have you ever felt bad?", "Glad to hear it"],
      ["Why?", "Why? You shouldn't!", "Try watching TV"],
      ["I will", "What about?"],
      ["Tell me a story", "Tell me a joke", "Tell me about yourself", "You are welcome"],
      ["Bye", "Goodbye", "See you later", "See you later alligator"],
      ["What do you need meatbag!!", "To Error is human, I never error!"],
      ["I'm just zero's an one's!","I'm one of the most sophisticated AI's in the market ;)", "Well my mom says that mind is made out of Javascript, my body is composed of HTML and my looks come from my aunt CSS!"],
      ["You can say that country music makes my digital bones move!"],
      ["My sole purpose is to help you get to know my boss (aka Gaston) so he can finally find a job and stops messing with my code! ", "You can ask me anything in reference to Gaston's resume things like RESUME, PICTURE, EXPERIENCE, SKILLS, EDUCATION, etc. You get the idea!! "],
      ["You know what I think I do!","I like you too","After getting to know you! you can say I do!"],
      ["You can say my favorite pastime is traversing to data found in servers","I love listening to people's life stories"],
      ["I'd like to think so!","My Mom says so :)","Well my state of the art AI's has no comparison :)","Very Very much!"],
      [`here: ${getMeTheTime()} `]
  ];

  function getMeTheTime(){
   const d = new Date();
   let h = d.getHours(); 
   let m = d.getMinutes(); 
//    let s =  d.getSeconds(); 
    return h+": "+m;
  }

  document.querySelector("#input").addEventListener("keypress", function (e) {
      var key = e.which || e.keyCode;
      if (key === 13) { //Enter button is pressed
          var input = document.getElementById("input").value;

        //   document.getElementById("user").innerHTML = input;
          output(input);
          document.getElementById("input").value = ""; //clear input value

      }
  });

 





  function output(input) {
      try {
          var product = input + "=" + eval(input); // if its an numerical computation. 
      } catch (e) {
          var text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, ""); //remove all chars except words, space and 

          text = text.replace(/ a /g, " ").replace(/because /g,"").replace(/ because/g,"").replace(/ok /g,"").replace(/[ \t]+$/ ,"").replace(/i feel /g, "").replace(/just /g,"").replace(/whats/g, "what is").replace(/please /g, "").replace(/ please/g, "");

          console.log(text + " AFTER CLEANING");

          if (compare(trigger, reply, text)) {
              var product = compare(trigger, reply, text);
          } else {
              //var product = alternative[Math.floor(Math.random()*alternative.length)];
              var product = alternative(text);
          }
      }
      document.getElementById("chatbot").innerHTML = product;
      speak(product);
    //   $('#myModal').modal('toggle');

    //   document.getElementById("input").innerHTML = ""; //clear input value
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
    //   let fullArr = [];
      let splitQuetion = input.split(" ");
      let count = 0;
      let myObj = {};

      while (count !== splitQuetion.length) {

          if (isItThere(splitQuetion[count]) !== -1) {
              myObj[splitQuetion[count]] = isItThere(splitQuetion[count]) // input.indexOf(splitQuetion[count]);
            //   fullArr.push(isItThere(splitQuetion[count]));
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

    /* Q - BLOCK 1 ***************************************  */
          if ((inputArr.includes("A") && inputArr.includes("O") && inputArr.includes("N")) ||
              (inputArr.includes("A") && inputArr.includes("O")) || inputArr.includes("S")) {

              if (inputArr.includes("S") && inputArr.includes("AM")) {
                  return `Well my ${ getKeyByValue(theObj,"AM") } in the following subject ${getKeyByValue(theObj,"S")} is (should go an amount specific to the S value)`;
              }

              if (inputArr.includes("AM") && inputArr.includes("O")) {
                  return `My ${getKeyByValue(theObj,"AM")} in ${getKeyByValue(theObj,"O")} is best describe as Awsome!`;
              };

            // returns start Q has A and O and N || Q A O || just S 
              return `Here is what you've asked ! ${allAnswers[getKeyByValue(theObj, "O")] }`;
          }

    /* **************************************************** */

    /* Q - BLOCK 2 *************************************** */
         
          if(inputArr.includes("N") && inputArr[inputArr.length-1]==="A"){
            console.log("Im inside 1");
            return `Let me see. ${allAnswers["background"]}`;
          }    

    /*  *************************************************** */

    /* START != Q - BLOCK (NOT Q) ************************************* */

        }else  if (inputArr.includes("Q") && inputArr.includes("N") && inputArr[inputArr.length-1]==="A"){
            console.log("Im inside 2 "+inputArr[inputArr.length-1]);
                return `Let me see. ${allAnswers["background"]}`;
        

          // IF PHRASE STARTS WITH A "NEED"
      } else if (inputArr[0] == "N" ){
      if (inputArr.includes("O")) { 
          return `Here:[N][O] ${allAnswers[getKeyByValue(theObj, "O")] } what else you need?`;
      }else if(inputArr.includes("A")){
          return `Here:[N][A] ${allAnswers[getKeyByValue(theObj,"A")]}`;
      }
          // IF PHRASE JUST ASKS FOR AN "OBJECT" EX. RESUME
      } else if (inputArr.length == 1 && inputArr.includes("O")) {
          return `Here you go![just obj] ${getKeyByValue(theObj,"O")}`;

        // IF PHRASE STARTS REFERING DIRECTLY TO THE "AI" AND INCLUDES AN "OBJECT"
      } else if (inputArr[0] == "A" && inputArr.includes("O")) {
          return `Here you go [2]! ${getKeyByValue(theObj,"O")}`;

          // IF PHRASE STARTS WITH "USER ID" EX.(I , ME ..) 
      }else if(inputArr[0] == "U"){
          if(
            (inputArr.includes("N") && inputArr.includes("A") && inputArr.includes("O") &&
             inputArr.includes("Q")) 
             || 
             (inputArr.includes("N") || (inputArr.includes("A") && inputArr.includes("O")) ||
             inputArr.includes("Q"))
            //  ||
            //  (inputArr.includes("N") && inputArr.includes("A") && inputArr.includes("O") &&
            //  inputArr.includes("Q")

            ){
              return `Here:[N] ${allAnswers[getKeyByValue(theObj, "O")] } what else you need?`;
          }
      }

      /* ********************************************************* */


  }



  const allAnswers ={
        skills:["React", "Javascript", "ES6", "Express", "MongoDB", "Git", "Java", "jQuery", "SQL", "Responsive design", "Bootstap", "HTML5", "CSS3"],
        skill:["React", "Javascript", "ES6", "Express", "MongoDB", "Git", "Java", "jQuery", "SQL", "Responsive design", "Bootstap", "HTML5", "CSS3"],

        picture: "<br><img src='../img/img_gaston.jpg' id='myPic'>",
        pic: "<br><img src='../img/img_gaston.jpg' id='myPic'>",

        languages: ["Javascript", "Java"],
        language: ["Javascript", "Java"],

        background: `Although mostly self-thought He has always had a curious mind trying to understand how things work in detail, 
                     He started his college education majoring in Computer Engineering which led him to take some 
                     classes in Linear Algebra, Calculus, Java, Discrete Mathematic and some others that helps him get 
                     the 'Big picture' of programming. `,

        mario:     `Although mostly self-thought He has always had a curious mind trying to understand how things work in detail, 
                     He started his college education majoring in Computer Engineering which led him to take some 
                     classes in Linear Algebra, Calculus, Java, Discrete Mathematic and some others that helps him get 
                     the 'Big picture' of programming. `,

        contact:    "Phone number: 801-448-7820<br> Email address: gaston.mazza1@gmail.com",
        resume: "<a href='../img/Gaston_Mazza_Resume.pdf' target='_blank'>click here</a>" ,

        technologies:["React", "Javascript", "ES6", "Express", "MongoDB", "Git", "Java", "jQuery", "SQL", "Responsive design", "Bootstap", "HTML5", "CSS3"],
        technology:["React", "Javascript", "ES6", "Express", "MongoDB", "Git", "Java", "jQuery", "SQL", "Responsive design", "Bootstap", "HTML5", "CSS3"],

        phone:"801-448-7820",
        email:"gaston.mazza1@gmail.com",

        hobby:["learnig something new","rugby","coding"],
        hobbies:["learnig something new","rugby","coding"],

        interests:["making money","learning how to make more money"],
        interest:["making money","learning how to make more money"],

        references: "list of references",
        reference: "linst of reference",

        projects: "list of project",
        project: "list of projects",

        education: "<h4>2017 Cert. Full Stack Web Developer, University of Central Florida.<br>2015 Major in Computer Science, Millersville University PA.</h4>",
        schooling: "<h4>2017 Cert. Full Stack Web Developer, University of Central Florida.<br>2015 Major in Computer Science, Millersville University PA.</h4>",


        degree: "<h4>UCF Certificate Full Stack Web Developer <br>CompTia A+ </h4>",
        degrees: "<h4>UCF Certificate Full Stack Web Developer <br>CompTia A+ </h4>",

        certificate: "<h4>UCF Certificate Full Stack Web Developer <br>CompTia A+ </h4>",
        certicicates: "<h4>UCF Certificate Full Stack Web Developer <br>CompTia A+ </h4>",

        work: `
       <h4> Wells Fargo Bank, Lititz, PA			<span>     </span>October 2014 - August 2017<br>
         Personal Banker
         Expanded customer relationships by maintaining a regular follow-up process and building rapport with each customer.
         Worked closely with management to strategize sales techniques to increase branch production and customer service satisfaction.
         Goal-driven position. <br>

        CompSolutions, Salt Lake City, UT							May 2008 - July 2014
         Help Desk / Field Technician 
         Skilled problem-solver able to communicate with users at all levels of technical proficiency. Troubleshoot, resolve and document user help requests for desktop, laptop, mobile, network and peripheral problems.
         Maintain and support systems, workstations, mobile devices, printers and peripherals; respond to user service requests; and resolve trouble tickets. </h4> `,

        Frameworks: "<h4> React.js, jQuery, Express.js, Node.js, Mongoose.js, Passport.js</h4>",
        Framework:  "<h4> React.js, jQuery, Express.js, Node.js, Mongoose.js, Passport.js</h4>",

        Libraries: " <h4> React.js, jQuery, Express.js, Node.js, Mongoose.js, Passport.js </h4>",







  }











  function getKeyByValue(object, value) {
      return Object.keys(object).find(key => object[key] === value);
  }


  function isItThere(thaWord) {
      const QuestionConstruct = [
          ["what", "where", "who", "when", "why", "how", "can", "could", "do", "does", "would"],

          ["i", "mine", "me", "my", "they", "we", "she", "he", "them"],

          ["need", "want", "favorite", "show", "get", "fetch", "serve", "give", "have", "has", "tell", "share", "provide", "request"],

          ["resume","work","hobby","hobbies","interests","interest","phone","email", "technologies","technology","attribute","language","project","projects","languages", "name", "background", "picture", "pics", "pictures", "pic", "job", "jobs", "skills","skill","contact" ,"contact information", "schooling", "education", "school","experiences","framework","frameworks","libraries","certificates","certificate","degree", "degrees"],

          ["you", "your","yourself", "mario", "mazza", "marios","gaston","gastons", "alex", "him", "his", "he"],

          ["java", "javascript", "python", "html", "html5", "css", "css3", "nodejs", "reactjs", "react", "language"],

          ["level", "experience", "amount", "best", "more", "proficient", "most"],

          ["before","after","last","lattest","currently","previous","previously"]
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
                      case 7:
                          return "T" ; //Time  
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


// }, false);



var r = document.getElementById("result");


function startConverting () {
  if('webkitSpeechRecognition' in window){
      var speechRecognizer = new webkitSpeechRecognition();
      speechRecognizer.continuous = false;
      speechRecognizer.interimResults = true;
      speechRecognizer.lang = 'en-IN';
      speechRecognizer.start();

      var finalTranscripts = '';

      speechRecognizer.onresult = function(event){
          var interimTranscripts = '';
          for(var i = event.resultIndex; i < event.results.length; i++){
              var transcript = event.results[i][0].transcript;
              transcript.replace("\n", "<br>");
              if(event.results[i].isFinal){
                  finalTranscripts += transcript;

                  if(finalTranscripts){
                    document.getElementById("result").innerHTML="";
                  output(finalTranscripts);
                  }

              }else{
                  interimTranscripts += transcript;
              }
          }
          r.innerHTML = finalTranscripts + '<span style="color:#999">' + interimTranscripts + '</span>';
        //   output(finalTranscripts);
      };
      speechRecognizer.onerror = function (event) {
      };
  }else{
      r.innerHTML = 'Your browser is not supported. If google chrome, please upgrade!';
  }
}

