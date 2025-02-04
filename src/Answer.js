import { Game } from "./Game";

export class Answer {
    #answer;

    constructor() {
        this.#answer = answer;
        this.answer = this.createForm();
        this.answer.addEventListener('submit', () => this.tentative());
        
        this.game = new Game;
    }
    
    createForm(){
        // const form = document.createElement("form");
        // form.classList.add("row");

        // const input1 = document.createElement("input1");
        // input1.classList.add("letter");
        // input1.namespaceURI.add("letter-0");
        // form.appendChild(input1);

        // const input2 = document.createElement("input2");
        // input2.classList.add("letter");
        // input2.namespaceURI.add("letter-1");
        // form.appendChild(input2);

        // const input3 = document.createElement("input3");
        // input3.classList.add("letter");
        // input3.namespaceURI.add("letter-2");
        // form.appendChild(input3);

        // const input4 = document.createElement("input4");
        // input4.classList.add("letter");
        // input4.namespaceURI.add("letter-3");
        // form.appendChild(input4);

        const html = `
        <form class="row" id="row-0" inert>
	        <input class="letter" type="text" name="letter-0" id="row-0--0" maxlength="1">
	        <input class="letter" type="text" name="letter-1" id="row-0--1" maxlength="1">
	        <input class="letter" type="text" name="letter-2" id="row-0--2" maxlength="1">
	        <input class="letter" type="text" name="letter-3" id="row-0--3" maxlength="1">
	        <input class="letter" type="text" name="letter-4" id="row-0--4" maxlength="1">
	        <input type="submit" hidden>
        </form>
        `

        const main = document.querySelector(".board");
        main.insertAdjacentHTML("afterbegin", html);

        

        html.addEventListener('keyup', e => {
            //Quand on clic sur 'enter'
            if (e.key === this.isAlphaNumericKey()) {
                
            }
        });

        return main;
    }

    isAlphaNumericKey(key) {
        return /^([\x30-\x39]|[\x61-\x7a])$/i.test(key);
    }

    removeAttribute(selector) {
        const element = document.querySelector(selector);
        if (element) element.remove();
    }

    //méthode pour activer ou désactiver le formulaire
    toogleState() {
            html.removeAttribute(inert)
    }

    tentative() {
        const letters = document.querySelector(".letter").value;
    }
    

    getAnswer() {
        return this.#answer;
    }

    conditions() {
        //conditions que la réponse respecte et affichage des messages
    }
}
