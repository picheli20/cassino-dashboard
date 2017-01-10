import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Loader } from '../entities/loader.entity';

@Injectable()
export class HttpCherry extends Http {
	private apiUrl = 'https://staging-frontapi.cherrytech.com';

	constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
		super(backend, defaultOptions);
	}

	// overwritting the get methor from HTTP
	get(url: string): Observable<Response> {
		let options = new RequestOptions({
			headers: new Headers({
				'CherryTech-Brand': 'cherrycasino.desktop',
				'Accept-Language': 'en-GB'
			})
		});
		return this.removeLoading(super.get(this.apiUrl + url, options));
	}

	removeLoading(obs: Observable<Response>): Observable<Response> {
		Loader.add();
		// return remove the loader and return new Observable 
		return Observable.create(observer => {
			obs	.publishReplay(1)
				.refCount()
				.subscribe((data) => {
					Loader.remove();
					observer.next(data);
					observer.complete();
				}, (error) => {
					console.error(error);
					Loader.remove();
					observer.complete();
				});
		});
	}

}
