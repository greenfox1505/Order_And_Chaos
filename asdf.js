const uuidv4 = require('uuid/v4');

class GameManager {
    /**
     * 
     * @param {object} db 
     */
    constructor(db) {
        this.db = db
    }
    /**
     * Gets Game Object
     * @param {string} label 
     * @returns {Game}
     */
    Game(label) {//returns promise
        if (this.db[label] != null) {
            return new Game(this.db[label])
        }
        else {
            throw "Game " + label + " does not exist";
        }
    }
    /**
     * Creates new game
     * @returns {string}
     */
    newGame() {//maybe should return promise?
        let label = uuidv4();
        this.db[label] = {
            order: "",
            chaos: "",
            state: "??",
            turn: "order",
            board: [],
            history: [],
            created: Date.now(),
            lastTurn: Date.now(),
        }
        return label;
    }
}

class Game {
    constructor(gameData) {
        this.gameData = gameData
    }
    get order() {
        return this.gameData.order
    }
    get chaos() {
        return this.gameData.chaos
    }
    get board() { 
        this.board = board
    }
    takeTurn(player) {
        if (this.chaos == "" || this.order == "") {
            throw {
                msg: "Cannot Take Turn Until Both Players Connected",
                state : this.gameData
            }
        }
    }

}


function test() {
    let data = {}
    let gm = new GameManager(data);
    let gameName = gm.newGame()

    let myGame = gm.Game(gameName)
    console.log(myGame)

}

exports.test = test;
exports.GameManager = GameManager;


if (require.main === module) {
    test();
}
