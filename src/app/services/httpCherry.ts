import {Injectable} from '@angular/core';
import { Http, ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpCherry extends Http {
	constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
		super(backend, defaultOptions);
	}

	get(url: string): Observable<Response> {
		let headers = new Headers(
			{'CherryTech-Brand': 'cherrycasino.desktop',
			 'Accept-Language': 'en-GB'
		});
		let options = new RequestOptions({ headers: headers });
		return super.get(url, options);
	}
}