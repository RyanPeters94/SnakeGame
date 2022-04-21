import { getInputDirection } from "./input.js";

export const snakeSpeed = 3;
//zero seems to be outside grid. update:Zero is out of grid, 1- whatever number your grid spans to
const snakeBody = [{x:11, y:11}];
let newSegments = 0; 

export function update(){
    addSegments(); 

    const inputDirection = getInputDirection(); 
 for (let i = snakeBody.length-2; i >= 0; --i){
     //loop through the body and while i is greater than 0 we decrement. We then take the snakeBody and add 1 to it and set that equal to a new element that we create and that is how we get each piece of the body to move where the previous piece was.
    snakeBody[i+1] = { ...snakeBody[i] }
 }
 snakeBody[0].x += inputDirection.x
 snakeBody[0].y += inputDirection.y
 //as y increases our snake moves down REMEMBER THIS
}

 
export function draw(gameBoard){
snakeBody.forEach(segment =>{
    const snakeElement = document.createElement('div')
    //We change the gridRow and gridColumn to the opposite so that our snake moves to the correct spot instead of the opposite direction we want it to go eg right would be down and left would be up
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)

})
}

export function expandSnake(amount){
    newSegments =+ amount; 
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0){ 
            return false; }
            return equalPositions(segment, position); 
    
    }) 
}

export function snakeIntersection() {
    return onSnake (snakeBody[0], {ignoreHead : true })
}

export function getSnakeHead(){
    return snakeBody[0]; 
}

function equalPositions(position1, position2){
    return position1.x === position2.x && position1.y === position2.y;

}

function addSegments(){
    for (let i=0; i < newSegments; i++){
        snakeBody.push({...snakeBody[snakeBody.length -1]})
    }
    //snake too big this solves it
    newSegments = 0; 
}

