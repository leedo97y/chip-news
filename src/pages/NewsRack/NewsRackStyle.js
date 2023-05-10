import styled from "styled-components";

export const WholeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin-top: 200px;
`;

export const RecentNews = styled.div`
  position: fixed;

  width: 77%;
  height: 130px;

  padding: 50px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 1px solid ${(props) => props.theme.lightBorder};
  border-radius: 5px;

  background-color: ${(props) => props.theme.lightColorBlur};

  transition: all 0.2s linear;

  &:hover,
  &:active,
  &:focus {
    background-color: ${(props) => props.theme.lightBorder};
  }

  #insideDiv {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    svg {
      width: 50px;
      height: 50px;

      margin-right: 10px;

      color: ${(props) => props.theme.bg};
    }

    #recent {
      width: 45px;
      height: 45px;
      margin-right: 10px;
    }

    p {
      width: 100%;
      height: 100%;

      text-align: center;

      font-size: 35px;
      font-weight: 600;
      color: ${(props) => props.theme.bg};
    }
  }
`;

export const RackDiv = styled.div`
  width: 80%;
  height: 500px;

  margin: 0 auto;

  margin-top: 53px;
  padding-top: 20px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 20px;

  /* div:last-child,
  div:nth-child(3) {
    margin-top: -30px;
  } */
`;

export const ItemDiv = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 50px;

  border: 1px solid ${(props) => props.theme.lightBorder};
  border-radius: 5px;

  background-color: ${(props) => props.theme.lightColorBlur};

  transition: all 0.2s linear;

  &:hover,
  &:active,
  &:focus {
    background-color: ${(props) => props.theme.lightBorder};
  }

  #insideDiv {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    svg {
      width: 50px;
      height: 50px;

      margin-right: 10px;

      color: ${(props) => props.theme.bg};
    }

    #business {
      width: 45px;
      height: 45px;
    }

    #tech {
      margin-right: 5px;
    }

    p {
      width: 100%;
      height: 100%;

      text-align: center;

      font-size: 35px;
      font-weight: 600;
      color: ${(props) => props.theme.bg};
    }
  }
`;
