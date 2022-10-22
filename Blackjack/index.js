let hasBlackJack = false
let isAlive = true
let sumCard = 0
let sumCardMOB = 0
let cards = []
let cardsMOB = []
let mobStopFlg = false
let playerStopFlg = false

let cardEl = document.getElementById("sumCard")
let cardMOBEl = document.getElementById("sumCardMOB")
let messageEl = document.getElementById("message")
let moreCardEl = document.getElementById("moreCard-btn")
let emptyEl = document.getElementById("empty-btn")
let endGameEl = document.getElementById("endGame-btn")
let resetEl = document.getElementById("reset-btn")
let cardsEl = document.getElementById("cards")
let cardsMOBEl = document.getElementById("cardsMOB")
let matchEl = document.getElementById("match")

function moreCard() {
    window.setTimeout(function() {
        getRandomCard(cards)
        sumCard = cards.reduce(function(sum, element) {
            return sum + element
        }, 0)

        if (!mobStopFlg) {
            getRandomCard(cardsMOB)
            sumCardMOB = cardsMOB.reduce(function(sum, element) {
                return sum + element
            }, 0)
            if (sumCardMOB > 21) {
                sumCardMOB -= cardsMOB.slice(-1)[0]
                mobStopFlg = true
            }
        }

        cardsEl.textContent = cards
        cardEl.textContent = sumCard
        emptyEl.style.display = "inline"
        endGameEl.style.display = "inline"
        questionCard()
    }, 680)
}

function resetCard(){
    window.setTimeout(function() {
        resetButton()
    }, 500)
}

function questionCard() {
    let player1 = sumCard
    let player2 = sumCardMOB
    if (sumCard < 21) {
        messageEl.textContent = "One More Card?"
        moreCardEl.textContent = "Draw"
    } else if (sumCard === 21) {
        hasBlackJack = true
        playerStopFlg = true
        messageEl.textContent = "You're BlackJack!! You Win!!"
        resetEl.style.display = "inline"
        emptyEl.style.display = "none"
        endGameEl.style.display = "none"
        moreCardEl.style.display = "none"
        document.body.style.backgroundImage = "url('Regao.jpg')"
        cardsMOBEl.textContent = player2
    } else {
        messageEl.textContent = "Game Over"
        resetEl.style.display = "inline"
        emptyEl.style.display = "none"
        endGameEl.style.display = "none"
        moreCardEl.style.display = "none"
        messageEl.style.color = "red"
        document.body.style.backgroundImage = "url('Rend.jpg')"
        isAlive = false
        cardsMOBEl.textContent = player2
    }
}

function resetButton() {
    sumCard = 0
    sumCardMOB = 0
    cardEl.textContent = sumCard
    moreCardEl.style.display = "inline"
    resetEl.style.display = "none"
    messageEl.textContent = "Want to play a round?"
    messageEl.style.color = ""
    moreCardEl.textContent = "Start Game"
    document.body.style.backgroundImage = "url('R.jpg')"
    cards.splice(0, cards.length)
    cardsMOB.splice(0, cardsMOB.length)
    cardsEl.textContent = ""
    cardsMOBEl.textContent = "?"
    mobStopFlg = false
    playerStopFlg = false
}

function resultMatch() {
    window.setTimeout(function() {
        let player1 = sumCard
        let player2 = sumCardMOB
        playerStopFlg = true
        if (player1 > player2) {
            messageEl.textContent = "You Win!"
            document.body.style.backgroundImage = "url('Regao.jpg')"
        } else if (player1 < player2) {
            messageEl.textContent = "You lose!"
            document.body.style.backgroundImage = "url('Rend.jpg')"
        } else {
            messageEl.textContent = "Draw..."
            document.body.style.backgroundImage = "url('R.jpg')"
        }
        resetEl.style.display = "inline"
        emptyEl.style.display = "none"
        endGameEl.style.display = "none"
        moreCardEl.style.display = "none"
        cardsMOBEl.textContent = player2
    }, 680)
}

function getRandomCard(yourCard) {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        yourCard.push(10)
    } else if (randomNumber === 1) {
        yourCard.push(11)
    } else {
        yourCard.push(randomNumber)
    }
}