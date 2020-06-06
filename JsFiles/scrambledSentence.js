"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _answerString, _i, _scrambledSentenceJsonData;
class scramble {
    constructor() {
        _answerString.set(this, void 0);
        _i.set(this, void 0);
        _scrambledSentenceJsonData.set(this, void 0);
        __classPrivateFieldSet(this, _answerString, "");
        __classPrivateFieldSet(this, _i, 0);
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
            __classPrivateFieldSet(self, _scrambledSentenceJsonData, response);
            self._scrambledString();
        });
    }
    _scrambledString() {
        //debugger;   a = scrambledSentenceJsonData;      console.log(scrambledSentenceJsonData);
        let displayString = "";
        let sentence = __classPrivateFieldSet(this, _answerString, __classPrivateFieldGet(this, _scrambledSentenceJsonData)[__classPrivateFieldGet(this, _i)].sentence);
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
            droppedString.trim() === __classPrivateFieldGet(this, _answerString) ? "correct" : "Wrong";
    }
    //document.getElementById('btnScramble')!.onclick as HTMLButtonElement = compareJumbledArray();
    _nextQuestion() {
        if (__classPrivateFieldGet(this, _i) === __classPrivateFieldGet(this, _scrambledSentenceJsonData).length - 1) {
            document.getElementById('btmScrambleNext').innerHTML = "Done";
        }
        else {
            document.getElementById('divUnScramble').innerHTML = "";
            document.getElementById('divScramble').innerHTML = "";
            document.getElementById('displayResult').innerHTML = "";
            document.getElementById('btmScrambleNext').disabled = true;
            __classPrivateFieldSet(this, _i, __classPrivateFieldGet(this, _i) + 1);
            this._scrambledString();
        }
    }
}
_answerString = new WeakMap(), _i = new WeakMap(), _scrambledSentenceJsonData = new WeakMap();
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