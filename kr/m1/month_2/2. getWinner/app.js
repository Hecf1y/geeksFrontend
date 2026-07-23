// let player1= "🪨"
// let player1= "📄"
let player1 = "✂️"

// let player2= "🪨"
// let player2= "📄"
let player2= "✂️"



function getWinner(player1, player2) {
    if (player1 === player2) {
        return "Ничья";
    }

    if (player1 === "🪨" && player2 === "✂️") {
        return "Победил player1";
    } else if (player1 === "✂️" && player2 === "📄") {
        return "Победил player1";
    } else if (player1 === "📄" && player2 === "🪨") {
        return "Победил player1";
    } else {
        return "Победил player2";
    }
}


console.log(getWinner(player1, player2)); 
