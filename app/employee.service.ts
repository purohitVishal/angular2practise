import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()

export class EmployeeService{

	private _url:string = "appData/dummyData.json";

	constructor(private _http : Http){}

	getEmployees(){
		console.log("inside service before");
		return this._http.get(this._url)
			.map((response:Response)=>response.json())
			.catch(this._errorHandler);
	}

		_errorHandler(error:Response){
			console.error(error);
			return Observable.throw(error || "Server Error"); 
		}

}