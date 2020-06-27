function allowDrop(ev: Event)
{
    ev.preventDefault();
}

function drag(ev: DragEvent)
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

function DraggableText(data: string[], id: string)
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


async function loadDoc(url: string)
{
    const response = await fetch(url);
    return await response.json();
}

function openVideo()
{

    let vid;
    vid = document.getElementById("displayVideo")!;
    vid.style.display = "block";
    const video = document.getElementById("videoSrc")! as HTMLVideoElement;
    video.src = "./videos/KoyalListen.mp4";

}

function closeVideo()
{
    const vid = document.getElementById("displayVideo")!;
    vid.style.display = "none";
    const video = document.getElementById("videoSrc")! as HTMLVideoElement;
    video.src = "";

}




