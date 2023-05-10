import styled from "styled-components";

export const BusinessDiv = styled.div`
  position: fixed;

  margin-top: 100px;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 20px 0 20px 0;

  width: 100vw;
  height: 100vh;
`;

export const BusinessTitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 20px;

  gap: 10px;

  box-sizing: border-box;
  border-radius: 5px;

  background-color: ${(props) => props.theme.lightColorBlur};
  color: ${(props) => props.theme.bg};

  width: 97%;
  height: 120px;
  padding: 20px;

  svg {
    width: 60px;
    height: 60px;
  }

  #businessTitle {
    font-size: 35px;
    font-weight: 700;
    margin-left: 15px;
  }

  #businessInfoText {
    margin-top: 5px;
    margin-left: 15px;
  }
`;

export const BusinessNewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  width: 98%;
  height: 65%;
  padding: 20px;
  padding-top: 0;

  overflow: auto;
  overflow-y: hidden;
  overflow-y: hidden;

  &:hover {
    overflow-y: visible;
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    margin-bottom: 20px;
    margin-top: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c4c591cc;
    border-radius: 5px;
  }

  #businessText {
    margin-bottom: 20px;
    font-size: 15px;
  }

  #businessUl {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: start;

    gap: 45px;

    width: 100%;
    height: 100%;
    margin-left: -20px;

    .businessLi {
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
