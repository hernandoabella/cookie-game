// Created by Priyangshu 


//Created by Priyangshu//


alert("You want to be the world's first person who become millionire by selling šŖ \n\nBut you can't do that alone. Hire other people and they'll help you make šŖ \n\nSell the šŖ to earn šµ\n\nYou'll win the game once you have 1000000 šµ")

alert("šµ costs 100 šµ and gives you 1 šŖ per second \n\nš¦ costs 800 šµ and gives you 10 šŖ per second \n\nšØāš³ costs 1500 šµ and gives you 20 šŖ per second \n\nš¤ costs 3600 šµ and gives you 60 šŖ per second \n\nAlso you can conduct research š¬ to double the production of šŖ")

var cookieNo = 0
var cashNo = 0
var cpsNo = 0
var grannyNo = 0
var workerNo = 0
var chefNo = 0
var robotNo = 0
var res = 1
var sell1 = 200
var sell2 = 5000

setInterval(function() {
  cookies.innerHTML = cookieNo + " šŖ" 
  cash.innerHTML = cashNo + " šµ" 
  cps.innerHTML = "šŖ/s: " + cpsNo
  grannyN.innerHTML = "Granny: " + grannyNo 
  workerN.innerHTML = "Worker: " + workerNo 
  chefN.innerHTML = "Chef: " + chefNo 
  robotN.innerHTML = "Robot: " + robotNo 
  cpsNo = grannyNo + 10 * res * workerNo + 20 * res * chefNo + 50 * res * robotNo
  a.innerHTML = "Sell " + sell1 + " šŖ"
  b.innerHTML = "Sell " + sell2 + " šŖ"
  
  if (cpsNo >= 1000) {
      cpsNo = cpsNo / 1000 + "K"
  }
  
  if (cashNo >= 1000000) { 
     music.play()
     cashNo = cashNo / 1000000 + "M"
     result.innerHTML = "Congratulations šš Now you're a millionare"
     a.style.display = "none" 
     b.style.display = "none" 
     result.style.display = "initial"  
     cookies.style.display = "none"
     cash.style.display = "none"
     cps.style.display = "none"
     granny.style.display = "none"
     worker.style.display = "none"
     chef.style.display = "none"
     robot.style.display = "none"
     grannyN.style.display = "none"
     workerN.style.display = "none"
     chefN.style.display = "none"
     robotN.style.display = "none"
     research.style.display = "none"
     cookie.style.display = "none"
   }
   
  if (cookieNo >= 10000) {
      sell1 = 5000
      sell2 = 20000
      a.style.fontSize = "5.5vmin"
      b.style.fontSize = "5.5vmin"
  }
},100)


function cookieClick(number) {
 cookieNo = cookieNo  + number
 }

function buyGranny() {
 if (cashNo >= 100) {
     cashNo = cashNo - 100
     grannyNo++
 }
 else {
     //window.navigator.vibrate(100)//
     alert("You need 100 šµ to hire šµ")
 }
}

function buyWorker() {
 if (cashNo >= 800) {
     cashNo = cashNo - 800
     workerNo++
 }
 else {
     //window.navigator.vibrate(100)//
     alert("You need 800 šµ to hire š¦")
 }   
}

function buyChef() {
 if (cashNo >= 1500) {
     cashNo = cashNo - 1500
     chefNo++
 }
 else {
     //window.navigator.vibrate(100)//
     alert("You need 1500 šµ to hire šØāš³")
 }   
}

function buyRobot() {
 if (cashNo >= 3600) {
     cashNo = cashNo - 3600
     robotNo++
 }
 else {
     //window.navigator.vibrate(100)//
     alert("You need 3600 šµ to buy š¤")
 }   
}

function sell200() {
if (cookieNo >= sell1) {
 cookieNo = cookieNo - sell1
 cashNo = cashNo + 2 * sell1
 }
else {
 alert("You don't have " + sell1 + " šŖ")
 }
}

function sell5000() {
if (cookieNo >= sell2) {
 cookieNo = cookieNo - sell2
 cashNo = cashNo + 2 * sell2
 }
else {
 alert("You don't have " + sell2 + " šŖ")
 }
}

function r() {
 if (cashNo >= 50000 && res == 1) {
  cashNo = cashNo - 50000
  res++
  research.innerHTML = "Research ā"
  } 
 else if (res == 2) {
  alert("You've already conducted researchš¬")
 }
 else {
  alert("You need 50000 šµ to conduct research š¬")
 } 
}

setInterval(function() {
 cookieClick(grannyNo)
 cookieClick(10 * res * workerNo)
 cookieClick(20 * res *chefNo)
 cookieClick(50 * res * robotNo)
}, 1000)



