// MAIL

// CHIEDERE L'MAIL ALL'UTENTE
const mailUtente = prompt("Inserisci la tua mail")

// LISTA DELLE MAIL DI CHI PUò ACCEDERE
const worldMail = ["matteo@Gmail.com", "leo@gmail.com", "rossi@gmail.com"]

// CONTROLLO CORRISPONDENZA EMAIL
let result = "Benvenuto!";

for (let i = 0; i < worldMail.length; i++) {
    const Mail = worldMail[i];
    console.log (Mail);
    if (Mail === mailUtente) {
        result = true;  
    }
}

if (result === true) {
    console.log("Benvenuto nella pagina");
} else {
    console.log("Mail sbagliata, riprova!");
};


// DADI

// Generare un numero random da 1 a 6
const palyerNumber = Math.floor(Math.random() * 6);
document.getElementById("player-number").innerHTML = palyerNumber;

const pcNumber = Math.floor(Math.random() * 6);
document.getElementById("pc-number").innerHTML = pcNumber;

if let