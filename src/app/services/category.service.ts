import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CategoryService {
	private _categories;

	constructor(private http: Http) { }

	get () {
		if (!this._categories) {
			this._categories = this.http.get('/game-categories')
									.publishReplay(1)
									.refCount();
		}
		return this._categories;
	}
}
