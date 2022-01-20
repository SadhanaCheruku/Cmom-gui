import React, { useState, useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import Header from "../shared/Header/Header";
import { coinSearchApi } from "./coinSearchApi";
import CustomTable from "../shared/CustomTable/CustomTable";

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

const CoinSearch = () => {
  const [searchData, setSearchData] = useState([]);

  //Since the Cryptocurrency Prices and Market Capitalization data is real time, hence not using store.
  const fetchCoinList = async () => {
    const response = await coinSearchApi.getCoins();
    setSearchData(response);
  };
  useEffect(() => {
    fetchCoinList();
  }, []);

  return (
    <>
      <Header />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Box>
          {
            <CustomTable
              searchResult={searchData}
              columns={columns}
              title={"European Cryptocurrency Prices and Market Capitalization"}
            />
          }
        </Box>
      </Grid>
    </>
  );
};

export default CoinSearch;
