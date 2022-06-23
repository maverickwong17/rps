//prompt user rps
    //validate
var rpsarr = ["r","p","s"]
var userin = window.prompt("Let's play rock paper scissors! \nPlease input \"r\" for rock, \"p\" for paper , or \"s\" for scissors.")
    // if (userin !== rpsarr){
    //     window.alert("Error please select again")
    //     userin
    // }

//cpu pick random
var random = Math.floor(Math.random()*3)
var cpuin = rpsarr[random]
console.log(random)
console.log(cpuin)

var rvalue = rpsarr.indexOf("r") //0
var pvalue = rpsarr.indexOf("p") //1
var svalue = rpsarr.indexOf("s") //2

// r wins. r < s !==p
// p wins. p > r !==s
// s wins. s > p !==r 

//series of if statements for conditions
    //who wins

//stats
var win = 0
var lose = 0
var tie = 0

if (userin === cpuin){
    window.alert("This is a tie")
    tie++
} else if (userin === rpsarr[0] && cpuin === rpsarr[1]) {
    window.alert("Computer chose paper. \n Computer Wins.")
    lose++
} else if (userin === rpsarr[0] && cpuin === rpsarr[2]) {
    window.alert("Computer chose scissors. \n Player Wins.")
    win++
} else if (userin === rpsarr[1] && cpuin === rpsarr[0]) {
    window.alert("Computer chose rock. \n Player Wins.")
    win++
} else if (userin === rpsarr[1] && cpuin === rpsarr[2]) {
    window.alert("Computer chose paper. \n Computer Wins.")
    lose++
} else if (userin === rpsarr[2] && cpuin === rpsarr[0]) {
    window.alert("Computer chose rock. \n Computer Wins.")
    lose++
} else if (userin === rpsarr[2] && cpuin === rpsarr[1]) {
    window.alert("Computer chose paper. \n Player Wins.")
    win++
}

// if (userin < cpuin && cpuin !== "p"){
//     window.alert()
// }

//stat message
 window.alert("These are the statistics: \n Wins : " +)


//play again?
window.confirm()