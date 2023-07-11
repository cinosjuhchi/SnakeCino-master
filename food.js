import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
const EXPANSION_RATE = 1
var score = 0
var audio = new Audio('./wak.wav')

function increaseScore() {
    score += 1;
    var scoreElement = document.getElementById("score");
    scoreElement.textContent ='Score: ' + score;
  }

export function update(){
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
        audio.play()
        increaseScore()
      }
}

export function draw(gameBoard){
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.s
        foodElement.style.gridColumnStart = food.c
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
}



function getRandomFoodPosition() {
    let newFoodPosition
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}