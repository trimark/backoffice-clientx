import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Organization } from '../models/organization';
import { IOrganizationService } from './i-organization-service';

@Injectable()
export class OrganizationService implements IOrganizationService {

  constructor(
  	private http: Http) { }

  getAllOrganizations() : Observable<Array<Organization>> {
  	return this.http.get("http://localhost:8003/organizations/listAll", 
  		{ })
			.map((response: Response) => {
				let result: Array<Organization> = new Array<Organization>();
        for (let data of response.json().data) {
          result.push(new Organization(data.id, data.name));
        }
        return result;
			})
			.catch(this.handleError);
  }

  private handleError(error: Response | any) {
  	console.log("handleError >>> ", error);
  	return Observable.throw("");
  }
}
