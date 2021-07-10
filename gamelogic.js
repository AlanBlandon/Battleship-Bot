// Use this function to check the validity of the hits
// This accepts the letter and number for the cords and a 2d array of the targets board
let didHit = (targetSquareNum, targetSquareLetter, targetGrid) => {
    if(targetGrid[targetSquareNum][targetSquareLetter]){
        return true
    }
        return false
}

//Example of a ship object
//It just has two arrays to show the ships cords and if they have been hit
let exampleShip = {
    cords:[["A", "1"],["B", "2"], ["C", "3"]],
    hit:[true, true, true]
}

// Use this function to check if a ship has been sunk
// This function accepts the a ship object like the example above
let shipSunk = ship => {
    return ship.hit.every(cord => { 
        return cord 
    })  
}