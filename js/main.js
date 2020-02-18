//Quanti km deve percorrere la persona?
//Quanti anni ha?
//Qual è il prezzo base? (km x 0,21)
// Se età <18 anni, prezzo base - 20% del prezzo base;
//Se età >=64 anni, prezzo base - 40% del prezzo base; 


var chilometriDapercorrere = prompt("Quanti chilometri vuoi percorrere?");
var età = prompt("Quanti anni hai?");
var prezzoBase = (chilometriDapercorrere * 0.21);
document.getElementById("percorrenza").innerHTML = "Percorrerò: " + chilometriDapercorrere + " km";
document.getElementById("eta").innerHTML = "Dichiaro di avere: " + età + " anni";

if (età >= 120) {
    console.log("Wow! Siamo davvero sicuri che sia la tua età?");
    document.getElementById("psconto").innerHTML = " &Egrave; un vero onore avere a bordo ";
    document.getElementById("pavviso").innerHTML = "La Regina Elisabetta!";
    document.getElementById('bottone').setAttribute("style", "visibility:hidden");
} else if ((età >= 65) && (età < 120)) {
    console.log("In base alla tua fascia di età e al numero di km che desideri percorrere, il prezzo base sarebbe: " + prezzoBase + " €");
    console.log("sconto applicabile: 40%. Il prezzo finale è di " + (prezzoBase - ((prezzoBase / 100) * 40)) + " €")
    document.getElementById("tariffabase").innerHTML = "Tariffa base: " + prezzoBase + " €";
    document.getElementById("psconto").innerHTML = "Sconto applicabile: 40%";
    document.getElementById("pavviso").innerHTML = "Il prezzo finale del biglietto ammonta a " + (prezzoBase - ((prezzoBase / 100) * 40)) + " €"
} else if ((età > 1) && (età < 18)) {
    console.log("In base alla tua fascia di età e al numero di km che desideri percorrere, il prezzo base sarebbe: " + prezzoBase + " €");
    console.log("sconto applicabile: 20%. Il prezzo scontato è di " + (prezzoBase - ((prezzoBase / 100) * 20)) + " €")
    document.getElementById("tariffabase").innerHTML = "Tariffa base: " + prezzoBase + " €";
    document.getElementById("psconto").innerHTML = "Sconto applicabile: 20%";
    document.getElementById("pavviso").innerHTML = "Il prezzo finale del biglietto ammonta a " + (prezzoBase - ((prezzoBase / 100) * 20)) + " €"
} else if (età < 1) {
    console.log("I bambini non ancora nati non pagano il biglietto");
    document.getElementById("psconto").innerHTML = "Attenzione!";
    document.getElementById("pavviso").innerHTML = "Occorre inserire l'età"
} else {
    console.log("Purtroppo non soddisfi i requisiti per usufruire dello sconto. Il prezzo totale è di " + prezzoBase + " €");
    document.getElementById("psconto").innerHTML = "Tariffa standard";
    document.getElementById("pavviso").innerHTML = "Totale: " + prezzoBase + " €"
}

