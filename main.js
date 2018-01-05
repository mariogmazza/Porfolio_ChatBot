document.addEventListener('DOMContentLoaded', function(){ 
    // your code goes here

        
        var trigger = [
			["hi", "hey", "hello", "aloha", "yo", "sup", "sup bro", "hey there"],
			["how are you", "how is life", "how are things"],
			["what are you doing", "what is going on"],
			["how old are you"],
			["who are you", "are you human", "are you bot", "are you human or bot"],
			["who created you", "who made you"],
			["your name please", "your name", "may i know your name", "what is your name"],
			["i love you"],
			["happy", "good"],
			["bad", "bored", "tired"],
			["help me", "tell me story", "tell me joke"],
			["ah", "yes", "ok", "okay", "nice", "thanks", "thank you"],
			["bye", "good bye", "goodbye", "see you later"]
		];
		var reply = [
			["Hi, How may I help you?", "Hey there! what can I do for you?", "Hello, How can I help you?"],
			["Fine", "Pretty well", "Fantastic"],
			["Nothing much", "About to go to sleep", "Can you guest?", "I don't know actually"],
			["I am 1 day old"],
			["I am just a bot", "I am a bot. What are you?"],
			["Kani Veri", "My God"],
			["I am Jeanny Mario's personal assistant"],//, "I don't have a name"],
			["I love you too", "Me too"],
			["Have you ever felt bad?", "Glad to hear it"],
			["Why?", "Why? You shouldn't!", "Try watching TV"],
			["I will", "What about?"],
			["Tell me a story", "Tell me a joke", "Tell me about yourself", "You are welcome"],
			["Bye", "Goodbye", "See you later"]
		];

		document.querySelector("#input").addEventListener("keypress", function (e) {
			var key = e.which || e.keyCode;
			if (key === 13) { //Enter button
				var input = document.getElementById("input").value;
				document.getElementById("user").innerHTML = input;
				output(input);
			}
		});

		function output(input) {
			try {
				var product = input + "=" + eval(input); // if its not an numerical computation. 
			} catch (e) {
				var text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, ""); //remove all chars except words, space and 
				text = text.replace(/ a /g, " ").replace(/i feel /g, "").replace(/whats/g, "what is"); //.replace(/please /g, "").replace(/ please/g, "");
				if (compare(trigger, reply, text)) {
					var product = compare(trigger, reply, text);
				} else {
					//var product = alternative[Math.floor(Math.random()*alternative.length)];
					var product = alternative(text);
				}
			}
			document.getElementById("chatbot").innerHTML = product;
		//	speak(product); THIS IS TEMP COMMENT
			document.getElementById("input").value = ""; //clear input value
		}

		function compare(arr, array, string) {
			var item;
			for (var x = 0; x < arr.length; x++) {
				for (var y = 0; y < array.length; y++) {
					if (arr[x][y] == string) {
						items = array[x];
						item = items[Math.floor(Math.random() * items.length)];
					}
				}
			}
			return item;
		}

		function alternative(input) {

			const possibleQuest = ["what", "where", "who", "when", "why", "how","can", "could","do","does"];
            const UserPronouns = ["i", "mine", "me", "my"];
            const needs= ["need","want","get","fetch","serve","give","have","has"];
            let   listOfThing=["resume","picture","pics","pictures","pic","job","jobs","skills"];
            const AI_IDs = ["you", "your","mario","mazza"];
            
            let fullArr=[];

            let splitQuetion = input.split(" ");

            let check = isItThere(splitQuetion, possibleQuest);
			if (check !== -1) {
                fullArr.push(check.word);
            }else{
                fullArr.push("none");
            }

             check = isItThere(splitQuetion, UserPronouns);
             if(check !== -1){
                    fullArr.push(check.word);
            }else{
                fullArr.push("none");
            }

            check=isItThere(splitQuetion,needs);
            if(check !== -1){
                fullArr.push(check.word);
            }else{
            fullArr.push("none");
            }

            check=isItThere(splitQuetion,AI_IDs);
            if(check !== -1){
                fullArr.push(check.word);
            }else{
              fullArr.push("none");
            }
           return analysisArr(fullArr);
		}

        function analysisArr(inputArr){
            if(inputArr[0]!=="none"){ // check if it is a basic question??
                if(inputArr[1]!=="none"){ // check if user is refering to themselve
                    if(inputArr[1].position !== 1){
                        
                    }
                }




            }else{
                return "pepe";
            }

        }


		function isItThere(userQuestArr, storedQuest) {

			for (let i = 0; i < storedQuest.length; i++) {

				let tempWord = storedQuest[i];

				for (let j = 0; j < userQuestArr.length; j++) {

					if (tempWord == userQuestArr[j]) {

                        return {word:tempWord,
                                position:j};
					}
				}
			}
			return -1;
		}

		function speak(string) {
			var utterance = new SpeechSynthesisUtterance();
			utterance.voice = speechSynthesis.getVoices().filter(function (voice) {
				return voice.name == "Agnes";
			})[0];
			utterance.text = string;
			utterance.lang = "en-US";
			utterance.volume = 1; //0-1 interval
			utterance.rate = 0.8;
			utterance.pitch = 2; //0-2 interval
			speechSynthesis.speak(utterance);
		}


    }, false);