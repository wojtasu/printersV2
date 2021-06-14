import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService
{
    constructor(private httpclient: HttpClient) {}
    getcomments(): Observable<any> 
    {
        return this.httpclient.get("https://wojtasu.github.io/data/data.json");
    }
}