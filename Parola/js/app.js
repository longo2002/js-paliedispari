console.log("works!")
let checkBtn = document.getElementById("checkBtn")
const userWord = prompt("Inserisci una parola!")

checkBtn.addEventListener("click",
    // function checkPalindrome(str) {
    //     // get the total length of the words  
    //     const len = str.length;

    //     for (let i = 0; i < len / 2; i++) {
    //         if (str[i] !== str[len - 1 - i]) {
    //             alert('It is not palindrome');
    //             return;
    //         }
    //     }

    //     alert('It is a palindrome');


    //     const string = prompt('Enter a string or number to check for Palindrome: ');

    //     const value = checkPalindrome(string);


    //     console.log(value);
    // }



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