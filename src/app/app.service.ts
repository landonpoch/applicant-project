import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable()
export class AppService {
    constructor(private http: HttpClient) { }

    getUploads() {
        return this.http.get('http://localhost:3000/');
    }
}