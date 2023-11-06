import axios from 'axios';
import qs from 'querystring';

import logger from '../services/logger.js';

/**
 * Client credetnials authentication flow for Spotify Web Api
 * @returns {string} Spotify Web Api access token
 */
export default async function spotifyAuth() {
  try {
    const url = 'https://accounts.spotify.com/api/token';
    const data = qs.stringify({ grant_type: 'client_credentials' });
    const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;
    const authToken = Buffer
      .from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`, 'utf-8')
      .toString('base64');

    const response = await axios.post(url, data, {
      headers: {
        Authorization: `Basic ${authToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return response.data.access_token;
  } catch (err) {
    logger.error(err);
    return null;
  }
}
