import { Injectable, Inject } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Quote } from '../domain/quote.model';
import { Http } from '../../../node_modules/@angular/http';
import { map } from "rxjs/operators";

@Injectable()
export class QuoteService {
    constructor(private http: Http, @Inject('BASE_CONFIG') private config) {}

    getQuote(): Observable<Quote> {
        const uri = `${this.config.url}/quotes/${Math.floor(Math.random()*10)}`
        return this.http.get(uri).pipe(map(res => res.json() as Quote));
    }
}