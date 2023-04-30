import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  BsGlobe2,
  BsHeartPulse,
  BsGearWideConnected,
  BsGraphUpArrow,
} from "react-icons/bs";
import { ItemDiv, RackDiv } from "./NewsRackStyle";

const NewsRack = () => {
  return (
    <div>
      <Header />
      <RackDiv>
        <ItemDiv>
          <div id="insideDiv">
            <BsGlobe2 id="global" />
            <p>Global</p>
          </div>
        </ItemDiv>
        <ItemDiv>
          <div id="insideDiv">
            <BsHeartPulse id="health" />
            <p>Health</p>
          </div>
        </ItemDiv>
        <ItemDiv>
          <div id="insideDiv">
            <BsGraphUpArrow id="business" />
            <p>Business</p>
          </div>
        </ItemDiv>
        <ItemDiv>
          <div id="insideDiv">
            <BsGearWideConnected id="tech" />
            <p>Tech</p>
          </div>
        </ItemDiv>
      </RackDiv>
      <Footer />
    </div>
  );
};

export default NewsRack;
