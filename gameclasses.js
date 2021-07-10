//This class takes a size and generates a ship based on that size
class battleship {
    constructor(size){
        this.size = size
        this.coords = []
        this.hit = []
        for(let i = 0; i < size; i++){
            this.hit.push(true)
        }
    }

}

//The player intialized with 5 different ships
class player {
    constructor(){
        this.ships = 5
        this.shiplist = []
        this.shiplist.push(new battleship(5))
        this.shiplist.push(new battleship(4))
        this.shiplist.push(new battleship(3))
        this.shiplist.push(new battleship(3))
        this.shiplist.push(new battleship(2))
    }
}
