
// 1. Varför loggas ingenting ut när man kör det här skriptet? 
// Det finns två fel. SVAR: den returnerar ingenting, det finns inget argument och texten är inte en string

// 2. Ändra scriptet så att "Hello, how are you today?" verkligen loggas ut.

function hello(a) {
    return `Hello ${a}, how are you today`
}
    console.log(hello("fredrik"))

// 3. Uppdatera funktionen hello så att den tar ett namn som argument
// Gör så att den hälsar med namn, t.ex. "Hello Fredrik, how are you today?"
