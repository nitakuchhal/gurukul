
type questionData = { sentence: string, matra: string, status: string, alternate?: string };


class hindiString
{
    #answerString: string;
    #alternateString: string;
    #i: number;
    #hindiStringData: questionData[];

    constructor()
    {
        this.#answerString = "";
        this.#alternateString = "";
        this.#i = 0;
        const self = this;
        const btnNext = document.getElementById('btnNext')! as HTMLButtonElement;
        (document.getElementById('btnSubmit')! as HTMLButtonElement).onclick = function ()
        {
            self._compareOptionArray();
            btnNext.disabled = false;
        };

        btnNext.onclick = function ()
        {
            self._nextQuestion();

        };

        loadDoc("./wordsInHindi/newScrambledSentence.json").then((response: questionData[]) =>
        {
            self.#hindiStringData = response;
            self._showString();
        });
    }

    _showString()
    {
        //debugger;   a = hindiStringData;      console.log(hindiStringData);
        let displayString = "";
        this._checkStatus();
        let sentence = this.#answerString = this.#hindiStringData[this.#i].sentence;
        if (this.#hindiStringData[this.#i].alternate)
        {
            this.#alternateString = this.#hindiStringData[this.#i].alternate as string;
        }

        let optionArray = getOptionString(sentence);

        DraggableText(optionArray, "divScramble");
        let self = this;



        // this._compareOptionArray();          // displayString += `${hindiStringData[i].jumbledSentence}  <br>`;
        // const unscramble = document.getElementById("divAnswerOption");
        // unscramble && (unscramble.innerHTML = displayString);

        //checkAndUpdate();
    }

    _checkStatus()     // check status whether question is beginnerer question or review question
    {
        while (this.#hindiStringData[this.#i].status !== "begin")
            this.#i += 1;
    }


    _compareOptionArray()
    {
        let droppedString = '';
        const divAnswerOption = document.getElementById('divAnswerOption')!;

        for (let j = 0; j < divAnswerOption.children.length; j++)
        {
            droppedString += divAnswerOption.children[j].innerHTML + " ";
        }

        document.getElementById("displayResult")!.innerHTML =
            ((droppedString.trim() === this.#answerString) || (this.#alternateString && droppedString.trim() === this.#alternateString)) ?
                "correct" : "Wrong";
    }

    _nextQuestion()
    {
        if (this.#i === this.#hindiStringData.length - 1)
        {
            document.getElementById('btnNext')!.innerHTML = "Done";

        }
        else
        {
            document.getElementById('divAnswerOption')!.innerHTML = "";
            document.getElementById('divScramble')!.innerHTML = "";
            document.getElementById('displayResult')!.innerHTML = "";
            (document.getElementById('btnNext')! as HTMLButtonElement).disabled = true;
            this.#i = this.#i + 1;
            this._showString();
        }
    }

}

let str = new hindiString();

function getOptionString(currentHindiString: string): string[]
{
    let originalArr = currentHindiString.split(' ');
    let newString: string[] = [];


    while (originalArr.length !== 0)
    {
        let getindex = Math.floor(Math.random() * originalArr.length);
        const spliceword = originalArr.splice(getindex, 1)[0];
        if (spliceword)
        {
            newString.push(spliceword);
        }
    }
    return newString;
}




