async function loadscrambledSentence()
{
    const response = await fetch("./wordsInHindi/scrambledSentence.json");
    scrambledString(await response.json());
}
loadscrambledSentence();


function scrambledString(scrambledSentenceJsonData)
{
    //debugger;
    //a = scrambledSentenceJsonData;      console.log(scrambledSentenceJsonData);
    let displayString = "";
    for (let i = 0; i < scrambledSentenceJsonData.length; i++)
    {
        // var newDataToBeDragged = document.createElement("span");
        // newDataToBeDragged.id = "scramble" + i;
        // newDataToBeDragged.draggable = true;
        // newDataToBeDragged.innerHTML = scrambledSentenceJsonData[i].jumbledSentence;
        // newDataToBeDragged.ondragstart = function (ev) { drag(ev); }
        // document.getElementById('divScramble').appendChild(newDataToBeDragged);
        DraggableText(scrambledSentenceJsonData[i].jumbledSentence, 'divScramble');

        displayString += `${ scrambledSentenceJsonData[i].jumbledSentence }  <br>`;

    }

    //DraggableText(jumbledSentence);
    document.getElementById("divUnScramble").innerHTML = displayString;

}