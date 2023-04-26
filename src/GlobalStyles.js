import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
  }

  a {
        text-decoration : none;
        color : inherit;
  }
  
	body {
	font-family : apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell , 'Helvetica Neue', sans-serif;
	font-size : 12px;
	background-color : #161a24;
	color : white;
	overflow-x : hidden;
	}
`;
export default GlobalStyles;
