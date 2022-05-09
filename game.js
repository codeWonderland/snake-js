import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid, getBoardSize } from './grid.js'

const gameBoard = document.querySelector('#game-board')
let lastRenderTime = 0
let gameOver = false

setBoardSize()
window.requestAnimationFrame(main)

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
        
    lastRenderTime = currentTime
        
    update()

    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
            location.reload()
        }
        return
    }

    draw()
}

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    // clear board
    gameBoard.innerHTML = ''

    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

function setBoardSize() {
    const boardSize = getBoardSize()

    gameBoard.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`;
    gameBoard.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
}