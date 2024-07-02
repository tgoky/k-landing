import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <StyledLogo to="/">
      <StyledEmoji
        alt="Kintsugi"
        src={`${process.env.PUBLIC_URL}/Kintsugi SVG icon.svg`}
        // style={{ width: 162, height: 42 }}
      >
        {/* <img
          
        /> */}
      </StyledEmoji>
      {/* <StyledText>Kintsugi</StyledText> */}
    </StyledLogo>
  );
};

const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 44px;
  min-width: 44px;
  padding: 0;
  text-decoration: none;
`;

const StyledEmoji = styled.img.attrs({
  role: "img",
})`
  font-size: 24px;
  width: 50px;
  height: auto;
`;

// const StyledText = styled.span`
//   color: ${(props) => props.theme.textColor};
//   font-size: 30px;
//   text-wrap: none;
//   font-weight: 700;
//   margin-left: ${(props) => props.theme.spacing[2]}px;
//   @media (max-width: 400px) {
//     display: none;
//   }
// `;

export default Logo;
