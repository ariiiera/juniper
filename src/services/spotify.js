import axios from 'axios';

/**
 * Spotify Web Api Playlist Endpoint
 * Primarily used to obtain playlist tracks and marketing art
 * @param {string} accessToken Bearer token for Spotify Web Api
 * @param {string} playlistId Spotify playlist id
 * @param {string} query Parameters for filtering the Spority Web Api response
 * @returns {object} Playlist data based on query
 */
export default async function spotifyPlaylist(accessToken, playlistId, query) {
  const url = `https://api.spotify.com/v1/playlists/${playlistId}?${query}`;
  const res = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data;
}
