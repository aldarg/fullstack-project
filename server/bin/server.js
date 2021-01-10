#!/usr/local/bin node

import app from '..';

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`BACK_END_SERVICE_PORT: ${port}`);
});
