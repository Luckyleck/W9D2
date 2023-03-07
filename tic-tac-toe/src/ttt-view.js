class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;

    // also another way to automatically run setupBoard when refreshed
    this.setupBoard();
  }

  setupBoard() {
    // appendChild takes in a creation of an HTML element
    const ul = this.el.appendChild(document.createElement("ul"))
    
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let pos = [i, j];
        const li = document.createElement("li")
        const box = ul.appendChild(li);
        // const article = document.querySelector("li")
        li.setAttribute("data-id",`${pos}`)
      }

    }

  }
  
  bindEvents() {


  }

  handleClick(e) {
    //e is event
    const cell = e.target;
    debugger
    this.game.playMove([row, col]);
    console.log("hi")

  }

  makeMove(square) {}

}

module.exports = View;
