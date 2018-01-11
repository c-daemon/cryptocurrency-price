import axios from 'axios';

var url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,BCH,LTC,IOTA,DASH,XEM&tsyms=INR,USD,EUR"

export default function getAllcoins(){
    return axios.get(url)
    .then(function (response) {  
      return response.data;
    });
}