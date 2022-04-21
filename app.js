//imports and variables
import {update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'
import { outsideGrid } from './grid.js'
let lastRenderTime=0; 
let gameOver = false; 
const gameBoard = document.getElementById('gameBoard')
//const counter = document.getElementById('score')
//const hasEatenFood = snake[0].x === foodX && snake[0].y === foodY;
//using window. because it is the closest object to the source (what we are trying to do)

function mainState(currentTime){
    
    if (gameOver){
        if (confirm('Say my name, Say my name.... I mean press OK to restart!')){
            ///want to do this without refreshing the page so youll need to update this with the original drawsnake and drawfood functions to manually reset
            //draw(gameBoard) 
            //update(gameBoard) I did this before and it worked to reset the page without refreshing but now I cant seem to get this to run
            
             //gameBoard.innerHTML=''; this works for clearing the snake and food but i cant get it to redraw either of the pieces
             
                //setting the game board innerhtml to empty clears the pieces as the snake moves and makes the length of the snake fixed.
             window.location = '/'; 
            
        }
        return; 
    }
    
    
    window.requestAnimationFrame(mainState)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / snakeSpeed) {
       return; 
   }
   
    lastRenderTime = currentTime; 

    update() 
    draw()
}

window.requestAnimationFrame(mainState);

function update(){
 updateSnake(); 
 updateFood(); 
 checkForDeath(); 
}

function draw(){
    //setting the game board innerhtml to empty clears the pieces as the snake moves and makes the length of the snake fixed.
 gameBoard.innerHTML = ''; 
 drawSnake(gameBoard)
 drawFood(gameBoard)
}

function checkForDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}