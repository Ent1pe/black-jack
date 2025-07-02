
let sum = 0
let dealerSum = 0
let isAlive = false
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let cards = []
let dealerCard = []

let player = {
    name: "Justin",
    chips: 145

}

let dealer = {
    cardOne: getRandomCard(),
    cardTwo: getRandomCard(),


}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    if(cards.length != 0){
        cards = []
    }
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let dealerCardOne = getRandomCard()
    let dealerCardTwo = getRandomCard()
    sum = firstCard + secondCard
    dealerSum = dealerCardOne + dealerCardTwo
    cards.push(firstCard)
    cards.push(secondCard)
    dealerCard.push(dealerCardOne)
    dealerCard.push(dealerCardTwo)
    renderGame(dealerSum)
}

function renderGame(dealerSum) {
    cardsEl.textContent = "Cards: " 
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum == 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    dealerHit(dealerSum)

}



function newCard() {
    if (isAlive == true && hasBlackJack != true){
        let newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
}


function getRandomCard() {
    
    let card = Math.floor(Math.random() * 10) + 1
    if (card == 1){
        return 11
    } else {
        return card
    }
}



function reset() {
    cards = []
    messageEl.textContent = "Want to play a round?"
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: "
}


function stay() {
    document.getElementById("start").style.visibility = "hidden"
    document.getElementById("stay").style.visibility = "hidden"
    document.getElementById("new-card").style.visibility = "hidden"
    
}


function dealerHit(sum) {
    
}