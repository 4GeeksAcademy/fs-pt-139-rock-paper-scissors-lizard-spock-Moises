//write your code here
const juego = (ourchoice) => {
    const userchoice = ourchoice
    const pcchoice = ["rock", "paper", "scissors", "lizard", "spock"];
    const choicesRandom = pcchoice[Math.floor(Math.random() * pcchoice.length)];
    const rules = {
        rock: ["scissors", "lizard"],
        paper: ["rock", "spock"],
        scissors: ["paper", "lizard"],
        lizard: ["paper", "spock"],
        spock: ["scissors", "rock"]
    };

    console.log("Your choice " + ourchoice + " Pc choice " + choicesRandom);

    if (userchoice === choicesRandom) {
        //console.log("draw")
        return "draw"
    }
    if (rules[userchoice].includes(choicesRandom)) {
        //console.log("You won")
        return "You won"
    }
        //console.log("You lost")
        return "You lost"
};

console.log(juego("paper"))