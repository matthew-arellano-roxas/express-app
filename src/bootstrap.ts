import dotenv from 'dotenv';
import fs from 'fs';

export const loadEnvironment = () => {
  dotenv.config({
    path: '.env',
    override: false,
  });

  const env = process.env.NODE_ENV || 'development';
  const envFilePath = `.env.${env}`;

  if (fs.existsSync(envFilePath)) {
    dotenv.config({
      path: envFilePath,
      override: true,
    });
  }
};

export default loadEnvironment;
