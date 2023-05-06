import React from "react";
import {
  GlobalCompoDiv,
  GlobalTitleDiv,
  GlobalNewsContainer,
} from "./GlobalCompoStyle";
import { BsGlobe2 } from "react-icons/bs";

const global = () => {
  return (
    <GlobalCompoDiv>
      <GlobalTitleDiv>
        <BsGlobe2 id="globalSvg" />
        <p id="globalTitle">global</p>
      </GlobalTitleDiv>
      <GlobalNewsContainer>
        <p id="globalText">global news pick one !</p>
        <ul id="globalUl"></ul>
      </GlobalNewsContainer>
    </GlobalCompoDiv>
  );
};

export default global;
