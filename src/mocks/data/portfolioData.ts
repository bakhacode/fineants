const portfolios = [
  {
    id: 1,
    securitiesFirm: "toss",
    name: "포트폴리오 1",
    currentValuation: 469423,
    budget: 375871,
    totalGain: 93552,
    totalGainRate: 10.44,
    dailyGain: 60710,
    dailyGainRate: 9.93,
    expectedMonthlyDividend: 11487,
    numShares: 5,
    dateCreated: "2023-12-02T15:00:00",
  },
  {
    id: 2,
    securitiesFirm: "kb",
    name: "포트폴리오 2",
    currentValuation: 314912,
    budget: 271474,
    totalGain: 43438,
    totalGainRate: 19.62,
    dailyGain: 74719,
    dailyGainRate: 17.64,
    expectedMonthlyDividend: 28028,
    numShares: 13,
    dateCreated: "2023-12-02T15:00:00",
  },
  {
    id: 3,
    securitiesFirm: "namuh",
    name: "포트폴리오 3",
    currentValuation: 288453,
    budget: 226979,
    totalGain: 61474,
    totalGainRate: 2.65,
    dailyGain: 10759,
    dailyGainRate: 4.81,
    expectedMonthlyDividend: 49049,
    numShares: 5,
    dateCreated: "2023-12-02T15:00:00",
  },
  {
    id: 4,
    securitiesFirm: "daishin",
    name: "포트폴리오 4",
    currentValuation: 281327,
    budget: 380029,
    totalGain: -98702,
    totalGainRate: -17.03,
    dailyGain: 3200,
    dailyGainRate: 4.73,
    expectedMonthlyDividend: 46891,
    numShares: 17,
    dateCreated: "2023-12-02T15:00:00",
  },
  {
    id: 5,
    securitiesFirm: "shinhan",
    name: "포트폴리오 5",
    currentValuation: 550300,
    budget: 610888,
    totalGain: -60588,
    totalGainRate: -6.41,
    dailyGain: -26424,
    dailyGainRate: -18.58,
    expectedMonthlyDividend: 47784,
    numShares: 19,
    dateCreated: "2023-12-02T15:00:00",
  },
  {
    id: 6,
    securitiesFirm: "kakao",
    name: "포트폴리오 6",
    currentValuation: 10000000,
    budget: 618764,
    totalGain: 11681,
    totalGainRate: 2.39,
    dailyGain: 85377,
    dailyGainRate: 10.22,
    expectedMonthlyDividend: 16285,
    numShares: 3,
    dateCreated: "2023-12-02T15:00:00",
  },
  {
    id: 7,
    securitiesFirm: "hyundai",
    name: "포트폴리오 7",
    currentValuation: 10000000,
    budget: 105981,
    totalGain: 55711,
    totalGainRate: 6.94,
    dailyGain: 88909,
    dailyGainRate: 5.83,
    expectedMonthlyDividend: 30500,
    numShares: 5,
    dateCreated: "2023-12-02T15:00:00",
  },
  {
    id: 8,
    securitiesFirm: "kiwoom",
    name: "포트폴리오 8",
    currentValuation: 10000000,
    budget: 745170,
    totalGain: 95680,
    totalGainRate: 1.43,
    dailyGain: 84804,
    dailyGainRate: 7.19,
    expectedMonthlyDividend: 3192,
    numShares: 13,
    dateCreated: "2023-12-02T15:00:00",
  },
  {
    id: 9,
    securitiesFirm: "miraeasset",
    name: "포트폴리오 9",
    currentValuation: 10000000,
    budget: 760731,
    totalGain: 85435,
    totalGainRate: 2.13,
    dailyGain: 82195,
    dailyGainRate: 1.01,
    expectedMonthlyDividend: 3942,
    numShares: 4,
    dateCreated: "2023-12-02T15:00:00",
  },
  {
    id: 10,
    securitiesFirm: undefined,
    name: "포트폴리오 10",
    currentValuation: 10000000,
    budget: 529303,
    totalGain: 87775,
    totalGainRate: 4.94,
    dailyGain: 29262,
    dailyGainRate: 5.75,
    expectedMonthlyDividend: 43521,
    numShares: 4,
    dateCreated: "2023-12-02T15:00:00",
  },
  {
    id: 11,
    securitiesFirm: "ibk",
    name: "포트폴리오 11",
    currentValuation: 10000000,
    budget: 420735,
    totalGain: 18132,
    totalGainRate: 16.27,
    dailyGain: 35861,
    dailyGainRate: 19.46,
    expectedMonthlyDividend: 12664,
    numShares: 12,
    dateCreated: "2023-12-02T15:00:00",
  },
  {
    id: 12,
    securitiesFirm: "hana",
    name: "포트폴리오 12",
    currentValuation: 10000000,
    budget: 670934,
    totalGain: 31788,
    totalGainRate: 8.75,
    dailyGain: 66737,
    dailyGainRate: 3.98,
    expectedMonthlyDividend: 28742,
    numShares: 14,
    dateCreated: "2023-12-02T15:00:00",
  },
  {
    id: 13,
    securitiesFirm: "samsung",
    name: "포트폴리오 13",
    currentValuation: 10000000,
    budget: 849978,
    totalGain: 23340,
    totalGainRate: 12.77,
    dailyGain: 79038,
    dailyGainRate: 10.85,
    expectedMonthlyDividend: 22746,
    numShares: 9,
    dateCreated: "2023-12-02T15:00:00",
  },
  {
    id: 14,
    securitiesFirm: "kyobo",
    name: "포트폴리오 14",
    currentValuation: 10000000,
    budget: 294119,
    totalGain: 39426,
    totalGainRate: 15.64,
    dailyGain: 19909,
    dailyGainRate: 17.02,
    expectedMonthlyDividend: 19837,
    numShares: 6,
    dateCreated: "2023-12-02T15:00:00",
  },
  {
    id: 15,
    securitiesFirm: "hi",
    name: "포트폴리오 15",
    currentValuation: 10000000,
    budget: 826201,
    totalGain: 42346,
    totalGainRate: 2.84,
    dailyGain: 40508,
    dailyGainRate: 3.73,
    expectedMonthlyDividend: 38578,
    numShares: 16,
    dateCreated: "2023-12-02T15:00:00",
  },
  {
    id: 16,
    securitiesFirm: "yuanta",
    name: "포트폴리오 16",
    currentValuation: 10000000,
    budget: 883204,
    totalGain: 26910,
    totalGainRate: 9.49,
    dailyGain: 60384,
    dailyGainRate: 6.11,
    expectedMonthlyDividend: 46232,
    numShares: 11,
    dateCreated: "2023-12-02T15:00:00",
  },
  {
    id: 17,
    securitiesFirm: "meritz",
    name: "포트폴리오 17",
    currentValuation: 10000000,
    budget: 245067,
    totalGain: 29613,
    totalGainRate: 13.77,
    dailyGain: 39056,
    dailyGainRate: 9.13,
    expectedMonthlyDividend: 30275,
    numShares: 8,
    dateCreated: "2023-12-02T15:00:00",
  },
  {
    id: 18,
    securitiesFirm: "shinyoung",
    name: "포트폴리오 18",
    currentValuation: 10000000,
    budget: 476826,
    totalGain: 42593,
    totalGainRate: 11.8,
    dailyGain: 53528,
    dailyGainRate: 6.64,
    expectedMonthlyDividend: 40101,
    numShares: 15,
    dateCreated: "2023-12-02T15:00:00",
  },
  {
    id: 19,
    securitiesFirm: "hi",
    name: "포트폴리오 19",
    currentValuation: 10000000,
    budget: 584719,
    totalGain: 28202,
    totalGainRate: 7.59,
    dailyGain: 42844,
    dailyGainRate: 3.26,
    expectedMonthlyDividend: 23549,
    numShares: 7,
    dateCreated: "2023-12-02T15:00:00",
  },
  {
    id: 20,
    securitiesFirm: "hanwha",
    name: "포트폴리오 20",
    currentValuation: 10000000,
    budget: 135967,
    totalGain: 37859,
    totalGainRate: 5.65,
    dailyGain: 35838,
    dailyGainRate: 8.03,
    expectedMonthlyDividend: 15372,
    numShares: 10,
    dateCreated: "2023-12-02T15:00:00",
  },
];

export const portfolioHoldings = [
  {
    companyName: "삼성전자보통주",
    tickerSymbol: "005930",
    portfolioHoldingId: 1,
    currentValuation: 600000,
    currentPrice: 60000,
    averageCostPerShare: 50000.0,
    numShares: 10,
    dailyChange: 10000,
    dailyChangeRate: 10,
    totalGain: 100000,
    totalReturnRate: 16,
    annualDividend: 6000,
    annualDividendYield: 10,

    purchaseHistory: [
      {
        purchaseHistoryId: 3,
        purchaseDate: "2023-10-23T15:00:00",
        numShares: 3,
        purchasePricePerShare: 50000.0,
        memo: null,
      },
      {
        purchaseHistoryId: 2,
        purchaseDate: "2023-10-23T14:00:00",
        numShares: 3,
        purchasePricePerShare: 50000.0,
        memo: "더살거야",
      },
      {
        purchaseHistoryId: 1,
        purchaseDate: "2023-10-23T10:00:00",
        numShares: 4,
        purchasePricePerShare: 50000.0,
        memo: "첫구매",
      },
    ],
  },
  {
    companyName: "NAVER",
    tickerSymbol: "035420",
    portfolioHoldingId: 2,
    currentValuation: 1475200,
    currentPrice: 184400,
    averageCostPerShare: 150000.0,
    numShares: 8,
    dailyChange: 4600,
    dailyChangeRate: 2.5,
    totalGain: 275200,
    totalReturnRate: 22.93,
    annualDividend: 922,
    annualDividendYield: 0.5,

    purchaseHistory: [
      {
        purchaseHistoryId: 3,
        purchaseDate: "2023-10-23T15:00:00",
        numShares: 2,
        purchasePricePerShare: 50000.0,
        memo: null,
      },
      {
        purchaseHistoryId: 2,
        purchaseDate: "2023-10-23T14:00:00",
        numShares: 3,
        purchasePricePerShare: 50000.0,
        memo: "더살거야",
      },
      {
        purchaseHistoryId: 1,
        purchaseDate: "2023-10-23T10:00:00",
        numShares: 3,
        purchasePricePerShare: 50000.0,
        memo: "첫구매",
      },
    ],
  },
];

const portfolioHoldingsPieChart = [
  {
    name: "삼성전자보통주",
    valuation: 600000,
    fill: "#1F4FD5",
    weight: 54.55,
    totalGain: 100000,
    totalGainRate: 10,
  },
  {
    name: "현금",
    valuation: 500000,
    fill: "#1CADFF",
    weight: 45.45,
    totalGain: 0,
    totalGainRate: 0,
  },
];

const portfolioHoldingsDividendChart = [
  {
    name: "1월",
    amount: 50000,
  },
  {
    name: "2월",
    amount: 22100,
  },
  {
    name: "3월",
    amount: 13500,
  },
  {
    name: "4월",
    amount: 45000,
  },
  {
    name: "5월",
    amount: 75000,
  },
  {
    name: "6월",
    amount: 0,
  },
  {
    name: "7월",
    amount: 21000,
  },
  {
    name: "8월",
    amount: 35000,
  },
  {
    name: "9월",
    amount: 12000,
  },
  {
    name: "10월",
    amount: 45000,
  },
  {
    name: "11월",
    amount: 89000,
  },
  {
    name: "12월",
    amount: 35000,
  },
];

const portfolioHoldingsSectorChart = [
  {
    sector: "전기전자",
    sectorWeight: 54.55,
  },
  {
    sector: "현금",
    sectorWeight: 45.45,
  },
];

export const successfulGetPortfolioResponse = {
  code: 200,
  status: "OK",
  message: "포트폴리오 목록 조회가 완료되었습니다",
  data: {
    portfolios,
    hasNext: false,
    nextCursor: null,
  },
};

export const successfulGetPortfolioChartsResponse = {
  code: 200,
  status: "OK",
  message: "포트폴리오 차트 조회가 완료되었습니다",
  data: {
    pieChart: portfolioHoldingsPieChart,
    dividendChart: portfolioHoldingsDividendChart,
    sectorChart: portfolioHoldingsSectorChart,
  },
};

export const successfulGetPortfolioDetailsResponse = {
  code: 200,
  status: "OK",
  message: "포트폴리오 상세 정보 및 포트폴리오 종목 목록 조회가 완료되었습니다",
  data: {
    portfolioDetails: {},
    portfolioHoldings,
  },
};

export const successfulPortfolioAddResponse = {
  code: 200,
  status: "OK",
  message: "포트폴리오가 추가되었습니다",
  data: null,
};

export const successfulPortfolioEditResponse = {
  code: 200,
  status: "OK",
  message: "포트폴리오가 수정되었습니다",
  data: null,
};

export const successfulPortfolioDeleteResponse = {
  code: 200,
  status: "OK",
  message: "포트폴리오 삭제가 완료되었습니다",
  data: null,
};

export const successfulPortfolioHoldingPurchaseAddResponse = {
  code: 200,
  status: "OK",
  message: "매입 이력이 추가되었습니다",
  data: null,
};

export const successfulPortfolioHoldingPurchaseEditResponse = {
  code: 200,
  status: "OK",
  message: "매입 이력이 수정되었습니다",
  data: null,
};

export const successfulPortfolioHoldingPurchaseDeleteResponse = {
  code: 200,
  status: "OK",
  message: "매입 이력이 삭제되었습니다",
  data: null,
};
