import styled, { css } from "styled-components";
import { theme, media, helper } from "../styles";
const { colors } = theme;

const Section = styled.section`
  padding: 3rem 5rem;
  background: #24292e;
  // box-shadow: inset -24px -24px 39px #1e2226, inset 24px 24px 39px #2a3036;
  
  ${media.bp900`
    padding: 2rem;
  `};
  ${media.bp400`
    padding: 1rem;
  `};

  ${(props) =>
    props.dark &&
    css`
      color: ${colors.lightestBlue};
      padding-bottom: 10rem;
      background-color: ${colors.black};
      box-shadow: inset -27px 27px 100px #0a0c0e, inset 27px -27px 100px #2a3036;
      ${media.bp900`
        padding-top: 2rem;
        padding-bottom: 10rem;
      `};
    `};

  & > div {
    max-width: 1400px;
    margin: 0 auto;
  }

  header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    h2 {
      display: inline-block;
      margin: 0;
      font-size: 1.75rem;
      background-image: linear-gradient(
        90deg,
        #d1d5da 50%,
        hsla(0, 0%, 100%, 0) 0
      );
      background-position: bottom;
      background-repeat: repeat-x;
      background-size: 10px 2px;
      padding-bottom: 6px;
      ${media.bp600`
        font-size: 1.5rem;
      `};
    }
  }
`;

export default Section;
