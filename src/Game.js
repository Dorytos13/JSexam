import { Answer } from "./Answer";

export class Game {
    
    constructor(nbParties) {
        this.nbParties = nbParties;
    }

    displayMessage(message) {
        document.querySelector(".message").textContent = message;
    }
    
}