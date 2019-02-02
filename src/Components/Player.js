import React, { Component } from "react";
import { Card, Button, PlayerHand } from "../Styles/Styled";

class Player extends Component {
  state = {
    showEditField: false,
    newName: ""
  };

  handleEdit = () => {
    if (this.state.showEditField && this.state.newName !== "") {
      this.props.editPlayer(this.props.player, this.state.newName);
    }
    this.setState({
      showEditField: !this.state.showEditField
    });
  };

  handleChange = e => {
    this.setState({
      newName: e.target.value
    });
  };

  render() {
    return (
      <article id={this.props.player.id}>
        <p>
          {this.props.player.winner ? 'WINNER:' : ''}
          {this.props.player.name}
          <Button onClick={this.handleEdit}>
            <span role="img" alt="pencil" aria-label="pencil">
              ✏️
            </span>
            {this.state.showEditField ? "Confirm" : "Edit"}
          </Button>
          {this.state.showEditField ? (
            <input
              onChange={this.handleChange}
              placeholder={this.props.player.name}
              type="text"
            />
          ) : (
            ""
          )}
          <Button onClick={() => this.props.removePlayer(this.props.player)}>
            <span role="img" alt="flame" aria-label="flame">
              🔥
            </span>
            Remove
          </Button>
        </p>
        <PlayerHand>
          {this.props.player.cards.map(card => (
            <Card key={this.props.player.id + card} suit={card[1]} value={card[0]}>
              {card[0]}
            </Card>
          ))}
        </PlayerHand>
      </article>
    );
  }
}

export default Player;
