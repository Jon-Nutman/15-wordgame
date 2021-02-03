import { commonWords } from "./constants"

// Getting words of 3 letters or more
// not random yet

const newWordList = commonWords.filter((commonWords) => commonWords.length >= 3)

const randomWord = newWordList[Math.floor(Math.random() * newWordList.length)]


//Display the chose random word
document.querySelector("#rightGuesses").innerHTML = randomWord

// replace characters of random word with "-"
// let hiddenWord = randomWord.replaceAll('.', '-')

// instead of replacing maybe just make a new string and display none on the other

function hiddenWord(str){
    let hidden = ''
for ( var i = 0; i < str.length; i++) {
    hidden += '-'
}
console.log(hidden)
return hidden
}
const dashes = hiddenWord(randomWord)


// Allow users to guess one letter at a time

//Creating buttons for each letter

const btns = "abcdefghijklmnopqrstuvwxyz"
  .split("")
  .map((letter) => `<button class="btn">${letter}</button>`)
  .join("")

document.querySelector("#btnList").innerHTML = btns

// make button return its innerHTML when clicked on

document
  .querySelector("#btnList")
  .addEventListener("click", function (e) {
    e.preventDefault()
    const userGuess = e.target.innerHTML
    // console.log(userGuess)
    // check to see if newWordList includes the Userguess
        if(randomWord.includes(userGuess)){
            console.log(userGuess)
        }else {
          console.log('wrong guess')
            return undefined
        }
    
    
  })
