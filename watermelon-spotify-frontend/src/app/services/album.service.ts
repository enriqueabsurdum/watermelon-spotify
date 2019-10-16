import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private readonly urlBase: string;

  constructor(private http: HttpClient) {
    this.urlBase = environment.baseURL;
  }

  getAlbum(album: string) {
    const path = `${this.urlBase}/albums/${album}`;
    const headers = new HttpHeaders({
      Accept: 'application/json'
    });
    return this.http.get(path, {headers});
  }

}
