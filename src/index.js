import { config } from 'dotenv-safe';

import logger from './services/logger.js';
import spotifyAuth from './auth/spotifyAuth.js';
import spotifyPlaylist from './services/spotify.js';

try {
  config({
    example: '.env.example',
  });
} catch (err) {
  logger.error('Error loading environment variables:', err);
  process.exit(1);
}

async function main() {
  const accessToken = await spotifyAuth();
  await spotifyPlaylist(accessToken, '37i9dQZF1DWX4NtIOfns5I');
}

main();
