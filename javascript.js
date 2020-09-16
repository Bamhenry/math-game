var playing = false;
var score;

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
        document.getElementById("timeremaining").style.display = "block";

        //change button to reset game
        document.getElementById("startreset").innerHTML = "Reset Game";
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

