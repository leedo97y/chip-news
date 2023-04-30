import styled from "styled-components";

export const HeaderBody = styled.div`
  position: fixed;
  top: 0;

  width: 100vw;
  height: 120px;
  padding-top: 10px;

  #logoDiv {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    #logoImg {
      width: 100px;
      height: 100px;
    }

    #logoTitle {
      font-size: 40px;
      font-weight: 700;
    }
  }
`;
