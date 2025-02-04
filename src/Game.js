import { Answer } from "./Answer";

export class Game {
    
    constructor(nbParties) {
        this.nbParties = nbParties;
        const answer = new Answer;
    }

    displayMessage(message) {
        document.querySelector(".message").textContent = message;
    }

    
    
}