import { config } from 'dotenv-safe';

import logger from './services/logger';

try {
  config({
    example: '.env.example',
  });
} catch (err) {
  logger.error('Error loading environment variables:', err);
  process.exit(1);
}
