import React, { Component } from "react";

import { suits, values } from "../utils";

import Layout from "./Layout";
import Deck from "./Deck";
import Player from "./Player";
import { Button, Footer } from "../Styles/Styled";

const poker = require("poker-hands");

class App extends Component {
  state = {
    players: [
      {
        id: 1,
        name: "Player 1",
        cards: [],
        winner: false
      },
      {
        id: 2,
        name: "Player 2",
        cards: [],
        winner: false
      }
    ],
    selected: []
  };

  randomCard = () => {
    const suit = suits[Math.floor(Math.random() * suits.length)],
      value = values[Math.floor(Math.random() * values.length)],
      card = value + suit;
    return card;
  };

  dealCards = (n, init) => {
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

    const selected = [].slice.call(cards);
    return this.assignCardsToPlayers(selected, init);
  };

  assignCardsToPlayers = (cards, init) => {
    const hands = [];

    while (cards.length > 0) {
      hands.push(cards.splice(0, 5));
    }

    if (init) {
      const players = this.state.players;
      players[0].cards = hands[0];
      players[1].cards = hands[1];
      this.setState({
        players: players
      });
    }

    return hands;
  };

  addPlayer = () => {
    if (this.state.players.length < 6) {
      const hands = this.dealCards(this.state.players.length + 1);
      this.setState({
        players: [
          ...this.state.players,
          {
            id: this.state.players[this.state.players.length - 1].id + 1,
            name:
              "Player " +
              (this.state.players[this.state.players.length - 1].id + 1),
            cards: hands[hands.length - 1],
            winner: false
          }
        ]
      });
    }
  };

  removePlayer = e => {
    if (this.state.players.length > 2) {
      const players = this.state.players.filter(player => {
        return player.id !== e.id;
      });

      const cards = e.cards,
        selected = this.state.selected.filter(card => {
          return cards.indexOf(card) === -1;
        });

      this.setState({
        players,
        selected
      });
    }
  };

  editPlayer = (p, newName) => {
    const editedPlayer = p;
    editedPlayer.name = newName;
    const players = this.state.players.map(player => {
      if (player.id !== p.id) {
        return player;
      } else {
        return editedPlayer;
      }
    });
    this.setState({
      players: players
    });
  };

  findWinner = () => {
    const hands = this.state.players.map(player => {
      return player.cards.toString().split(',').join(' ')
    });
    
    const winner = (a,b) =>  {
      console.log(a,b)
      const args = [a, b];
      const best = poker.judgeWinner([hands[a], hands[b]]);
      return args[best];
    }

      let prospect = 0;
      const len = hands.length;
      let i = 1;
      while (i < len) {
        prospect = winner(prospect, i);
        i++;
      }
      console.log('winner', prospect)
  }

  componentDidMount() {
    this.dealCards(2, true);
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
            <Button onClick={this.findWinner}>
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
