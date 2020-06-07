"use strict";
class scramble {
    constructor() {
        this.#answerString = "";
        this.#alternateString = "";
        this.#i = 0;
        const self = this;
        const btmScrambleNext = document.getElementById('btmScrambleNext');
        document.getElementById('btnScramble').onclick = function () {
            self._compareJumbledArray();
            btmScrambleNext.disabled = false;
        };
        btmScrambleNext.onclick = function () {
            self._nextQuestion();
        };
        loadscrambledSentence().then((response) => {
            self.#scrambledSentenceJsonData = response;
            self._scrambledString();
        });
    }
    #answerString;
    #alternateString;
    #i;
    #scrambledSentenceJsonData;
    _scrambledString() {
        //debugger;   a = scrambledSentenceJsonData;      console.log(scrambledSentenceJsonData);
        let displayString = "";
        let sentence = this.#answerString = this.#scrambledSentenceJsonData[this.#i].sentence;
        if (this.#scrambledSentenceJsonData[this.#i].alternate) {
            this.#alternateString = this.#scrambledSentenceJsonData[this.#i].alternate;
        }
        let JumbledArray = getJumbledSting(sentence);
        DraggableText(JumbledArray, "divScramble");
        let self = this;
        // this._compareJumbledArray();          // displayString += `${scrambledSentenceJsonData[i].jumbledSentence}  <br>`;
        // const unscramble = document.getElementById("divUnScramble");
        // unscramble && (unscramble.innerHTML = displayString);
        //checkAndUpdate();
    }
    _compareJumbledArray() {
        let droppedString = '';
        const divUnScramble = document.getElementById('divUnScramble');
        for (let j = 0; j < divUnScramble.children.length; j++) {
            droppedString += divUnScramble.children[j].innerHTML + " ";
        }
        document.getElementById("displayResult").innerHTML =
            ((droppedString.trim() === this.#answerString) || (droppedString.trim() === this.#alternateString)) ?
                "correct" : "Wrong";
    }
    //document.getElementById('btnScramble')!.onclick as HTMLButtonElement = compareJumbledArray();
    _nextQuestion() {
        if (this.#i === this.#scrambledSentenceJsonData.length - 1) {
            document.getElementById('btmScrambleNext').innerHTML = "Done";
        }
        else {
            document.getElementById('divUnScramble').innerHTML = "";
            document.getElementById('divScramble').innerHTML = "";
            document.getElementById('displayResult').innerHTML = "";
            document.getElementById('btmScrambleNext').disabled = true;
            this.#i = this.#i + 1;
            this._scrambledString();
        }
    }
}
let a = new scramble();
async function loadscrambledSentence() {
    const response = await fetch("./wordsInHindi/newScrambledSentence.json");
    //scramble.
    return await response.json();
}
function getJumbledSting(currentScrambledString) {
    let originalArr = currentScrambledString.split(' ');
    let jumbledString = [];
    while (originalArr.length !== 0) {
        let getindex = Math.floor(Math.random() * originalArr.length);
        const spliceword = originalArr.splice(getindex, 1)[0];
        if (spliceword) {
            jumbledString.push(spliceword);
        }
    }
    return jumbledString;
}
//# sourceMappingURL=scrambledSentence.js.map