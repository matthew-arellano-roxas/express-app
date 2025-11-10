import express from 'express';
import config from '@/config';

const app = express();
const PORT = process.env.PORT || 3000;

// Start server
app.listen(config.PORT, () => {
  console.log(`Server running at http://localhost:${config.PORT}`);
});
