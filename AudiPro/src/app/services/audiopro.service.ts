import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Audio} from  '../Audio'
@Injectable({
  providedIn: 'root'
})
export class AudioproService {

  private url = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getAudio(): Observable<any>{
    return this.http.get(`${this.url}/getAudios`);
  }

  addAudio(audio: Audio): Observable<any>{
    return this.http.post(`${this.url}/addAudio`, audio);
  }
}
