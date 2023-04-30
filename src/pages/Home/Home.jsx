import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { ContainerTitle, MainContainer } from "./HomeStyle";
import { FiChevronRight } from "react-icons/fi";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

// 우선은 로그인 없이 사용가능하도록
const Home = () => {
  return (
    <div>
      <Header />
      <MainContainer>
        <ContainerTitle>
          <p>바쁜 현대인을 위한</p>
          <p>가벼운 뉴스,</p>
          <div id="typeWriter">
            <Typewriter
              options={{
                strings: ["Chip News", "Nhips"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </ContainerTitle>
        <Link to="/newsrack" id="mainPageBtn">
          <span>시작하기</span>
          <FiChevronRight id="rightArrow" />
        </Link>
      </MainContainer>
      <Footer />
    </div>
  );
};

export default Home;
