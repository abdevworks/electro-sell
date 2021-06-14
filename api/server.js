const express = require('express');
const app = express();
const serverless = require('serverless-http');
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded());// API calls

router.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

router.post('/api/world', (req, res) => {
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});// path must route to lambda

router.get('/api/promotions', (req, res) => {
  const products = [
      {id: 1, name: 'Learn about XYZ and win microfphone ABC for free!', price: 'You like to record a lot? This may be just for you!', description: 'Learn about XYZ and win microfphone ABC for free!', images: [{image: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,7644-news-mini-260x225--11-.jpg"}]},
      {id: 2, name: 'Motorola Moto G30 6/128GB Dark Pearl 90Hz', price: '220,00 $', description: 'Motorola Moto G30 6/128GB Dark Pearl 90Hz', images: [{image:'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/2/pr_2021_2_20_8_32_27_472_00.jpg'}]},
      {id: 3, name: 'Dell S2721DGFA nanoIPS HDR', price: '450,00 $', description: 'Dell S2721DGFA nanoIPS HDR', images: [{image:'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/9/pr_2020_9_2_11_10_57_978_00.jpg'}]},
      {id: 4, name: 'SanDisk Extreme Portable SSD 500GB USB 3.1', price: '80,00 $', description: 'SanDisk Extreme Portable SSD 500GB USB 3.1', images: [{image:'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2018/3/pr_2018_3_20_12_3_20_475_02.jpg'}]},
      {id: 5, name: 'be quiet! Straight Power 11 1000W 80 Plus Gold', price: '240,00 $', description: 'be quiet! Straight Power 11 1000W 80 Plus Gold', images: [{image:'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2018/1/pr_2018_1_8_8_23_29_663_04.jpg'}]},
      {id: 6, name: 'LG 55NANO863PA', price: '1050,00 $', description: 'LG 55NANO863PA', images: [{image:'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/3/pr_2021_3_12_13_16_13_64_03.jpg'}]},
      {id: 7, name: 'Sony WH-CH510', price: '30,00 $', description: 'Sony WH-CH510', images: [{image:'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/11/pr_2019_11_18_10_18_21_501_00.jpg'}]},
      {id: 8, name: 'Silver Monkey SMG-700', price: '150,00 $', description: 'Silver Monkey SMG-700', images: [{image:'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/5/pr_2019_5_23_12_53_27_334_00.jpg'}]},
  ];

  res.json(products);
});

app.use('/.netlify/functions/server', router);
module.exports = app;
module.exports.handler = serverless(app);