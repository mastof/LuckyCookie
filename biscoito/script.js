const imgclose = document.querySelector(".imgclose")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const list = document.querySelector("ul")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const seven = document.querySelector(".seven")
const eight = document.querySelector(".eight")
const nine = document.querySelector(".nine")
const ten = document.querySelector(".ten")
let randomNumber = Math.round(Math.random() * 10)
const btnReset = document.querySelector('#btnReset')

imgclose.addEventListener('click', HandleClick)
btnReset.addEventListener('click', handleResetClick)

function HandleClick(e) {
  screen1.classList.add("hide")
  screen2.classList.remove("hide")
  console.log("olá")

  switch(randomNumber){
    case 1:
      one.classList.remove("hide")
      console.log("1")
    break
    case 2:
      two.classList.remove("hide")
      console.log("2")
    break
    case 3:
      three.classList.remove("hide")
      console.log("3")
    break
    case 4:
      four.classList.remove("hide")
      console.log("4")
    break
    case 5:
      five.classList.remove("hide")
      console.log("5")
    break
    case 6:
      six.classList.remove("hide")
      console.log("6")
    break
    case 7:
      seven.classList.remove("hide")
      console.log("7")
    break
    case 8:
      eight.classList.remove("hide")
      console.log("8")
    break
    case 9:
      nine.classList.remove("hide")
      console.log("9")
    break
    case 10:
      ten.classList.remove("hide")
      console.log("10")
    break
    }
  }
  
  function handleResetClick() {
    toggleScreen()
  }
  function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
  }