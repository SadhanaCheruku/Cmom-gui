import axios from "axios";

export const coinSearchApi = {
  getCoins: async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
