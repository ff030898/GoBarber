import React from "react";
import { Bouce1, Bouce2, SpinnerContainer } from "./styles";


const Spinner: React.FC = () => {
  return (
    <SpinnerContainer>
      <Bouce1 />
      <Bouce2 />
    </SpinnerContainer>
  );
};

export default Spinner;
