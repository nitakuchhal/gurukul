function allowDrop(ev : Event)
{
    ev.preventDefault();
}

function drag(ev : DragEvent)
{
    ev.dataTransfer && ev.dataTransfer.setData("text", (ev.target! as HTMLElement).id);
}

function drop(ev: DragEvent)
{
    ev.preventDefault();
    var data = ev.dataTransfer && ev.dataTransfer.getData("text");
    if (data)
    {
        const elem = document.getElementById(data);
        elem && ev.currentTarget && (ev.currentTarget as HTMLElement).appendChild(elem);
    }
}

function DraggableText(data : string[], id: string)
{
    for (var i = 0; i < data.length; i++)
    {
        var el = document.createElement("span");
        el.id = "text" + i;
        el.draggable = true;
        el.innerHTML = data[i];
        el.ondragstart = function (ev) { drag(ev); }
        const elem = document.getElementById(id);
        elem && elem.appendChild(el);
    }
}


async function loadDoc()
{
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