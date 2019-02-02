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
          <Card suit="D" value="A" selected={true}>
            A
          </Card>
          <Card suit="D" value="K">
            K
          </Card>
          <Card suit="D" value="Q">
            Q
          </Card>
          <Card suit="D" value="J">
            J
          </Card>
          <Card suit="D" value="T">
            T
          </Card>
        </PlayerHand>
      </article>
    );
  }
}

export default Player;

// import React from "react";
// import { Card, Button, PlayerHand } from "../Styles/Styled";

// const Player = ({ player, removePlayer, editPlayer }) => {
//   return (
//     <article id={player.id}>
//       <p>
//         {player.name}
//         <Button onClick={() => editPlayer({ player })}>
//           <span role="img" alt="pencil" aria-label="pencil">
//             ✏️
//           </span>
//           Edit
//         </Button>
//         <input type="text"/>
//         <Button onClick={() => removePlayer({ player })}>
//           <span role="img" alt="flame" aria-label="flame">
//             🔥
//           </span>
//           Remove
//         </Button>
//       </p>
//       <PlayerHand>
//         <Card suit="D" value="A" selected={true}>
//           A
//         </Card>
//         <Card suit="D" value="K">
//           K
//         </Card>
//         <Card suit="D" value="Q">
//           Q
//         </Card>
//         <Card suit="D" value="J">
//           J
//         </Card>
//         <Card suit="D" value="T">
//           T
//         </Card>
//       </PlayerHand>
//     </article>
//   );
// };

// export default Player;
