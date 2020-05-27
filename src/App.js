import styled from "@emotion/styled";
import Chance from "chance";
import React from "react";

import background from "./background.png";
import Button from "./Button";
import Nameplate from "./Nameplate";
import NumberBox from "./NumberBox";

const chance = new Chance();

export default function App() {
  const [thiaNumber, setThiaNumber] = React.useState(0);
  const [pakitaNumber, setPakitaNumber] = React.useState(0);
  const [legolasNumber, setLegolasNumber] = React.useState(0);
  const [aelarNumber, setAelarNumber] = React.useState(0);

  function randomizeThiaNumber() {
    setThiaNumber(chance.integer({ min: 0, max: 20 }));
  }

  function randomizePakitaNumber() {
    setPakitaNumber(chance.integer({ min: 0, max: 20 }));
  }

  function randomizeLegolasNumber() {
    setLegolasNumber(chance.integer({ min: 0, max: 20 }));
  }

  function randomizeAelarNumber() {
    setAelarNumber(chance.integer({ min: 0, max: 20 }));
  }

  return (
    <StyledApp>
      {/* Thia */}
      <Nameplate top={200} left={850}>
        Thia
      </Nameplate>
      <Button top={505} left={825} onClick={randomizeThiaNumber}>
        ATK
      </Button>
      <Button top={505} left={1120} onClick={randomizeThiaNumber}>
        DMG
      </Button>
      <NumberBox top={207} left={1535} value={thiaNumber} />

      {/* Pakita */}
      <Nameplate top={845} left={850}>
        Pakita
      </Nameplate>
      <Button top={1154} left={825} onClick={randomizePakitaNumber}>
        ATK
      </Button>
      <Button top={1154} left={1120} onClick={randomizePakitaNumber}>
        DMG
      </Button>
      <NumberBox top={870} left={1535} value={pakitaNumber} />

      {/* Legolas */}
      <Nameplate top={1490} left={850}>
        Legolas
      </Nameplate>
      <Button top={1800} left={825} onClick={randomizeLegolasNumber}>
        ATK
      </Button>
      <Button top={1800} left={1120} onClick={randomizeLegolasNumber}>
        DMG
      </Button>
      <NumberBox top={1520} left={1535} value={legolasNumber} />

      {/* Aelar */}
      <Nameplate top={2140} left={850}>
        Aelar
      </Nameplate>
      <Button top={2445} left={825} onClick={randomizeAelarNumber}>
        ATK
      </Button>
      <Button top={2445} left={1120} onClick={randomizeAelarNumber}>
        DMG
      </Button>
      <NumberBox top={2145} left={1535} value={aelarNumber} />
    </StyledApp>
  );
}

// #region Styles
const StyledApp = styled.div`
  width: 2048px;
  height: 2732px;
  background: url(${background});
`;
// #endregion
