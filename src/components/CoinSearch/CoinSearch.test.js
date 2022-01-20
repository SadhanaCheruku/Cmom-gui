import { render } from "@testing-library/react";
import CoinSearch from "./CoinSearch";
import React from "react";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("axios");
describe("SearchLibrary", () => {
  it("render component as expected", () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: [
          {
            id: "bitcoin",
            symbol: "btc",
            name: "Bitcoin",
            image:
              "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
            current_price: 39424,
            market_cap: 729798545595,
            market_cap_rank: 1,
            fully_diluted_valuation: 822788892446,
            total_volume: 56674713770,
            high_24h: 40131,
            low_24h: 37907,
            price_change_24h: 1415.58,
            price_change_percentage_24h: 3.72438,
            market_cap_change_24h: 21531284230,
            market_cap_change_percentage_24h: 3.03999,
            circulating_supply: 18626612,
            total_supply: 21000000,
            max_supply: 21000000,
            ath: 40131,
            ath_change_percentage: -2.50649,
            ath_date: "2021-02-12T00:23:27.963Z",
            atl: 51.3,
            atl_change_percentage: 76170.27488,
            atl_date: "2013-07-05T00:00:00.000Z",
            roi: null,
            last_updated: "2021-02-12T11:30:21.581Z",
          },
          {
            id: "ethereum",
            symbol: "eth",
            name: "Ethereum",
            image:
              "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
            current_price: 1471.85,
            market_cap: 168653072707,
            market_cap_rank: 2,
            fully_diluted_valuation: null,
            total_volume: 28561397397,
            high_24h: 1492.25,
            low_24h: 1434.03,
            price_change_24h: 7.43,
            price_change_percentage_24h: 0.50743,
            market_cap_change_24h: 455257520,
            market_cap_change_percentage_24h: 0.27067,
            circulating_supply: 114639697.749,
            total_supply: null,
            max_supply: null,
            ath: 1506.36,
            ath_change_percentage: -3.02005,
            ath_date: "2021-02-10T08:14:41.266Z",
            atl: 0.381455,
            atl_change_percentage: 382871.55746,
            atl_date: "2015-10-20T00:00:00.000Z",
            roi: {
              times: 48.965055381080205,
              currency: "btc",
              percentage: 4896.505538108021,
            },
            last_updated: "2021-02-12T11:32:08.434Z",
          },
        ],
        status: 200,
        statusText: "",
        headers: {
          "cache-control": "max-age=30, public, must-revalidate, s-maxage=30",
          "content-type": "application/json; charset=utf-8",
        },
        config: {
          url:
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false",
          method: "get",
          headers: { Accept: "application/json, text/plain, */*" },
          transformRequest: [null],
          transformResponse: [null],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
        },
        request: {},
      })
    );
    const { asFragment } = render(
      <Router>
        <CoinSearch />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
