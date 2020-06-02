function allowDrop(ev)
{
    ev.preventDefault();
}

function drag(ev)
{
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev)
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.currentTarget.appendChild(document.getElementById(data));
}



function DraggableText(data, id)
{
    for (var i = 0; i < data.length; i++)
    {
        var el = document.createElement("span");
        el.id = "text" + i;
        el.draggable = true;
        el.innerHTML = data[i];
        el.ondragstart = function (ev) { drag(ev); }
        document.getElementById(id).appendChild(el);
    }
}



function loadDoc()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function ()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            var jsMydata = JSON.parse(this.responseText);

            myString(jsMydata);
            // document.getElementById("div2").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "./wordsInHindi/newWordInHindi.json", true);
    xhttp.send();
}
//loadDoc();

async function loadDoc2()
{
    const response = await fetch("./wordsInHindi/newWordInHindi.json");
    myString(await response.json());
}

loadDoc2();


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