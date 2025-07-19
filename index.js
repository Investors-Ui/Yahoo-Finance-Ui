require('dotenv').config();
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/v1/markets/indicators/adx',
  params: {
    symbol: 'AAPL',
    interval: '5m',
    series_type: 'close',
    time_period: '50',
    limit: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
  }
};

axios.request(options).then(response => {
  console.log(response.data);
}).catch(error => {
  console.error(error);
});
