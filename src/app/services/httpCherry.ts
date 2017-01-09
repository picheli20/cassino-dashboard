import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Loader } from '../entities/loader.entity';

@Injectable()
export class HttpCherry extends Http {

	constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
		super(backend, defaultOptions);
	}
	get(url: string): Observable<Response> {
		Loader.add();
		let headers = new Headers(
			{
				'CherryTech-Brand': 'cherrycasino.desktop',
				'Accept-Language': 'en-GB'
			});
		let options = new RequestOptions({ headers: headers });

		return this.removeLoading(super.get(url, options));
	}

	removeLoading(obs: Observable<Response>): Observable<Response> {
		// return a new Observable bacause we need to remove the loader (too many code, i know)
		return Observable.create(observer => {
			obs.subscribe((data) => {
				Loader.remove();
				observer.next(data);
				observer.complete();
			});
		});
	}

}
