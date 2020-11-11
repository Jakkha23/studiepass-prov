document.getElementById("my-button").addEventListener("click", bye)

function bye() {
    console.log("Goodbye")
    document.getElementById("headline").innerHTML = "Goodbye!"
}