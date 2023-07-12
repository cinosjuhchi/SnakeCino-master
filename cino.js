import{ update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import{ update as updateFood, draw as drawFood } from './food.js'
import { score } from "./score.js";
import { outsideGrid } from './grid.js'
let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')
const levelBoard = document.getElementById('score')
let Spd
let total

function main(currentTime){

    if(gameOver) {
        Swal.fire({
            title: 'Noo!',
            text: 'You lost :(',
            imageUrl: './alert.jpeg',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Kamu gagal :(',
          }).then((result) => {
            if (result.isConfirmed) {
              // Spd = levelBoard.textContent
              window.location = '/snake.html'
            }
          })
        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000 
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return

    console.log('Render')
    lastRenderTime = currentTime

    update()
    draw()
    checkDeath()
}

window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
}

function draw(){
    gameBoard.innerHTML = ''
    drawFood(gameBoard)
    drawSnake(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

