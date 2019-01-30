import React from "react";
import { Card, Button, PlayerHand } from "../Styles/Styled";

const Deck = () => (
  <article>
    <p>
      Player 1 name
      <Button>
        <span role="img" alt="pencil" aria-label="pencil">
          ✏️
        </span>
        Edit
      </Button>
      <Button>
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

export default Deck;
