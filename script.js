var first = document.querySelector(".first");
var second = document.querySelector(".second");
var third = document.querySelector(".third");
var fourth = document.querySelector(".fourth");

var button = document.querySelector("button");

button.addEventListener("click", changeColors);

function changeColors(){
    randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    randomColor3 = Math.floor(Math.random()*16777215).toString(16);
    randomColor4 = Math.floor(Math.random()*16777215).toString(16);

    first.style.backgroundColor = "#"+randomColor1;
    second.style.backgroundColor = "#"+randomColor2;
    third.style.backgroundColor = "#"+randomColor3;
    fourth.style.backgroundColor = "#"+randomColor4;

    document.getElementById("p1").innerHTML = "#"+randomColor1.toUpperCase();
    document.getElementById("p2").innerHTML = "#"+randomColor2.toUpperCase();
    document.getElementById("p3").innerHTML = "#"+randomColor3.toUpperCase();
    document.getElementById("p4").innerHTML = "#"+randomColor4.toUpperCase();
}

function copyElementText(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    tooltip();
    playSound("https://www.youtube.com/watch?v=5Ns58cF9z68");
}

function tooltip(){
    var tooltip = document.getElementById('copied');
    tooltip.style.visibility = 'visible';
    setTimeout(hide,1500);
}
function hide(){
    var tooltip = document.getElementById('copied');
    tooltip.style.visibility = 'hidden';
}

function playSound() {
    document.getElementById("audio").play();
}