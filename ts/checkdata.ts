interface IData
{
    word: string,
    matra: string,
    letters: string,
    image: string,
    sound: string,
}

let jsMydata: IData[];

function myString()
{
    let answerString: string;
    let i = 0;
    var audio: HTMLAudioElement;


    function myPrintData(i: number)
    {


        var letterString = jsMydata[i].letters;
        var letterArray = letterString.split(' ');
        answerString = jsMydata[i].word;
        DraggableText(letterArray, 'div2');

        (document.getElementById("myImage") as HTMLImageElement).src = "./images/" + jsMydata[i].image;

    }

    myPrintData(i);

    function audioPlay()  
    {
        var audioPath = "./Sounds/" + jsMydata[i].sound;

        audio = new Audio(audioPath);
        audio.load();
        audio.play();
    }
    document.getElementById("playAudio")!.onclick = audioPlay;


    function compare()
    {
        let divString = '';
        let newstring = document.getElementById("div1")!;
        for (var j = 0; j < newstring.children.length; j++)
        {
            divString += newstring.children[j].innerHTML;
        }
        document.getElementById("displayResult")!.innerHTML = divString === answerString ? "Correct Answer" : "Wrong Answer";
        (document.getElementById("button2")! as HTMLButtonElement).disabled = false;
    }

    function aaa()
    {
        i = i + 1;
        document.getElementById("div1")!.innerHTML = "";
        document.getElementById("div2")!.innerHTML = "";
        document.getElementById("displayResult")!.innerHTML = "";
        myPrintData(i);
        (document.getElementById("button2")! as HTMLButtonElement).disabled = true;
    }
    document.getElementById("button1")!.onclick = compare;
    document.getElementById("button2")!.onclick = aaa;
}

loadDoc("./wordsInHindi/newWordInHindi.json").then((response: []) =>
{
    jsMydata = response;
    myString();
});








//var compreObject = new compareString;
//document.getElementById("button1").onclick = compreObject.compare();
//onclick = "checkData()"

/*function compareString(currentWord)
{
    var newstring = document.getElementById("div1");
    var newText = '';
    for (var i = 0; i < newstring.children.length; i++)
    {
        newText += newstring.children[i].innerHTML;
    }
    var actualstringfromarray = currentWord;
    document.getElementById("displayResult").innerHTML = newText === actualstringfromarray ? "correct" : "wrong";
} */


//document.getElementById("myBtn").onclick = displayDate;

