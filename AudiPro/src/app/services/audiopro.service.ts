import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Audio} from  '../Audio'
@Injectable({
  providedIn: 'root'
})
export class AudioproService {

  private url = 'http://54.90.216.204/api';
  constructor(private http: HttpClient) { }

  getAudio(): Observable<any>{
    return this.http.get(`${this.url}/getAudios`);
  }

  addAudio(audio: Audio): Observable<any>{
    return this.http.post(`${this.url}/addAudio`, audio);
  }
}
