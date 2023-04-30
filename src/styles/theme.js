import "styled-components";

const size = {
  mobile: "600px",
  tablet: "900px",
  laptop: "1200px",
  desktop: "1800px",
};

const theme = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,

  mainColor: "#efff28",
  lightColor: "#fcff7b",
  lightBorder: "#c4c591",
  lightColorBlur: "#c4c591cc",
  darkColor: "#a1ac1b",

  lightBlue: "#4d81ff",
  mainBlue: "#2e4aff",
  darkBlue: "#182788",

  darkYFont: "#434709",
  lightYFont: "#7d8415",

  darkBFont: "#16357a",
  lightBFont: "#5b97ff",
  blueFont: "#2e70ff",

  bg: "#161a24",
};

export default theme;
