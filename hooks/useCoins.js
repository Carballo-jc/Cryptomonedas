import axios from "axios";
import { useState, useEffect } from "react";

const consultaApi = async () => {
  const url =
    "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD";
  const result = await axios.get(url);
  const respuesta = await result.data.Data;
  return respuesta;
};
const useCoins = () => {
  const [state, setState] = useState({
    allCoins: [],
    coinsFilter: [],
    loading: false,
  });

  useEffect(() => {
    try {
      setState({ ...state, loading: true });
      consultaApi().then((result) => {
        setState({
          allCoins: result,
          coinsFilter: result,
          loading: false,
        });
      });
    } catch (error) {
      setState({ ...state, loading: false });
    }
  }, []);
  return [state, setState];
};
export default useCoins;
