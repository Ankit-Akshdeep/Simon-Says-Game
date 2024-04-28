let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["red", "yellow", "green", "purple"];

let h2 = document.querySelector( "h2" );


document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game Started");
        started = true;
    }
    
    levelUp();
});

function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function userFlash(btn){
    btn.classList.add("Userflash");

    setTimeout(function(){
        btn.classList.remove("Userflash");
    },300);
}

function levelUp(){
    userSeq = [];

    level++;
    
    h2.innerText = `Level: ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randCol = btns[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);

    // console.log(randIdx);
    // console.log(randCol);
    // console.log(randBtn);

    gameSeq.push(randCol);
     console.log(gameSeq)

    gameFlash(randBtn);
}

function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPressed(){
    // console.log("button was pressed");
    let btn = this;
    userFlash(btn);

    userCol = btn.getAttribute("id");
    userSeq.push(userCol);

    checkAns(userCol.length - 1);
    
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPressed);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
