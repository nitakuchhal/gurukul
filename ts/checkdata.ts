// #1
/* function abc(aa)
{
    this.a = aa;    this.b = 1; function pr()     {     }
}
abc.prototype.sdsd = function () { }

var obj = new abc("aa");  obj.sdsd();
function abc(aa)
{   var a = 'sd';    
    function sdsd()
    {     }
    var ff = function ()
    {      }
    ff();    sdsd();    abc.prototype.zxzxzx = ff;
}
var obj = new abc("aa");  obj.sdsd(); */
interface IData
{
    word: string,
    matra: string,    
    letters: string,
    image: string,
    sound: string,
    begSound: string,
    endSound: string,
    possibeWords: string
}

function myString(jsMydata : IData[])
{
    let answerString : string;
    let i = 0;

    function myPrintData(i : number)
    {

        var letterString = jsMydata[i].letters;
        var letterArray = letterString.split(' ');
        answerString = jsMydata[i].word;
        DraggableText(letterArray, 'div2');

        (document.getElementById("myImage") as HTMLImageElement).src = "./images/" + jsMydata[i].image;

    }
    myPrintData(i);

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

