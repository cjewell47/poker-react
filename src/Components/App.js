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
        id: 1,
        name: "Player 1",
        cards: []
      },
      {
        id: 2,
        name: "Player 2",
        cards: []
      }
    ],
    selected: []
  };

  randomCard = () => {
    const suit = suits[Math.floor(Math.random() * suits.length)],
      value = values[Math.floor(Math.random() * values.length)],
      card = suit + value;
    console.log(card);
    return card;
  };

  dealCards = (n) => {
    const cardsNeeded = n * 5,
      cards = this.state.selected.length ? this.state.selected : [];
    while (cards.length < cardsNeeded) {
      const newCard = this.randomCard();
      if (cards.indexOf(newCard) === -1) {
        cards.push(newCard);
      }
    }
    this.setState({
      selected: cards
    });
  };

  addPlayer = () => {
    if (this.state.players.length < 6) {
      this.setState({
        players: [
          ...this.state.players,
          {
            id: this.state.players[this.state.players.length - 1].id + 1,
            name:
              "Player " +
              (this.state.players[this.state.players.length - 1].id + 1),
            cards: []
          }
        ]
      });
      this.dealCards(this.state.players.length + 1);
    }
  };

  removePlayer = e => {
    if (this.state.players.length > 2) {
      const players = this.state.players.filter(player => {
        return player.id !== e.id;
      });
      this.setState({ players });
    }
  };

  editPlayer = (p, newName) => {
    const newP = p;
    newP.name = newName;
    const players = this.state.players.map(player => {
      if (player.id !== p.id) {
        return player;
      } else {
        return newP;
      }
    });
    this.setState({
      players: players
    });
  };

  componentDidMount() {
    this.dealCards(2);
  }

  render() {
    return (
      <Layout>
        <section>
          <h1>Cards deck</h1>
          <Deck suits={suits} values={values} selected={this.state.selected} />
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
                editPlayer={this.editPlayer}
                selected={this.state.selected}
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
