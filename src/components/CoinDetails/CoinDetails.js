import React, { useEffect, useState } from "react";
import { coinDetailsApi } from "./coinDetailsApi";
import Header from "../shared/Header/Header";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Box,
  Button,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  card: {
    marginTop: "10px",
    backgroundColor: "#edf6ff",
  },
  description: {
    paddingTop: "10px",
  },
}));

const CoinDetails = (props) => {
  const classes = useStyles();
  const [searchData, setSearchData] = useState({});
  const [description, setDescription] = useState("");
  const [marketCap, setMarketCap] = useState();
  const [homePage, setHomePage] = useState([]);

  //Since the Cryptocurrency Prices and Market Capitalization data is real time, hence not using store.
  const fetchCoinDetails = async (id) => {
    const response = await coinDetailsApi.getCoinDetails(id);
    setDescription(response.description.en);
    setMarketCap(response.market_data.market_cap.eur);
    setHomePage(response.links.homepage[0]);
    setSearchData(response);
  };

  useEffect(() => {
    const id = props.match.params.id;

    fetchCoinDetails(id);
  }, [props.match.params.id]);

  const IssueContainer = () => {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Typography variant="h5" color="primary">
          {searchData.name} Details
        </Typography>
        <Card className={classes.card}>
          <CardContent>
            <Box display="row">
              <Box margin={3}>
                <label>Name: {searchData.name}</label>
              </Box>
              <Box margin={3}>
                <label>Symbol: {searchData.symbol}</label>
              </Box>
              <Box margin={3}>
                <label>Hashing Algorithm: {searchData.hashing_algorithm}</label>
              </Box>
              <Box margin={3}>
                <label>Description:</label>
                <div
                  className={classes.description}
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </Box>
              <Box margin={3}>
                <label>Market cap in Euro: {marketCap}</label>
              </Box>
              <Box margin={3}>
                <label>
                  Home Page:{" "}
                  <a href={homePage} target="_blank" rel="noopener noreferrer">
                    {homePage}
                  </a>
                </label>
              </Box>
              <Box margin={3}>
                <label>Genesis Date: {searchData.genesis_date}</label>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    );
  };

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
        <Box paddingTop="120px">
          <IssueContainer />
        </Box>
        <Box paddingTop="20px">
          <Button
            variant="contained"
            color="primary"
            onClick={() => props.history.push("/")}
            data-testid="back-button"
          >
            Back
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default CoinDetails;
