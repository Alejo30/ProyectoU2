import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { Artista } from '../model/artista';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ArtistaControllerService {

    protected basePath = 'http://ec2-54-90-216-204.compute-1.amazonaws.com';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }


    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }

    public createArtistaUsingPOST(body: Artista, observe?: 'body', reportProgress?: boolean): Observable<Artista>;
    public createArtistaUsingPOST(body: Artista, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Artista>>;
    public createArtistaUsingPOST(body: Artista, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Artista>>;
    public createArtistaUsingPOST(body: Artista, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createArtistaUsingPOST.');
        }

        let headers = this.defaultHeaders;

        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<Artista>('post',`${this.basePath}/artista/addArtista`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

 
    public getAllArtistasUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<Artista>>;
    public getAllArtistasUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Artista>>>;
    public getAllArtistasUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Artista>>>;
    public getAllArtistasUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<Artista>>('get',`${this.basePath}/artista/getArtista`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
