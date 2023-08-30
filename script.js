var Timer = 6;
var score = 0;
var hitrn;


function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubble(){
    var clutter = "";
    for(var i=0;i<=140;i++){
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timer = setInterval(function(){
        if(Timer>0){
            Timer--;
            document.querySelector("#timerVal").textContent = Timer;
        }else{
            clearInterval(timer);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000);
}

document.querySelector("#pbtm").addEventListener("click",function(a){
    var clickednum = Number(a.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

getNewHit();
runTimer();
makeBubble();