// CODE FOR STICKY NAV BAR

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

/* **************************************************** */


// THIS IS MY BASIC CHATBOT 



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
      ["do you have the time","do you know the time", "what time is it","can you tell me the time"],
      ["funny","you are smart","youre smart","you smart","you are cool","youre cool","you cool","you are the best","youre the best","you the best","you funny","you are funny","youre funny", "you ok","youre ok","youre awsome","you are awsome"],
      ["how can i get in touch with mario","how can i get in touch with gaston"],
      ["what do you know about gaston"]

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
      [`here: ${getMeTheTime()} `],
      ["Thanks I try really hard!","Wow Thanks!","You too!","I knew I chose the right profession","I know","Thank you","We make a good team"],
      [`<h4>Hi, my email: gaston.mazza1@gmail.com <br> phone: 801 448 7820 </h4>`],
      ["Alot more than you think! Mainly things related to his resume, you can try saying 'I need Gaston's list of skills"]
  ];


// JUST A FUNC TO GET THE CURRENT TIME
  function getMeTheTime(){
   const d = new Date();
   let h = d.getHours(); 
   let m = d.getMinutes(); 
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

      return analysisArr(myObj, splitQuetion.length);
  }



  /*This function checks the pattern in theObj 
    to make sure the user is requesting valid information
    and calls the appropiate function.
  */
  function analysisArr(theObj, phraseLength) {

      inputArr = Object.values(theObj);

      console.log(inputArr);

      if (inputArr[0] == "Q") { // The string input is " very likely" a question 

    /* Q - BLOCK 1 ***************************************  */
          if ((inputArr.includes("A") && inputArr.includes("O") && inputArr.includes("N")) ||
              (inputArr.includes("A") && inputArr.includes("O")) || inputArr.includes("S")) {

              if (inputArr.includes("S") && inputArr.includes("AM")) {
                  return `Well my ${ getKeyByValue(theObj,"AM") } in the following subject ${getKeyByValue(theObj,"S")} is the following:${allAnswers[getKeyByValue(theObj,"S")]} `;
              }

              if (inputArr.includes("AM") && inputArr.includes("O")) {
                  return `My ${getKeyByValue(theObj,"AM")} in ${getKeyByValue(theObj,"O")} is the following ${allAnswers[getKeyByValue(theObj,"O")]}`;
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
          return `Here: ${allAnswers[getKeyByValue(theObj, "O")] } what else you need?`;
      }else if(inputArr.includes("A")){
          return `Here: ${allAnswers[getKeyByValue(theObj,"A")]}`;
      }
          // IF PHRASE JUST ASKS FOR AN "OBJECT" EX. RESUME
      } else if (phraseLength == 1 && inputArr.includes("O")) {
          return `Here you go! ${allAnswers[getKeyByValue(theObj,"O")]}`;

        // IF PHRASE STARTS REFERING DIRECTLY TO THE "AI" AND INCLUDES AN "OBJECT"
      } else if (inputArr[0] == "A" && inputArr.includes("O")) {
          return `Let me see! ${allAnswers[getKeyByValue(theObj,"O")]}`;

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
              return `Here: ${allAnswers[getKeyByValue(theObj, "O")] } what else you need?`;
          }
      }

      /* ********************************************************* */

      return "I'm sorry at this moment I'm not able to answer that. You could try rephrasing your question! Thanks"

  }


// i have to change to const 
var  allAnswers ={
        skills:["React", "Javascript", "ES6", "Express", "MongoDB", "Git", "Java", "jQuery", "SQL", "Responsive design", "Bootstap", "HTML5", "CSS3"],
        skill:["React", "Javascript", "ES6", "Express", "MongoDB", "Git", "Java", "jQuery", "SQL", "Responsive design", "Bootstap", "HTML5", "CSS3"],

        picture: "<br><br><img src='../img/img_gaston.jpg' id='myPic'>",
        pic: "<br><br><img src='../img/img_gaston.jpg' id='myPic'> ",

        languages: ["Javascript", "Java"],
        language: ["Javascript", "Java"],

        javascript:` I feel pretty confortable working with Javascript. I can handle server-side and client-side Javascript.`,
        java:`I the first progamming laguage I learned but I have not been use it as much. I have pretty good understanding of it. `,

        background: ` Although mostly self-thought He has always had a curious mind trying to understand how things work in detail, 
                     He started his college education majoring in Computer Engineering which led him to take some 
                     classes in Linear Algebra, Calculus, Java, Discrete Mathematic and some others that helps him get 
                     the 'Big picture' of programming. `,

        mario:     `Although mostly self-thought He has always had a curious mind trying to understand how things work in detail, 
                     He started his college education majoring in Computer Engineering which led him to take some 
                     classes in Linear Algebra, Calculus, Java, Discrete Mathematic and some others that helps him get 
                     the 'Big picture' of programming. `,
                     
         gaston:     `Although mostly self-thought He has always had a curious mind trying to understand how things work in detail, 
                     He started his college education majoring in Computer Engineering which led him to take some 
                     classes in Linear Algebra, Calculus, Java, Discrete Mathematic and some others that helps him get 
                     the 'Big picture' of programming. `,

        contact:    "Phone number: 801-448-7820<br> Email address: gaston.mazza1@gmail.com",
        resume: "<a href='../img/Gaston_Mazza_resume_2018.pdf' target='_blank'>click here</a>" ,

        technologies:["React", "Javascript", "ES6", "Express", "MongoDB", "Git", "Java", "jQuery", "SQL", "Responsive design", "Bootstap", "HTML5", "CSS3"],
        technology:["React", "Javascript", "ES6", "Express", "MongoDB", "Git", "Java", "jQuery", "SQL", "Responsive design", "Bootstap", "HTML5", "CSS3"],

        phone:"801-448-7820",
        email:"gaston.mazza1@gmail.com",

        hobby:["learnig something new","rugby","coding"],
        hobbies:["learnig something new","rugby","coding"],

        interests:["making money","learning how to make more money"],
        interest:["making money","learning how to make more money"],

        references: "list of references",

        reference: "list of reference",

        projects: `<h4>
        Project 1:<br>
        <br>
       <span style="font-weight:bolder"> The Memory Game based on the classic Simon Game from the 80's </span> <br>
         <br>
         <br>
              About This Site <br>
        Technologies used Node/Express/React/PassportJS/MongoDB/Mongoose and some other NPM packages.
          <br>
          <br>
              The Idea behind it <br>
        Build a website that brings in people for the classic game of "Simon", if user registers the scores will be <br>saved to allow the user to measure his/her performance. When a register user logs in more "memory" games will be available to them.
          </h4>
          <h4>View from a non-registered user </h4>
          <img src='../img/Simon_nonUser.gif' id='memo1'>"
          <h4> View from a registered user </h4>
          <img src='../img/Simon_user.gif' id='memo2'>" 

          <br>
          <br>

          <h4>
        Project 2: <br>
          <br>
          <span style="font-weight:bolder"> Pay It Forward </span> <br>
         <br>
         <br>
          The Idea behind it <br>
          Matching donors with recipients who will in turn volunteer at a charity in exchange for the support. Built using node, express, EJS, Bootstrap, HTML5, mySQL, and deployed at Heroku. Developed as mobile responsive.
        </h4>
        <h4>Desktop view</h4>
        <img src='../img/desktop_view.png' id='pay1'>"
        <h4>User view</h4>
        <img src='../img/dashboard_user.png' id='pay2'>"
        <h4>Donor view</h4>
        <img src='../img/dashboard_donor.png' id='pay3'>"
        <h4>Mobile view</h4>
        <img src='../img/mobile_view.png' id='pay4'>" `,

        project:   
        `<h4>
        Project 1:<br>
        <br>
       <span style="font-weight:bolder"> The Memory Game based on the classic Simon Game from the 80's </span> <br>
         <br>
         <br>
              About This Site <br>
        Technologies used Node/Express/React/PassportJS/MongoDB/Mongoose and some other NPM packages.
          <br>
          <br>
              The Idea behind it <br>
        Build a website that brings in people for the classic game of "Simon", if user registers the scores will be <br>saved to allow the user to measure his/her performance. When a register user logs in more "memory" games will be available to them.
          </h4>
          <h4>View from a non-registered user </h4>
          <img src='../img/Simon_nonUser.gif' id='memo1'>"
          <h4> View from a registered user </h4>
          <img src='../img/Simon_user.gif' id='memo2'>" 

          <br>
          <br>

          <h4>
        Project 2: <br>
          <br>
          <span style="font-weight:bolder"> Pay It Forward </span> <br>
         <br>
         <br>
          The Idea behind it <br>
          Matching donors with recipients who will in turn volunteer at a charity in exchange for the support. Built using node, express, EJS, Bootstrap, HTML5, mySQL, and deployed at Heroku. Developed as mobile responsive.
        </h4>
        <h4>Desktop view</h4>
        <img src='../img/desktop_view.png' id='pay1'>"
        <h4>User view</h4>
        <img src='../img/dashboard_user.png' id='pay2'>"
        <h4>Donor view</h4>
        <img src='../img/dashboard_donor.png' id='pay3'>"
        <h4>Mobile view</h4>
        <img src='../img/mobile_view.png' id='pay4'>"
          
          `,

        education: "<h4>2017 Cert. Full Stack Web Developer, University of Central Florida.<br>2015 Major in Computer Science, Millersville University PA.</h4>",
        schooling: "<h4>2017 Cert. Full Stack Web Developer, University of Central Florida.<br>2015 Major in Computer Science, Millersville University PA.</h4>",


        degree: "<h4>UCF Certificate Full Stack Web Developer <br>CompTia A+ </h4>",
        degrees: "<h4>UCF Certificate Full Stack Web Developer <br>CompTia A+ </h4>",

        certificate: "<h4>UCF Certificate Full Stack Web Developer <br>CompTia A+ </h4>",
        certicicates: "<h4>UCF Certificate Full Stack Web Developer <br>CompTia A+ </h4>",

        work: 
      `<h4> Wells Fargo Bank, Lititz, PA  October 2014 - August 2017 </h4> <br>
       <h4> Personal Banker </h4>
       <h4> Expanded customer relationships by maintaining a regular follow-up process and building rapport with each customer.
         Worked closely with management to strategize sales techniques to increase branch production and customer service satisfaction.
         Goal-driven position.</h4>
        <br>
        <br>
      <h4> CompSolutions, Salt Lake City, UT May 2008 - July 2014 </h4> <br>
      <h4> Help Desk / Field Technician </h4>
      <h4> Skilled problem-solver able to communicate with users at all levels of technical proficiency. Troubleshoot, resolve and document user help requests for desktop, laptop, mobile, network and peripheral problems.
         Maintain and support systems, workstations, mobile devices, printers and peripherals; respond to user service requests; and resolve trouble tickets. </h4> `,

        frameworks: "<h4> React.js, jQuery, Express.js, Node.js, Mongoose.js, Passport.js</h4>",
        framework:  "<h4> React.js, jQuery, Express.js, Node.js, Mongoose.js, Passport.js</h4>",

        libraries: " <h4> React.js, jQuery, Express.js, Node.js, Mongoose.js, Passport.js </h4>",
        
        made:"A higher being ...Gaston ;)",
        creator: "A higher being ...Gaston ;)",
        maker: "A higher being ...Gaston ;)"
  }



  function getKeyByValue(object, value) {
      return Object.keys(object).find(key => object[key] === value);
  }


  function isItThere(thaWord) {
      const QuestionConstruct = [
          ["what", "where", "who", "when", "why", "how", "can", "could", "do", "does", "would"],

          ["i", "mine", "me", "my", "they", "we", "she", "he", "them"],

          ["need", "want", "favorite", "show", "get", "fetch", "serve", "give", "have", "has", "tell", "share", "provide", "request"],

          ["resume","work","hobby","creator","made","maker","hobbies","interests","interest","phone","email", "technologies","technology","attribute","language","project","projects","languages", "name", "background", "picture", "pics", "pictures","references","reference", "pic", "job", "jobs", "skills","skill","contact" ,"contact information", "schooling", "education", "school","experiences","framework","frameworks","libraries","library","certificates","certificate","degree", "degrees"],

          ["you", "your","yourself", "mazza","mario", "marios","gaston","gastons", "alex", "him", "his", "he"],

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
  what is your best set of skills ? - Q AM O
  */



var r = document.getElementById("result");


function startConverting () {
  if('webkitSpeechRecognition' in window){
      var speechRecognizer = new webkitSpeechRecognition();
      speechRecognizer.continuous = true;
      speechRecognizer.interimResults = true;
      speechRecognizer.lang = 'en-US';
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
      };
      speechRecognizer.onerror = function (event) {
      };
  }else{
      r.innerHTML = 'Your browser is not supported. If google chrome, please upgrade!';
  }
}
