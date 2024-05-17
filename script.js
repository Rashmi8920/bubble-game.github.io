//   '' &&  ``(backtic/hiphun)  => <1>.. similarituy== to store a string  <2> differ..we add dynamic value to directly in hyphun
var timer = 60;
var score = 0;
var hitrn = 0;

//increase score
function increasescore() {
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}

// no of hits
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector('#hitval').textContent = hitrn;
}

// make a  bubble  
function makeBubble() {
    var clutter = "";
    for (i = 1; i <= 119; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble"> ${rn}</div>`;
    }
    document.getElementById("pbtm").innerHTML = clutter; //document.querySelector("#pbtm").innerHTML = clutter;
}

//increase timer
function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML="<h1> GAME OVER </H1>";
        }
    }, 1000);
}

// add an event on bubble
document.querySelector('#pbtm').addEventListener("click", function (dets) {
    //alert("chal rab h");
    var clickednum = Number(dets.target.textContent);
    if (clickednum === hitrn) {
        increasescore();
        makeBubble();
        getNewHit();
    }
})
runTimer();
makeBubble();
getNewHit();
//  increasescore();