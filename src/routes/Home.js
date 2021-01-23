import { gql, useQuery } from "@apollo/client";

const GET_COINS = gql`
  {
    coins {
      symbol
      close_price
      open_price
      low_price
      trade_price_24H
      trade_volume_24H
    }
  }
`;

export const Home = () => {
  const { loading, data } = useQuery(GET_COINS, {
    pollInterval: 1000,
  });
  console.log(data?.coins);

  try {
    if (loading) {
      return `loading...`;
    }
    if (data?.coins) {
      return data.coins.map((coin) => {
        return (
          <>
            <h1>{coin.symbol}</h1>
            <h1>{coin.close_price}</h1>
            <h1>{coin.open_price}</h1>
            <h1>{coin.low_price}</h1>
            <h1>{coin.trade_price_24H}</h1>
            <h1>{coin.trade_volume_24H}</h1>
          </>
        );
      });
    }
  } catch (error) {
    console.log(error);
  }
};
