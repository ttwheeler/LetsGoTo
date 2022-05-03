const express = require('express');

const app = express();
app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/trips/:id', (req, res) => {
  console.log(req.params.id);
  res.send(testData);
});

// eslint-disable-next-line no-console
app.listen(4000, () => console.log('listening on port 4000'));

const testData = {
  id: 5349520342,
  title: 'Cuba Trip',
  guests: 6,
  stay: [{
    id: 1,
    title: 'Austin AirBnB',
    url: 'https://www.airbnb.com/rooms/plus/23304367?federated_search_id=47aff7bc-f04b-4a2c-866e-57543cd147af&source_impression_id=p3_1651592117_dYPYpe8x2ZpQqeYf',
    votes: 3,
  }],
  eat: [{
    id: 6,
    title: 'Fresas ATX',
    url: 'https://www.fresaschicken.com/',
    meal: 'Dinner',
    cost: '$$',
    votes: 5,
  }],
  activities: [{
    id: 14,
    title: 'Riverside Paddle Boarding',
    url: 'https://www.livelovepaddle.com/',
    votes: 6,
  }],
};