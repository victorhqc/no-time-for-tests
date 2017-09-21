const fs = require('fs');
const express = require('express');
const dummyJson = require('dummy-json');
const uuid = require('uuid/v4');
const path = require('path');

const template = fs.readFileSync(path.resolve(__dirname, './menu.hbs'), { encoding: 'utf8' });
const app = express();

const helpers = {
  uuid,
};

app.get('/v1/menu', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.send(dummyJson.parse(template, { helpers }));
});

const port = process.env.PORT || 8080;

app.listen(process.env.PORT || 8080);
console.log(`Server running in port ${port}`);
