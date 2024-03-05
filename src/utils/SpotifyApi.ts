interface SpotifyApi {
  generateRandomString(length: number): string;
}

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;

const authorizationEndpoint = process.env.REACT_APP_SPOTIFY_AUTH_ENDPOINT;
const tokenEndpoint = process.env.REACT_APP_SPOTIFY_TOKEN_ENDPOINT;
const scope = process.env.REACT_APP_SPOTIFY_SCOPE;

const generateRandomString = (length: number) => {
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], '');
};

const codeVerifier = generateRandomString(64);

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

  search() {
    // return fetch(
    //   `https://api.spotify.com/v1/search?q=${searchInput}&type=track`,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${SpotifyApi.getAccessToken()}`,
    //     },
    //   }
    // ).then((response) => response.json());
  },
};

export default SpotifyApi;
