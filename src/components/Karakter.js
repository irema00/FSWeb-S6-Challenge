// Karakter bileşeninizconst [characters, setCharacters] = useState([]);
import React, { useState } from "react";

import styled from "styled-components";

const AccordionContainer = styled.div`
  width: 400px;
  margin: auto;
`;

const CharList = styled.div`
  background: #fff;
  color: #000;
  text-decoration: none;
  text-align: center;
  padding: 10px;
  display: block;
  font-size: 1.3em;
  letter-spacing: 3px;
  overflow: hidden;
  border-bottom: 3px solid #aaa69d;
  transition: 2s;
`;

const Features = styled.div`
  padding: 10px;
  font-family: "Helvetica Neue";
  font-size: 1.1em;
  background-color: rgba(246, 229, 206, 0.8);
  color: 000;
  letter-spacing: 2px;
  transition: 2s;
`;

const Characters = ({ data }) => {
  const [active, setActive] = useState(false);

  return (
    <AccordionContainer>
      <CharList onClick={() => (active ? setActive(false) : setActive(true))}>
        {data.name}
      </CharList>

      {active && (
        <Features>
          <p> Gender : {data.gender}</p>
          <p> Height : {data.height}</p>
          <p> Mass : {data.mass}</p> <p> Birth Year: {data.birth_year}</p>{" "}
          <p> Eye Color: {data.eye_color}</p>
          <p> Hair Color : {data.hair_color}</p>
          <p> Skin Color : {data.skin_color}</p>
        </Features>
      )}
    </AccordionContainer>
  );
};

export default Characters;
