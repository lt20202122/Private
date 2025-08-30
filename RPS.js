// vars
var cpuMove, pMove
let score=[0,0]

// 1.
cpuMove = Math.floor(Math.random() * 3) + 1;

if (cpuMove == 1) {
    cpuMove = "Rock";
} else if (cpuMove == 2) {
    cpuMove = "Paper";
} else if (cpuMove == 3) {
    cpuMove = "Scissors";
}
console.log("computer chose "+cpuMove+".")



// 1 = Rock, 2 = Scissors, 3 = Paper

//2.
pMove=Number(prompt("Rock, Scissors, Paper?", "Pick one of it"))
//if (pMove=="Rock") {
//    if 
//}
