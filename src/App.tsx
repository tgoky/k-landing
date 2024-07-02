import React, { useMemo, useEffect } from "react";
import { createTheme, ThemeProvider } from "react-neu";
import {
  // BrowserRouter as Router,
  // Route,
  // Switch,
  // useLocation,
  // Redirect,
  HashRouter,
} from "react-router-dom";
// import { UseWalletProvider } from "use-wallet";
import { useTranslation } from "react-i18next";

import TopBar from "components/TopBar";

// import { BalancesProvider } from "contexts/Balances";
// import { FarmingProvider } from "contexts/Farming";
// import { MigrationProvider } from "contexts/Migration";
// import { PricesProvider } from "contexts/Prices";
// import { VestingProvider } from "contexts/Vesting";
// import { GovernanceProvider } from "contexts/Governance";
// import YamProvider from "contexts/YamProvider";
// import { TvlProvider } from "contexts/Tvl";
import useLocalStorage from "hooks/useLocalStorage";

// import Farm from "views/Farm";
// import FAQ from "views/FAQ";
// import Home from "views/Home";
// import Migrate from "views/Migrate";
// import Dashboard from "views/Dashboard";
// import Governance from "views/Governance";
// import Addresses from "views/Addresses";
// import Umbrella from "views/Landings/Umbrella";
// import Daohouse from "views/Landings/Daohouse";
// import Contributor from "views/Contributor";
// import Delegate from "views/Delegate";
// import Claim from "views/Claim";
// import Registration from "views/Registration";
// import Projects from "views/Projects";
// import TVL from "views/TVL";
import Start from "views/Start";
// import TokenValues from "views/TokenValues";

const App: React.FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <HashRouter>
      <Providers>
        <TopBar />
        {/* <Switch>
          <Route exact path="/"> */}
        <Start />
        {/* </Route> */}
        {/* </Switch> */}
      </Providers>
    </HashRouter>
  );
};

const Providers: React.FC = ({ children }) => {
  const [darkModeSetting] = useLocalStorage("darkMode", true);
  const { dark: darkTheme } = useMemo(() => {
    return createTheme({
      baseColor: { h: 0, s: 0, l: 20 },
      baseColorDark: { h: 48, s: 71, l: 41 },
      borderRadius: 28,
    });
  }, []);
  return (
    <ThemeProvider
      darkModeEnabled={darkModeSetting}
      darkTheme={darkTheme}
      lightTheme={darkTheme}
    >
      {children}
    </ThemeProvider>
  );
};

export default App;
