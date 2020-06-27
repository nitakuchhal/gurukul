// var previousHighlightElement: HTMLElement | null;
// var currentIndex = 0;
// var timeStampArray: number[];
// var previousTime: number;
// var bookPlayerString;
// //let timeStampValue = [0, 1822, 707, 613, 1003, 701, 1089, 1282, 866, 922, 822, 829, 1108, 805, 1260, 881, 740, 1000, 1703, 1510, 866, 944, 874, 972, 1186, 979, 876, 853, 895, 707, 1095, 808, 756, 963, 1272, 529, 619, 924, 618, 460, 704, 627, 1080, 1045];
// //var audio = new Audio('mohankidukaan.mp4');

// loadDoc("./wordsInHindi/bookCoverLink.json").then((response) =>
// {
//     bookPlayerString = response;
// });


// function bookAudioPlay()
// {
//     audio.load();
//     audio.play();
//     _startPlay();
//     function _startPlay()
//     {
//         setTimeout(() =>
//         {
//             highlightText(currentIndex);
//             if (currentIndex++ < timeStampValue.length)
//             {
//                 _startPlay();
//             }
//         }, timeStampValue[currentIndex]);
//     }
// }

// function highlightText(index: number)
// {
//     if (previousHighlightElement)
//     {
//         previousHighlightElement.style.setProperty("background-color", "");
//     }

//     const el = document.getElementById("text_" + index)!;
//     el.style.setProperty("background-color", "yellow");
//     previousHighlightElement = el;
// }

// function load()
// {
//     var text = "मोहन एक बहुत अच्छा लड़का है । उसकी एक छोटी सी दुकान है । वह अपनी दुकान पर दाल, चावल, बिस्कुट और नमकीन बेचता है । वह दुकान में छोटे बच्चों के खिलौने भी रखता है । आसपास के सभी लोग मोहन की दुकान से सामान खरीदते हैं ।";

//     const container = document.getElementById("bookTextContainer")!;
//     const textArray = text.split(' ');
//     let span = "";
//     let index = 0;
//     for (let i = 0; i < textArray.length; i++)
//     {
//         if (textArray[i] === '।')
//         {
//             span += `<span>${textArray[i]} </span>`;
//         }
//         else
//         {
//             span += `<span id="text_${index++}">${textArray[i]} </span>`;
//         }
//     }

//     container.innerHTML = span;

// }
// load();