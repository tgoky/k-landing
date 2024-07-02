/* eslint-disable */
import React from "react";

import {
  Box,
  Button,
  // Card,
  // CardActions,
  CardContent,
  CardIcon,
  Container,
  Separator,
  Spacer,
  Surface,
} from "react-neu";
import styled from "styled-components";

import StartPage from "components/StartPage";
import StartPageHeader from "components/StartPageHeader";
import StartSplit from "components/StartSplit";

// import CoinDeskIcon from "components/icons/CoinDeskIcon";
// import CoinTelegraphIcon from "components/icons/CoinTelegraphIcon";
// import ForbesIcon from "components/icons/ForbesIcon";
// import GizmodoIcon from "components/icons/Gizmodo";
// import TheDefiantIcon from "components/icons/TheDefiantIcon";
// import TheRegisterIcon from "components/icons/TheRegisterIcon";

// const ASTRONAUTS = [
//   "👨‍🚀",
//   "👨🏻‍🚀",
//   "👨🏼‍🚀",
//   "👨🏽‍🚀",
//   "👨🏾‍🚀",
//   "👩‍🚀",
//   "👩🏻‍🚀",
//   "👩🏼‍🚀",
//   "👩🏽‍🚀",
//   "👩🏾‍🚀‍",
//   "👩🏿‍🚀",
// ];

const Start: React.FC = () => {
  // const [astronaut, setAstronaut] = useState("👨‍🚀");

  // const updateAstronaut = useCallback(() => {
  //   const newAstro = ASTRONAUTS[Math.floor(Math.random() * ASTRONAUTS.length)];
  //   setAstronaut(newAstro);
  // }, [setAstronaut]);

  // useEffect(() => {
  //   const refresh = setInterval(updateAstronaut, 1000);
  //   return () => clearInterval(refresh);
  // }, [updateAstronaut]);

  return (
    <StartPage>
      <StyledHero>
        <StartPageHeader
          icon={
            <img
              style={{ width: 300, height: "auto" }}
              alt="Kintsugi"
              src={process.env.PUBLIC_URL + "/Kint-long-gold.svg"}
            />
          }
          subtitle="Earn the highest APY's across multiple farms
          and protocol on Arbitrum with safety and
          efficiency in mind."
          title="Multifarm Yield Aggregator on Arbitrum"
        />
        <Container size="lg">
          <Box row justifyContent="center">
            <Button text="Launch App" href="https://app.kintsugi.finance" />
            <Spacer />
            <Button
              text="Documentation"
              href="https://docs.kintsugi.finance"
              variant="secondary"
            />
          </Box>
        </Container>
      </StyledHero>
      <Container size="lg">
        {/*<Spacer size="md" />
        <Separator />
        <Spacer size="lg" />
        <StyledSectionIcon>⚖️</StyledSectionIcon>*/}
        <Spacer size="lg" />
        <StyledSectionTitle>
          Multifarm Yield Aggregator on Arbitrum
        </StyledSectionTitle>
        <StyledSectionDescription>
          Earn the highest APY's across multiple farms and protocol on Arbitrum
          with safety and efficiency in mind
        </StyledSectionDescription>
        <Spacer size="lg" />
        <StartSplit>
          <Surface elevation={2}>
            <Spacer size="md" />
            <CardIcon>🏠</CardIcon>
            <CardContent>
              <Box alignItems="center" column minHeight={125} maxHeight={125}>
                <StyledCardName>Single Asset</StyledCardName>
                <Spacer size="sm" />
                <StyledCardDescription>
                  TSU holders decide Kintsugi's future via on-chain voting.
                </StyledCardDescription>
              </Box>
            </CardContent>
            {/* <CardActions> */}
            <Box row justifyContent="center">
              <Button
                full
                text="Learn more"
                variant="secondary"
                href="https://app.kintsugi.finance"
              />
            </Box>
            {/* </CardActions> */}
          </Surface>
          <Surface elevation={2}>
            <Spacer size="md" />
            <CardIcon>🌊</CardIcon>
            <CardContent>
              <Box alignItems="center" column minHeight={125} maxHeight={125}>
                <StyledCardName>Liquidity Pools</StyledCardName>
                <Spacer size="sm" />
                <StyledCardDescription>
                  Kintsugi Grants are here to support projects that will bring
                  value back to Kintsugi Finance.
                </StyledCardDescription>
              </Box>
            </CardContent>
            {/* <CardActions> */}
            <Box row justifyContent="center">
              <Button
                full
                text="Learn more"
                href="https://app.kintsugi.finance"
                variant="secondary"
              />
            </Box>
            {/* </CardActions> */}
          </Surface>
          <Surface elevation={2}>
            <Spacer size="md" />
            <CardIcon>💰</CardIcon>
            <CardContent>
              <Box alignItems="center" column minHeight={125} maxHeight={125}>
                <StyledCardName>Earning Pools</StyledCardName>
                <Spacer size="sm" />
                <StyledCardDescription>
                  The Kintsugi Treasury is vibrant and growing.
                </StyledCardDescription>
              </Box>
            </CardContent>
            {/* <CardActions> */}
            <Box row justifyContent="center">
              <Button
                full
                text="Learn more"
                variant="secondary"
                href="https://app.kintsugi.finance"
              />
            </Box>
            {/* </CardActions> */}
          </Surface>
          <Surface elevation={2}>
            <Spacer size="md" />
            <CardIcon>⚡️</CardIcon>
            <CardContent>
              <Box alignItems="center" column minHeight={125} maxHeight={125}>
                <StyledCardName>Zapper</StyledCardName>
                <Spacer size="sm" />
                <StyledCardDescription>
                  Earn TSU's while helping Kintsugi Finance grow too.
                </StyledCardDescription>
              </Box>
            </CardContent>
            {/* <CardActions> */}
            <Box row justifyContent="center">
              <Button
                full
                text="Learn more"
                variant="secondary"
                href="https://app.kintsugi.finance"
              />
            </Box>
            {/* </CardActions> */}
          </Surface>
        </StartSplit>
        <Spacer size="lg" />
        <Separator />
        <Spacer size="lg" />
      </Container>
    </StartPage>
  );
};

const StyledHero = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(80vh - 96px);
  max-height: 600px;
  min-height: 400px;
`;

const StyledCardName = styled.div`
  color: ${(props) => props.theme.textColor};
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

const StyledCardDescription = styled.div`
  color: ${(props) => props.theme.colors.grey[500]};
  font-size: 16px;
  min-height: 56px;
  text-align: center;
`;
const StyledSectionDescription = styled.h3`
  color: ${(props) => props.theme.textColor};
  font-size: 18px;
  opacity: 0.66;
  font-weight: 400;
  text-align: center;
`;

const StyledSectionTitle = styled.div`
  color: ${(props) => props.theme.colors.primary.main};
  font-size: 36px;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const StyledSectionIcon = styled.div`
  font-size: 64px;
  text-align: center;
`;

const StyledLogo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  opacity: 0.66;
`;

export default Start;
