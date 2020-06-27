var previousHighlightElement: HTMLElement | null;
var currentIndex = 0;
var timeStampArray: number[];
var previousTime: number;
var audio: HTMLAudioElement;


type bookCoverData = { image: string, link: string, text: string, audioFile: string, timeStamp: number[] };

let bookCoverString: bookCoverData[];
loadDoc("./wordsInHindi/bookCoverLink.json").then((response) =>
{
    bookCoverString = response;
    creatediv();
});

let currImagePath;

function load()
{
    const container = document.getElementById("bookText")!;
    const textArray = bookCoverString[imgIndex].text.split(' ');
    let span = "";
    let index = 0;
    for (let i = 0; i < textArray.length; i++)
    {
        if (textArray[i] === '।')
        {
            span += `<span>${textArray[i]} </span>`;
        }
        else
        {
            span += `<span id="text_${index++}">${textArray[i]} </span>`;
        }
    }

    container.innerHTML = span;

}


function creatediv()
{
    for (let i = 0; i < bookCoverString.length; i++)
    {

        const link = document.createElement("a");
        link.id = "link" + i;
        link.href = bookCoverString[i].link;

        const img = document.createElement("img");
        img.id = "img" + i;
        img.setAttribute("data-BookIndex", i.toString());
        img.onclick = loadStoryPage;
        currImagePath = "./images/" + bookCoverString[i].image;
        img.width = 200;
        img.height = 290;
        img.src = currImagePath;
        //img.alt = bookCoverString[i].name;
        link.appendChild(img);
        document.getElementById("displayBookCover")!.appendChild(link);
        // const el = `<a id="link${ i }" href="${ bookTitleString[i].link }"><img id="img${ i }" width=200 height=300 src="./Image/${ bookTitleString[i].image }" alt="${ bookTitleString[i].name }"/></a>`
        // document.getElementById("displayBookCover").innerHTML += el;
    }

}

var imgIndex: number;

function loadStoryPage(arg: MouseEvent)
{
    const img = arg.target as HTMLImageElement;
    imgIndex = parseInt(img.getAttribute("data-BookIndex")!);
    load();

    //var storyIndex = bookCoverString[imgIndex].text;
    var displayCont = document.getElementById("displayBook")!;
    //displayCont.innerHTML += storyIndex;
    displayCont.style.setProperty("display", "block");


    // document.getElementById("displayBook")?.style.setProperty("position", "absolute");  

    //document.getElementById("displayBook")!.innerHTML=bookCoverString[]
}

var audioFilePath: string;
function bookAudioPlay()  
{


    audioFilePath = "./Sounds/story/" + bookCoverString[imgIndex].audioFile;
    audio = new Audio(audioFilePath);
    audio.load();
    audio.play();
    _startPlay();
    function _startPlay()
    {
        setTimeout(() =>
        {
            highlightText(currentIndex);
            if (currentIndex++ < bookCoverString[imgIndex].timeStamp.length)
            {
                _startPlay();
            }
        }, bookCoverString[imgIndex].timeStamp[currentIndex]);
    }
}

function highlightText(index: number)
{
    if (previousHighlightElement)
    {
        previousHighlightElement.style.setProperty("background-color", "");
    }

    const el = document.getElementById("text_" + index)!;
    el.style.setProperty("background-color", "yellow");
    previousHighlightElement = el;
}









// function creatediv()
// {
//     for (let i = 0; i < bookTitleString.length; i++)
//     {

//         const link = document.createElement("a");
//         link.id = "link" + i;
//         link.href = bookTitleString[i].link;

//         const img = document.createElement("img");
//         img.id = "img" + i;
//         currImagePath = "./image/" + bookTitleString[i].image;
//         img.width = 200;
//         img.height = 290;
//         img.src = currImagePath;
//         img.alt = bookTitleString[i].name;
//         link.appendChild(img);
//         document.getElementById("displayBookCover").appendChild(link);
//         // const el = `<a id="link${ i }" href="${ bookTitleString[i].link }"><img id="img${ i }" width=200 height=300 src="./Image/${ bookTitleString[i].image }" alt="${ bookTitleString[i].name }"/></a>`
//         // document.getElementById("displayBookCover").innerHTML += el;
//     }

// }
// creatediv();


