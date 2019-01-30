import React, { Component } from "react";

import { suits, values } from "../utils";

import Layout from "./Layout";
import Deck from "./Deck";
import Player from "./Player";
import { Button, Footer } from "../Styles/Styled";

class App extends Component {
  state = {
    players: [
      {
        id: 1
      }
    ]
  };

  addPlayer = () => {
    if (this.state.players.length < 6) {
      this.setState({
        players: [
          ...this.state.players,
          {
            id: this.state.players[this.state.players.length - 1].id + 1
          }
        ]
      });
    }
  };

  removePlayer = e => {
    const players = this.state.players.filter(player => {
      return player.id !== e.player.id;
    });
    this.setState({
      players
    });
  };

  render() {
    return (
      <Layout>
        <section>
          <h1>Cards deck</h1>
          <Deck suits={suits} values={values} />
        </section>
        <section>
          <header>
            <h1>Players</h1>
          </header>
          <section>
            {this.state.players.map((player, i) => (
              <Player
                player={player}
                key={i}
                removePlayer={this.removePlayer}
              />
            ))}
          </section>
          <Footer>
            <Button onClick={this.addPlayer}>
              <span
                role="img"
                alt="woman raising hand"
                aria-label="woman raising hand"
              >
                🙋‍♀️
              </span>
              Add new player
            </Button>
            <Button>
              <span role="img" alt="trophy" aria-label="trophy">
                🏆
              </span>
              Find the winner
            </Button>
          </Footer>
        </section>
      </Layout>
    );
  }
}

export default App;
