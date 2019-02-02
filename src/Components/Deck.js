import React from "react";
import { Card } from "../Styles/Styled";

const Deck = ({ suits, values, selected }) => (
  <>
    {suits.map(suit => (
      <div key={suit}>
        {values.map(value => (
          <Card key={suit + value} id={suit + value} suit={suit} value={value} selected={ selected.indexOf(value + suit) > -1 }>
            {value}
          </Card>
        ))}
      </div>
    ))}
  </>
);

export default Deck;
