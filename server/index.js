const express = require('express');

const app = express();
app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(4000, () => console.log('listening on port 4000'));
