//write your code here
const juego = (ourchoice) => {

    const userchoice = ourchoice

    const pcchoice = ["rock", "paper", "scissors", "lizard", "spock"];

    const choicesRandom = pcchoice[Math.floor(Math.random() * pcchoice.length)];

    console.log("Your choice"+ " " + ourchoice, "Pc choice" + " " + choicesRandom);

    const rules = {
        rock: ["scissors", "lizard"],
        paper: ["rock", "spock"],
        scissors: ["paper", "lizard"],
        lizard: ["paper", "spock"],
        spock: ["scissors", "rock"]
    };

    if (userchoice === choicesRandom) {
        console.log("draw")

    } else if (rules[userchoice].includes(choicesRandom)) {

        console.log("You won")

    } else {
        console.log("You lost")
    }

    return "Your choice"+ " " + ourchoice, "Pc choice" + " " + choicesRandom

};

console.log(juego("paper"))