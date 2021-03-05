// This function is not mine. I copied it from my professor's example because I feel it's too 
// simple to do uniquely. Th only thing I did was edit the ID and duplicated the expression
function RollSixSidedDice(){
    document.getElementById("dice1").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("dice2").value = Math.floor(Math.random()*6) + 1;
}