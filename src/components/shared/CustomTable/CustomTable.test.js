import { render } from "@testing-library/react";
import CustomTable from "./CustomTable";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
describe("CustomTable Repository details", () => {
  const columns = [
    { id: "name", label: "Name", minWidth: 100 },
    {
      id: "image",
      label: "Image",
      minWidth: 100,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
      renderAsImage: true,
    },
    {
      id: "symbol",
      label: "Symbol",
      minWidth: 100,
      align: "right",
      format: (value) => value,
      renderAsImage: false,
    },
    {
      id: "current_price",
      label: "Current Price",
      minWidth: 100,
      align: "right",
      format: (value) => value,
      renderAsImage: false,
    },
    {
      id: "high_24h",
      label: "High 24 hour Price",
      minWidth: 100,
      align: "right",
      format: (value) => value,
      renderAsImage: false,
    },
    {
      id: "low_24h",
      label: "Low 24 hour Price",
      minWidth: 100,
      align: "right",
      format: (value) => value,
      renderAsImage: false,
    },
  ];

  const data = [
    {
      id: 1,
      name: "BitCoin",
      image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      symbol: "btc",
      current_price: 39310,
      high_24h: 40131,
      low_24h: 37907,
    },

    {
      id: 2,
      name: "ethereum",
      image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      symbol: "eth",
      current_price: 39310,
      high_24h: 40131,
      low_24h: 37907,
    },
    {
      id: 3,
      name: "Tether",
      image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      symbol: "usdt",
      current_price: 39310,
      high_24h: 40131,
      low_24h: 37907,
    },
  ];
  it("render component as expected", () => {
    const { asFragment } = render(
      <Router>
        <CustomTable
          columns={columns}
          searchResult={data}
          title={"European Cryptocurrency Prices and Market Capitalization"}
        />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
