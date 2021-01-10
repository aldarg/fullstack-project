import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import { join } from 'path';

import api from './routes/routes';

const app = express();

app.use((req, res, next) => {
  console.log(`Request_Endpoint: ${req.method} ${req.url}`);
  next();
});

// Configure the bodyParser middleware
app.use(json());
app.use(urlencoded({
  extended: true,
}));

// Configure the CORs middleware
app.use(cors());

app.use('/api/v1/', api);

// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static(join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'client/build', 'index.html'));
  });
}

// Catch any bad requests
app.get('*', (req, res) => {
  res.status(200).json({
    msg: 'Catch All',
  });
});

export default app;
