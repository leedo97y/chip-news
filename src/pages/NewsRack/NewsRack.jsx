import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  BsClock,
  BsGlobe2,
  BsHeartPulse,
  BsGearWideConnected,
  BsGraphUpArrow,
} from "react-icons/bs";
import { WholeDiv, RecentNews, ItemDiv, RackDiv } from "./NewsRackStyle";
import { Link } from "react-router-dom";

const NewsRack = () => {
  return (
    <>
      <Header />
      <WholeDiv>
        <RecentNews>
          <Link to="/recent-news">
            <div id="insideDiv">
              <BsClock id="recent" />
              <p>Recent News</p>
            </div>
          </Link>
        </RecentNews>
        <RackDiv>
          <ItemDiv>
            <Link to="/global">
              <div id="insideDiv">
                <BsGlobe2 id="global" />
                <p>Global</p>
              </div>
            </Link>
          </ItemDiv>
          <ItemDiv>
            <Link to="/health">
              <div id="insideDiv">
                <BsHeartPulse id="health" />
                <p>Health</p>
              </div>
            </Link>
          </ItemDiv>
          <ItemDiv>
            <Link to="/business">
              <div id="insideDiv">
                <BsGraphUpArrow id="business" />
                <p>Business</p>
              </div>
            </Link>
          </ItemDiv>
          <ItemDiv>
            <Link to="/tech">
              <div id="insideDiv">
                <BsGearWideConnected id="tech" />
                <p>Tech</p>
              </div>
            </Link>
          </ItemDiv>
        </RackDiv>
      </WholeDiv>

      <Footer />
    </>
  );
};

export default NewsRack;
