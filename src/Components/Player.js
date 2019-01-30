import React from "react";
import { Card, Button, PlayerHand } from "../Styles/Styled";

const Player = ({ player, removePlayer }) => {

  return (
    <article id={player.id}>
      <p>
        Player {player.id} name 
        <Button>
          <span role="img" alt="pencil" aria-label="pencil">
            ✏️
          </span>
          Edit
        </Button>
        <Button onClick={() => removePlayer({player})}>
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
};

export default Player;
