import { commonWords } from "./constants"

// Getting words of 3 letters or more
// not random yet

const newWordList = commonWords.filter((commonWords) => commonWords.length >= 3)

const randomWord = newWordList[Math.floor(Math.random() * newWordList.length)]
console.log(randomWord)


//Display the chose random word
// document.querySelector("#rightGuesses").innerHTML = randomWord

// replace characters of random word with "-"
// let hiddenWord = randomWord.replaceAll('.', '-')

// instead of replacing maybe just make a new string and display none on the other


function hiddenWord(str){
    let hidden = ''
    for (let i = 0; i < str.length; i++) {
     hidden += '-'
}
// console.log(hidden)
return hidden
}
const dashes = hiddenWord(randomWord)
document.querySelector("#oldDashes").innerHTML = dashes


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

    // let rightGuesses = 
    function compileRightGuesses(){
        if(randomWord.includes(userGuess)){
            function removeOldDashes(){
                let oldDashes = document.querySelector("#oldDashes")
                oldDashes.style.display = 'none'
            }
            removeOldDashes()
            console.log(userGuess)
            return `${document.querySelector("#newDashes").innerHTML = userGuess + document.querySelector("#newDashes").textContent }`
        }else {
          console.log('wrong guess')
            return undefined
        }
        
    }
    compileRightGuesses()

   

    function removeButton (){
        let button = e.target
        button.style.display = 'none'
    }
    removeButton()


    
    // have to change the return to be the user guess in its corresponding part among the dashes
    // on click might be best to display none for dashes that appear when page loads
    // maybe use str.split to get the random word into individual strings of its letters
    // then replace the non matching charachters with '-' 
    // then join em back up
//    function updatedDashes(str){
//        let  showing = ''
//     for (let i = 0; i < str.length; i++){
//         if(randomWord.includes(userGuess)){
//         console.log(showing += '/userGuess/,str')

//         // return  userGuess
//         }
//     }
//     }
 })
  
