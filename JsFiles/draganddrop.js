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
async function loadDoc(url) {
    const response = await fetch(url);
    return await response.json();
}
function openVideo() {
    let vid;
    vid = document.getElementById("displayVideo");
    vid.style.display = "block";
    const video = document.getElementById("videoSrc");
    video.src = "./videos/KoyalListen.mp4";
}
function closeVideo() {
    const vid = document.getElementById("displayVideo");
    vid.style.display = "none";
    const video = document.getElementById("videoSrc");
    video.src = "";
}
//# sourceMappingURL=draganddrop.js.map