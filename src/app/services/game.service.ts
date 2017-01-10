import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GameService {
	private _games;
	constructor(private http: Http) { }

	get () {
		if (!this._games) {
			this._games = this.http.get('/games')
									.map((data) => data.json()._embedded.games)
									.publishReplay(1)
									.refCount();
		}
		return this._games;
	}

	getOne (id : string) {
		return this.http.get('/games/' + id)
									.map((data) => data.json())
									.publishReplay(1)
									.refCount();
	}
}
