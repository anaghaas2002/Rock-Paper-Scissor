let totalScore = 0

function getComputerChoice() {
    let play = ['rock', 'paper', 'scissor']
    let randomNumber = Math.floor(Math.random() * 3)
    return play[randomNumber]

}

function getResult(playerChoice, computerChoice) {

    let score
    if (playerChoice == computerChoice) {
        score = 0;
    }
    else if (playerChoice == 'rock' && computerChoice == 'scissor') {
        score = 1;
    }
    else if (playerChoice == 'paper' && computerChoice == 'rock') {
        score = 1;
    }
    else if (playerChoice == 'scissor' && computerChoice == 'paper') {
        score = 1;
    }
    else {
        score = -1;
    }
    return score
}

function showResult(score, playerChoice, computerChoice) {
    let player_Score = document.getElementById('playerScore')
    let hand = document.getElementById('hand')
    let result = document.getElementById('result')
    if (score == -1) {

        result.innerText = `You Lose !`
    }
    else if (score == 1) {

        result.innerText = `You Won !`
    }

    else if (score == 0) {

        result.innerText = `Its Draw !`
    }
    player_Score.innerText = `Your total score : ${totalScore}`
    hand.innerText = `You : ${playerChoice} vs Computer : ${computerChoice}`
}

function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice, computerChoice)
    totalScore = totalScore + score
    showResult(score, playerChoice, computerChoice)
}

function playGame() {

    let rps = document.querySelectorAll('.rps')
    rps.forEach(choice => {
        choice.onclick = () => onClickRPS(choice.value)

    })

    let end = document.getElementById('end')
    end.onclick = () => endGame()

}

function endGame() {

    totalScore = 0

    let playerScore = document.getElementById('playerScore')
    let hand = document.getElementById('hand')
    let result = document.getElementById('result')

    playerScore.innerText = ''
    hand.innerText = ''
    result.innerText = ''
}

playGame()
