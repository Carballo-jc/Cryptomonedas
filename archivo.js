import axios from "axios";

//consultar api de manera dinamica
const [moneda, setMoneda] = useState("");
const [cryptocurrency, setCryptocurrency] = useState("");
const [getapi, setGetApi] = useState(false);

const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${moneda}`;
//cons axios
const getCryptoCurrency = async () => {
  if (getapi) {
    const result = await axios.get(url);
    console.log(result.data);
  }
};
useEffect(() => {
  getCryptoCurrency();
}, [getapi]);
//con fetch

const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${moneda}`;
const getCryptoCurrency = () => {
  if (getapi) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setGetApi(false);
        console.log(data.DISPLAY[cryptocurrency][moneda]);
      });
  }
};
useEffect(() => {
  getCryptoCurrency();
}, [getapi]);
