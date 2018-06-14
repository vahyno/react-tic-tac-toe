import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
  render() {
    return (
      <div>
        <h1>TIC TAC TOE:</h1>
        <Board />
      </div>
    );
  }
}

export default Game;
