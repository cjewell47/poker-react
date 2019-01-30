import React, { Component } from "react";

import { suits, values } from "../utils";

import Layout from "./Layout";
import Deck from "./Deck";
import Player from "./Player";
import { Button, Footer } from "../Styles/Styled";

class App extends Component {
  state = {
	  players: 1
  };

  addPlayer = () => {
	  if (this.state.players < 6) {
		  this.setState({
			  players: this.state.players + 1
		  });
	  }
  }

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
					{[...Array(this.state.players)].map((i) => <Player key={i}>♦</Player>)}
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
