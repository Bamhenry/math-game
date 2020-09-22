var playing = false;
var score;
var action;
var timeremaining;

//if click on the start/reset button
document.getElementById("startreset").onclick = function() {

    //if playing
    if(playing == true){

        location.reload();  //reload page

    }else{  //if not playing

        //change to playing
        playing = true;

        //set score to 0
        score = 0;

        document.getElementById("scorevalue").innerHTML = score;

        //show countdown box
        show("timeremaining");

        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;


        //change button to reset game
        document.getElementById("startreset").innerHTML = "Reset Game";

        //start countdown
        startCountdown();


    }
}
    //if playing
        //reload page

    //if not playing
        //set score to 0
        //show countdown box
        //reduce time by 1 sec

            //time left
                //yes->continue
                //no->game over and change button to start game

        //change button to reset game
        //generate new question and answers

//if click on answer box
    //if playing
        //correct
            //yes
                //increase score by 1
                //show correct box for 1 sec
                //generate new question and answers
            //no
                //show try again box for 1 sec

//functions

//start counter
function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if(timeremaining == 0){  //game over
            stopCountdown();
            show("gameOver");
            document.getElementById("gameOver").innerHTML = "<p>Game Over!</p><p>Your score is " + score +".</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
        }
    }, 1000);
}

//stop counter
function stopCountdown(){
    clearInterval(action);
}

//hide an element
function hide(Id){
    document.getElementById(Id).style.display = "none";
}

//show an element
function show(Id){
    document.getElementById(Id).style.display = "block";
}
