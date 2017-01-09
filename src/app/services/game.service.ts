import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpCherry } from './httpCherry';

@Injectable()
export class GameService {
	private apiUrl = 'https://staging-frontapi.cherrytech.com';  // URL para web api

	constructor(private http: Http) { }

	get(){
	 	return this.http.get(this.apiUrl + '/games').map(res => {
	 		console.log(res);
	 	}).subscribe(res => {
	 		console.log(res);
	 	});
	}
}