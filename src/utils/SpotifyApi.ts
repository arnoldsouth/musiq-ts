const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;

const SpotifyApi = {
  getAccessToken() {
    return localStorage.getItem('spotify_access_token');
  },
  getRefreshToken() {
    return localStorage.getItem('spotify_refresh_token');
  },
  getAccessTokenExpirationDate() {
    return localStorage.getItem('spotify_access_token_expiration_date');
  },
  getAccessTokenExpiresIn() {
    return localStorage.getItem('spotify_access_token_expires_in');
  },
  getAuthUrl() {
    return `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=playlist-modify-public`;
  },

  search(searchInput: string) {
    return fetch(
      `https://api.spotify.com/v1/search?q=${searchInput}&type=track`,
      {
        headers: {
          Authorization: `Bearer ${SpotifyApi.getAccessToken()}`,
        },
      }
    ).then((response) => response.json());
  },
};

export default SpotifyApi;
