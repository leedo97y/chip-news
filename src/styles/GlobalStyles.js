import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration : none;
    color : inherit;
  }
  
	body {
	  font-family : apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell , 'Helvetica Neue', sans-serif;
	  font-size : 12px;
	  background-color : ${(props) => props.theme.bg};
	  color : white;
	  overflow-x : hidden;

    padding-left: 20px;
    padding-right: 20px;
	}
`;
export default GlobalStyles;
