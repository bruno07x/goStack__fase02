const express = require('express');
const routes = require('./routes');

class App{
  constructor(){
    // Propriedade responsável pela class express.
    this.server = express();

    this.middleware();
    this.routes();
  }
  middleware(){
    this.server.use(express.json());
  }
  routes(){
    this.server.use(routes);
  }
}
// -> Exporta a classe App inteira
// module.exports = new App();
// -> Exporta somente a propriedade server da class App()
module.exports = new App().server;