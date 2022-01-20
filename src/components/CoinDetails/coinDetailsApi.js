import axios from "axios";
export const coinDetailsApi = {
  getCoinDetails: async (id) => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
