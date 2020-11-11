const user1 = {
    firstName: 'Kalle',
    lastName: 'Anka'
}

// 1. Logga ut användarens för- och efternamn
console.log(user1.firstName, user1.lastName)
// 2. Byt ut användarens förnamn mot 'Kajsa'
user1.firstName = "kajsa"
// 3. Logga ut användarens för- och efternamn igen
console.log(user1.firstName, user1.lastName)
// 4. Skapa en till användare user2 med samma properties 
const user2 = {
    firstName: "Anders",
    lastName: "svensson"
}
// 5. Skapa en array users och lägg user1 och user2 i den
let users = [user1, user2]
console.log(users)

