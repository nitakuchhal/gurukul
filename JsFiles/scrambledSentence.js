"use strict";
async function loadscrambledSentence() {
    const response = await fetch("./wordsInHindi/scrambledSentence.json");
    scrambledString(await response.json());
}
loadscrambledSentence();
function scrambledString(scrambledSentenceJsonData) {
    //debugger;
    //a = scrambledSentenceJsonData;      console.log(scrambledSentenceJsonData);
    let displayString = "";
    let i = 0;
    //for (let i = 0; i < scrambledSentenceJsonData.length; i++)
    {
        let newDataToBeDragged = document.createElement("span");
        newDataToBeDragged.id = "scramble" + i;
        //for (let j = 0; j < scrambledSentenceJsonData[i].jumbledSentence.length; j++)
        //{
        newDataToBeDragged.draggable = true;
        newDataToBeDragged.innerHTML = scrambledSentenceJsonData[i].jumbledSentence;
        newDataToBeDragged.ondragstart = function (ev) { drag(ev); };
        const htmlElem = document.getElementById('divScramble');
        htmlElem && htmlElem.appendChild(newDataToBeDragged);
        //}
        //DraggableText(scrambledSentenceJsonData.jumbledSentence, 'divScramble');
        displayString += `${scrambledSentenceJsonData[i].jumbledSentence}  <br>`;
    }
    //DraggableText(jumbledSentence);
    const unscramble = document.getElementById("divUnScramble");
    unscramble && (unscramble.innerHTML = displayString);
}
