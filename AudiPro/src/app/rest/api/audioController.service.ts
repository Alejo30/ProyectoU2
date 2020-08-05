import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Audio } from '../model/audio';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class AudioControllerService {

    protected basePath = 'http://54.90.216.204';
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


    public createAudioUsingPOST(body: Audio, observe?: 'body', reportProgress?: boolean): Observable<Audio>;
    public createAudioUsingPOST(body: Audio, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Audio>>;
    public createAudioUsingPOST(body: Audio, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Audio>>;
    public createAudioUsingPOST(body: Audio, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createAudioUsingPOST.');
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

        return this.httpClient.request<Audio>('post',`${this.basePath}/api/addAudio`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    public deleteAudioUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public deleteAudioUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public deleteAudioUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public deleteAudioUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteAudioUsingDELETE.');
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
        ];

        return this.httpClient.request<string>('delete',`${this.basePath}/api/deleteAudio/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    public getAllAudiosUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<Audio>>;
    public getAllAudiosUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Audio>>>;
    public getAllAudiosUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Audio>>>;
    public getAllAudiosUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<Array<Audio>>('get',`${this.basePath}/api/getAudios`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    public getAudioByIdUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public getAudioByIdUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public getAudioByIdUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public getAudioByIdUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getAudioByIdUsingGET.');
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
        ];

        return this.httpClient.request<string>('get',`${this.basePath}/api/getAudio/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    
    public updateAudioUsingPUT(body: Audio, id: number, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public updateAudioUsingPUT(body: Audio, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public updateAudioUsingPUT(body: Audio, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public updateAudioUsingPUT(body: Audio, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateAudioUsingPUT.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateAudioUsingPUT.');
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

        return this.httpClient.request<string>('put',`${this.basePath}/api/updateAudio/${encodeURIComponent(String(id))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
