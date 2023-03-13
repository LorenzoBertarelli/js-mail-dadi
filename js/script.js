// CHIEDERE L'MAIL ALL'UTENTE
const mailUtente = prompt("Inserisci la tua mail")

// LISTA DELLE MAIL DI CHI PUò ACCEDERE
const worldMail = ["matteo@Gmail.com", "leo@gmail.com", "rossi@gmail.com"]

// CONTROLLO CORRISPONDENZA EMAIL
let result = "Benvenuto!";

for (let i = 0; i < worldMail.length; i++) {
    const Mail = worldMail[i];
    console.log (Mail)
    if (Mail === mailUtente) {
        result = true;  
    }
}

if (result === true) {
    console.log("Benvenuto nella pagina")
} else {
    console.log("Mail sbagliata, riprova!")
}

