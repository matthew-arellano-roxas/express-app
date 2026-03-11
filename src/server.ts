import { loadEnvironment } from '@/bootstrap';
loadEnvironment();

import express from 'express';
import { serverConfig } from '@root/config';

const app = express();

app.listen(serverConfig.PORT, () => {
  console.log(`Server running at http://localhost:${serverConfig.PORT}`);
});
