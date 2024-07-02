import { useContext } from "react";

// import { VestingContext } from "contexts/Vesting";

const useVesting = () => {
  return { isClaiming: 0, onClaim: 0, vestedBalance: 0 };
};

export default useVesting;
