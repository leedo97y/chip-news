import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  #mainPageBtn {
    width: 120px;
    height: 40px;

    font-size: 22px;
    text-align: center;

    background-color: transparent;
    color: ${(props) => props.theme.mainColor};
    // #2e70ff

    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover,
    &:active {
      color: ${(props) => props.theme.ligntcolor};
    }

    span {
      margin-right: 5px;
    }

    #rightArrow {
      font-size: 25px;
      padding-bottom: 2px;
    }
  }
`;

export const ContainerTitle = styled.div`
  width: 100vw;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  gap: 10px;

  p {
    font-size: 30px;
    font-weight: 600;
  }

  #typeWriter {
    font-size: 40px;
    font-weight: 700;
  }
`;
