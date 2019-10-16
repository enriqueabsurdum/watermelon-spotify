// Import Express.
import {Response} from "express";

// Import Axios.
import axios from "axios";

// Import Environment.
import environment from '../environments/environment';

const data = {
  grant_type: environment.grantType,
  client_id: environment.clientId,
  client_secret: environment.clientSecret
};
const baseURL: string = environment.baseURL;
const tokenURL: string = environment.tokenURL;


class SpotifyControllers {

  accessToken: string;

  constructor() {
    this.accessToken = '';
  }

  public async getAccessToken(data: object): Promise<any> {
    try {
      const token = await axios.post(tokenURL, this.objectToUrlEncoded(data), {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      return token.data.access_token;
    } catch (err: Error) {
      console.error(err);
    }
  }

  public async getAlbumFromSpotify(res: Response, nameAlbum: string, type: string, market: string): Promise<object> {
    this.accessToken = await this.getAccessToken(data);
    console.log(this.accessToken);
    try {
      const album = await axios.get(`${baseURL}search?q=album:${nameAlbum}&type=${type}&market=${market}`, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${this.accessToken}`
        }
      });
      return album.data.albums.items;
    } catch (err: Error) {
      console.error(err);
    }
  }

  private objectToUrlEncoded(data: object) {
    return Object.keys(data).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
    }).join('&');
  }
}

const spotifyController = new SpotifyControllers();
export default spotifyController;
