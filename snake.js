import { getInputDirection } from "./input.js"
var scoreElement = document.getElementById("score")

export let SNAKE_SPEED
window.requestIdleCallback(Spd)

function Spd(){
    if(scoreElement.textContent === 'Easy'){
        return SNAKE_SPEED = 10
    }else if(scoreElement.textContent === 'Normal'){
        return SNAKE_SPEED = 20
    }else if(scoreElement.textContent === 'Hard'){
        return SNAKE_SPEED = 25
    }else if(scoreElement.textContent === ''){
        document.location.href = 'level.html'
        return false
    }
}


if(scoreElement === 'Easy'){
    Spd()
} else if(scoreElement === 'Hard'){
    Spd_S()
}

const snakeBody = [{ c: 11, s:11 }]
let newSegments = 0

export function update(){
    addSegments()
    const inputDirection = getInputDirection()
    for(let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].c += inputDirection.c
    snakeBody[0].s += inputDirection.s
}

export function draw(gameBoard){
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.s
        snakeElement.style.gridColumnStart = segment.c
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount) {
    newSegments += amount
}

export function onSnake(position, { ignoreHead = false } = {}){
    return snakeBody.some((segment, index) => {
        if(ignoreHead && index === 0) return false
        return equalPosition(segment, position)
    })
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

function equalPosition(pos1, pos2){
    return pos1.c === pos2.c && pos1.s === pos2.s
}

function addSegments(){
    for(let i = 0; i < newSegments; i++){
        snakeBody.push({ ...snakeBody[snakeBody.length - 1]})
    }
    newSegments = 0
}