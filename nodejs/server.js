'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Assignment for DevOps by Han How to use script to create docker image and deploy to Kubernetes using Jenkins pipeline');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
