let playerScorea = 0
let computerScorea = 0
let roundWinner = ''

function playRound(playerSelection, computerSelection){
    if( playerSelection == computerSelection){
        roundWinner = 'tie'
    }
    if(playerSelection == "Rock" && computerSelection == "Paper" ||
        playerSelection == "Scissors" && computerSelection == "Rock" ||
        playerSelection == "Paper" && computerSelection == "Scissors"){
            computerScorea++
            roundWinner = "computer"
        }
    if(playerSelection == "Paper" && computerSelection == "Rock" ||
        playerSelection == "Rock" && computerSelection == "Scissors" ||
        playerSelection == "Scissors" && computerSelection == "Paper"){
            playerScorea++
            roundWinner = "you"
        }
    updateScoreMessage(roundWinner, playerScorea, computerScorea)
}

function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'Rock'
      case 1:
        return 'Paper'
      case 2:
        return 'Scissors'
    }
  }
  
  function isGameOver() {
    return playerScorea === 5 || computerScorea === 5
  }

const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('scoreMessage')
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')
const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const computerScore = document.getElementById("computerScore")
const playerScore = document.getElementById("playerScore")
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')

rockBtn.addEventListener('click', () => handleClick('Rock'))
paperBtn.addEventListener('click', () => handleClick('Paper'))
scissorsBtn.addEventListener('click', () => handleClick('Scissors'))
restartBtn.addEventListener("click", restartGame)

function handleClick(playerSelection) {

  if (isGameOver()) {
    openEndgameModal()
    return
  }

  const computerSelection = getRandomChoice()
  playRound(playerSelection, computerSelection)
  updateChoices(playerSelection, computerSelection)
  updateScore()

  if (isGameOver()) {
    openEndgameModal()
    setFinalMessage()
  }
  
}

function updateChoices(playerSelection, computerSelection) {
  switch (playerSelection) {
    case 'Rock':
      playerSign.textContent = '✊'
      break
    case 'Paper':
      playerSign.textContent = '✋'
      break
    case 'Scissors':
      playerSign.textContent = '✌'
      break
  }

  switch (computerSelection) {
    case 'Rock':
      computerSign.textContent = '✊'
      break
    case 'Paper':
      computerSign.textContent = '✋'
      break
    case 'Scissors':
      computerSign.textContent = '✌'
      break
  }
}

function updateScore() {
  if (roundWinner === 'tie') {
    scoreInfo.textContent = "It's a tie!"
  } else if (roundWinner === 'you') {
    scoreInfo.textContent = 'You won!'
  } else if (roundWinner === 'computer') {
    scoreInfo.textContent = 'You lost!'
  }

  playerScore.textContent = `${playerScore}`
  computerScore.textContent = `${computerScore}`
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
      scoreMessage.textContent = `${
        playerSelection
      } beats ${computerSelection}`
      return
    }
    if (winner === 'computer') {
      scoreMessage.textContent = `${
        playerSelection
      } is beaten by ${computerSelection}`
      return
    }
  
    scoreMessage.textContent = `${
      playerSelection
    } ties with ${computerSelection}`
}

function openEndgameModal() {
  endgameModal.classList.add('active')
  overlay.classList.add('active')
}

function openEndgameModal() {
  endgameModal.classList.add('active')
  overlay.classList.add('active')
}

function closeEndgameModal() {
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}

function setFinalMessage() {
  return playerScore > computerScore
    ? (endgameMsg.textContent = 'You won!')
    : (endgameMsg.textContent = 'You lost...')
}

function restartGame() {
  playerScorea = 0
  computerScorea = 0
  scoreInfo.textContent = 'Choose your weapon'
  scoreMessage.textContent = 'First to score 5 points wins the game'
  playerSign.textContent = '❔'
  computerSign.textContent = '❔'
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}