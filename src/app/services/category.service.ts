import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CategoryService {
	private apiUrl = 'https://staging-frontapi.cherrytech.com';

	constructor(private http: Http) { }

	get () {
	 	return this.http.get(this.apiUrl + '/game-categories');
	}
}
