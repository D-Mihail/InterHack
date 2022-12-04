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

export const telescopeDataArr = [
  "0x195e8cd1cca12fd18643000c6d4e21b766d92a10",
  "0x28c6c06298d514db089934071355e5743bf21d60",
  "0x2faf487a4414fe77e2327f0bf4ae2a264a776ad2",
  "0x1157a2076b9bb22a85cc2c162f20fab3898f4101",
  "0x1162a83a65f4b4f58698245236fddaf55479cf61",
  "0xdfd5293d8e347dfe59e90efd55b2956a1343963d",
  "0x7abe0ce388281d2acf297cb089caef3819b13448",
  "0x21a31ee1afc51d94c2efccaa2092ad1028285549",
  "0x6edf968da408a9640b8865826429a977a11c5048",
  "0x74dec05e5b894b0efec69cdf6316971802a2f9a1",
  "0xa740025a271bbbc74f7586258f0e92943f627b77",
  "0xf60c2ea62edbfe808163751dd0d8693dcb30019c",
  "0xad6eaa735d9df3d7696fd03984379dae02ed8862",
  "0x6cc5f688a315f3dc28a7781717a9a798a59fda7b",
  "0xb28589f81d734bf5a9d46fb8b74b88bf8331c18c",
  "0x77134cbc06cb00b66f4c7e623d5fdbf6777635ec",
  "0x46340b20830761efd32832a74d7169b29feb9758",
  "0xf89d7b9c864f589bbf53a82105107622b35eaa40",
  "0xcc34cc875d2d052f5b1c19652b5e71d6f90c7f7d",
  "0x7fb63cc0fe905ec1d3c11af30ef6c72b3bcb0069",
  "0xe93381fb4c4f14bda253907b18fad305d799241a",
  "0x6767526a362ec6c6b1df185478e4f01506b73ff3",
  "0x75e89d5979e4f6fba9f97c104c2f0afb3f1dcb88",
  "0xf05e2a70346560d3228c7002194bb7c5dc8fe100",
  "0x0084dfd7202e5f5c0c8be83503a492837ca3e95e",
  "0x0d0707963952f2fba59dd06f2b425ace40b492fe",
  "0x3229149012a035ef51d724e0343eb31ce3e4bb7d",
  "0x9f85c6553a71bd4f315bd119c45fb3006a6683d5",
];
