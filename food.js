import {onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'
let food = foodPositionRandomizer()
const expandRate = 1
let counter = document.getElementById('score'); 
counter = 0; 
export function update(){
 if (onSnake(food)){
     expandSnake(expandRate)
     //just hardcoded for now will need to randomize later: update Randomized
     counter += 1; 
     document.getElementById('score').innerHTML = `Score: ${counter}`; 
     food = foodPositionRandomizer();
 }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function foodPositionRandomizer(){
    let newFoodSpot
    while (newFoodSpot == null || onSnake(newFoodSpot)) {
        newFoodSpot = randomGridPosition(); 
    }
    return newFoodSpot; 
}
