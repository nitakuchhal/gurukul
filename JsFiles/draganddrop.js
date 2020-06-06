"use strict";
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer && ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer && ev.dataTransfer.getData("text");
    if (data) {
        const elem = document.getElementById(data);
        elem && ev.currentTarget && ev.currentTarget.appendChild(elem);
    }
}
function DraggableText(data, id) {
    for (var i = 0; i < data.length; i++) {
        var el = document.createElement("span");
        el.id = "text" + i;
        el.draggable = true;
        el.innerHTML = data[i];
        el.ondragstart = function (ev) { drag(ev); };
        const elem = document.getElementById(id);
        elem && elem.appendChild(el);
    }
}
async function loadDoc() {
    const response = await fetch("./wordsInHindi/newWordInHindi.json");
    myString(await response.json());
}
// loadDoc();
/* function myPrintData(jsMydata,i)
{

    var letterString = jsMydata[i].letters;
    var letterArray = letterString.split(' ');
    var currentWord = jsMydata[i].word;
    DraggableText(letterArray);
    var obj = new compareString(currentWord, letterArray,i);

} */
//var data = ['कि', 'ता', 'ब'];
//var a = new DraggableText( data);
//a.addSpan(); 
//# sourceMappingURL=draganddrop.js.map