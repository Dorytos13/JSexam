"use strict"
import { Answer } from "./Answer";
import { Game } from "./Game";

const API_BASE_URL = "https://progweb-wwwordle-api.onrender.com";

async function fetchData(guess) { 
    try {
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( guess )
        }
        const response = await fetch(`${API_BASE_URL}/guess`, options);
        if (!response.ok) throw new Error("Erreur de récupération");
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Erreur :", error);
    }
}

fetchData();

let parties = 5;
const game = new Game(parties);
const answers = [];
const answer = new Answer;
