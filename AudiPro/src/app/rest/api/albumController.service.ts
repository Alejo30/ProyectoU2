import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { Album } from '../model/album';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class AlbumControllerService {

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

    public createAlbumUsingPOST(body: Album, observe?: 'body', reportProgress?: boolean): Observable<Album>;
    public createAlbumUsingPOST(body: Album, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Album>>;
    public createAlbumUsingPOST(body: Album, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Album>>;
    public createAlbumUsingPOST(body: Album, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createAlbumUsingPOST.');
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

        return this.httpClient.request<Album>('post',`${this.basePath}/album/addAlbum`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }
    
    public getAllAlbumUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<Album>>;
    public getAllAlbumUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Album>>>;
    public getAllAlbumUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Album>>>;
    public getAllAlbumUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<Array<Album>>('get',`${this.basePath}/album/getAlbum`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
