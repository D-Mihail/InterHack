export type InputDataType = {
  user: string;
  dateFrom: string;
  dateTo: string;
};

export type pnlDataType = {
  pnl: number;
  networthDate1: {
    networth: number;
    tokensDisplayed: string[];
    ethHoldingsUsd: number;
    allTokenUsdValue: number;
  };
  networthDate2: {
    networth: number;
    tokensDisplayed: string[];
    ethHoldingsUsd: number;
    allTokenUsdValue: number;
  };
};

export const pnlDataa = {
  pnl: -57.81,
  networthDate1: {
    networth: 62506.39983043556,
    tokensDisplayed: ["62296.477957 USDT", "200450.0 VNC"],
    ethHoldingsUsd: 203.69222545025332,
    allTokenUsdValue: 62302.707604985306,
  },
  networthDate2: {
    networth: 26373.882489025586,
    tokensDisplayed: [
      "21383.580338 USDT",
      "200450.0 VNC",
      "0.000000024 apod.site",
      "500000.0 PDC",
      "2000.0 USDC",
      "24000.0 apop.site",
    ],
    ethHoldingsUsd: 2983.4044249965837,
    allTokenUsdValue: 23390.478064029,
  },
};
