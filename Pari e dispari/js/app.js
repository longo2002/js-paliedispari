console.log("works!")

let userPari = document.getElementById("pari")
let userDispari = document.getElementById("dispari")
function numeroGenerato(max) {
    return Math.floor(Math.random() * max) + 1;
}

userPari.addEventListener("click",
    function evenFunction() {
        let userNum = parseInt(prompt("Inserisci un numero da 1 a 5"));
        let cpuNum = numeroGenerato(5);
        let somma = userNum + cpuNum
        let mod2 = (somma % 2 === 0)
        if (mod2) {
            console.log(userNum,"+", cpuNum,"=", somma,"Hai vinto bravo!")
        } else {
            console.log(userNum,"+", cpuNum,"=", somma,"Hai perso mi spiace!")
        }
    }
)

userDispari.addEventListener ("click",
    function evenFunction() {
        let userNum = parseInt(prompt("Inserisci un numero da 1 a 5"));
        let cpuNum = numeroGenerato(5);
        let somma = userNum + cpuNum
        let mod2 = (somma % 2 === 0)
        if (mod2) {
            console.log(userNum,"+", cpuNum,"=", somma,"Hai perso mi spiace!")
        } else {
            console.log(userNum,"+", cpuNum,"=", somma,"Hai vinto bravo!")
        }
    }
)



