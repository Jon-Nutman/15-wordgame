import { commonWords } from "./constants"

// Getting words of 3 letters or more
// not random yet

const randomWord = commonWords.filter((commonWords) => commonWords.length >= 3)[0]
console.log(randomWord)

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

        if(randomWord.includes(userGuess)){
            console.log(userGuess)
        }else {
          console.log('wrong guess')
            return undefined
        }
  })

  




  // check to see if randomWord includes the Userguess

  
 



