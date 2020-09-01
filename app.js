/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;
// define scores 
scores = [0,0]; 
roundScore = 0;
activePlayer = 0;

  

document.querySelector('.dice').style.display = 'none'; 

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// setting up event 
document.querySelector('.btn-roll').addEventListener('click', function() {
    // get a random number on dice 
    var dice = Math.floor(Math.random() * 6) + 1;
    // display the number received 
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png'; 

    if (dice !== 1) {
        roundScore += dice; 
        document.querySelector('#current-'+ activePlayer).textContent = roundScore; 
    } else { 
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;   

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0'; 
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';

    }

}); // we dont need 
// to call the btn function here - call back function - the event listener will call it 

// if we wrote it as function() { } - this is called anonymous function 





document.querySelector('#current-' + activePlayer).textContent = dice; // selects the first element it finds  
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; 

 //var x = document.querySelector('#score-0').textContent;