import styled from "styled-components";

export const GlobalCompoDiv = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 20px 0;

  width: 100vw;
  height: 100vh;
`;

export const GlobalTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  gap: 10px;

  box-sizing: border-box;
  border-radius: 5px;

  background-color: ${(props) => props.theme.lightColorBlur};
  color: ${(props) => props.theme.bg};

  width: 97%;
  height: 180px;
  padding: 20px;

  svg {
    width: 65px;
    height: 65px;
  }

  #globalTitle {
    font-size: 35px;
    font-weight: 700;
  }
`;

export const GlobalNewsContainer = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;

  width: 98%;
  height: 75%;
  padding: 20px;

  #globalText {
    margin-bottom: 20px;
    font-size: 15px;
  }

  #globalUl {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    justify-items: center;
    gap: 50px;

    width: 100%;
    height: auto;

    overflow: scroll;
    overflow-x: hidden;

    .globalLi {
      display: flex;
      flex-direction: column;
      gap: 10px;

      width: 100%;
      height: 100%;
      padding: 20px;

      background-color: rgb(255, 255, 255, 0.5);
      color: ${(props) => props.theme.bg};

      border-radius: 5px;

      #articleImg {
        width: 100%;
        height: 50%;

        border-radius: 5px;
      }

      #articleTitle {
        margin-top: 10px;
        font-size: 20px;
        font-weight: 500;
      }

      .authorDiv {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 7px;
        margin-bottom: 15px;

        #articleAuthor {
          font-size: 15px;
          font-weight: 500;
        }

        #articleDate {
          font-size: 12px;
          font-weight: 400;
        }
      }

      #articleContents {
        font-size: 15px;
        line-height: 19px;
      }
    }
  }
`;
