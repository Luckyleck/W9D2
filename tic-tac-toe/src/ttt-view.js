class View {
  constructor(game, figure) {
    this.game = game;
    this.figure = figure;

    // also another way to automatically run setupBoard when refreshed
    // this.setupBoard();
  }

  setupBoard() {
    // appendChild takes in a creation of an HTML element
    const ul = this.figure.appendChild(document.createElement("ul"))
    
    for (let i = 0; i < 9; i++) {
      const li = document.createElement("li")
      ul.appendChild(li)
    }

  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
