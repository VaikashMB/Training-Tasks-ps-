const hawkinsScore = document.getElementById("hawScore");
const jordanScore = document.getElementById("jorScore");
const hawkinsButton = document.getElementById("hawBtn");
const jordansButton = document.getElementById("jorBtn");
const time= document.getElementById("time");
const winner= document.getElementById("winner");
const tie= document.getElementById("tie");
const newGame= document.getElementById("newGame");

let hawScore=0;
let jorScore=0;
let initialTimer=10;




fetch('teams.txt')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(data => {
    teamNames = data.split('\n');
 
    
    const teamAName = document.getElementById('teamA');
    const teamBName = document.getElementById('teamB');
 
    if (teamNames.length >= 2) {
      teamAName.textContent = teamNames[0];
      teamBName.textContent = teamNames[1];
   
    
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });



hawkinsButton.addEventListener("click", ()=>{
    updateScore("hawkins")
})
jordansButton.addEventListener("click", ()=>{
    updateScore("jordans")
})

function updateScore(team){
    if(team==="hawkins"){
        hawScore++;
        hawkinsScore.textContent=hawScore;
    }
    else if(team==="jordans"){
        jorScore++;
        jordanScore.textContent=jorScore;
    }
}
newGame.addEventListener("click",restart);

function restart(){
    location.reload();

}

function timeUpdate(){
    time.textContent=initialTimer;
    if(initialTimer === 0){
        winnerFunction();
    }
    else{
        initialTimer--;
        setTimeout(timeUpdate,1000);

    }

}

function winnerFunction(){
    if(hawScore>jorScore){
        winner.textContent="CONGRATULATIONS HAWKINS!!! YOU WON"
    }
    else if(hawScore<jorScore){
        winner.textContent="CONGRATULATIONS JORDANS!!! YOU WON"
    }
    else{
        tie.textContent="GAME IS A TIE";
    }
    jordansButton.disabled=true;
    hawkinsButton.disabled=true;
    

}


timeUpdate();










