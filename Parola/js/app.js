console.log("works!")
let checkBtn = document.getElementById("checkBtn")
const userWord = prompt("Inserisci una parola!")

checkBtn.addEventListener("click",
    function wordCheck() {
        let length = userWord.length;
        for (let i = 0; i < length / 2; i++) {
            if (userWord[i] !== userWord[length - 1 - i]) {
                console.log('Non palindroma!');
                return;
            } else {
                console.log('Palindroma!');
                return;
            }
        }

    }
)

refresh.addEventListener ( "click",
    function refreshFunction() {
        window.location.reload(true)
    }
)