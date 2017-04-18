import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IOrganizationService } from './i-organization-service';
import { GlobalDataService } from './global-data.service';
import { Organization } from '../models/organization';

@Injectable()
export class OrganizationService implements IOrganizationService {

  constructor(
  	private http: Http,
    private globalDataService: GlobalDataService) { }

  getAllOrganizations(): Observable<Array<Organization>> {
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

  createOrganization(organization: Organization): Observable<string> {
    let headers = new Headers();
    headers.append("Jwt-Token", this.globalDataService.getJwtToken());
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:8003/organizations/create", organization, options)
      .map((response: Response) => {
        return response.json().data;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
  	console.log("handleError >>> ", error);
  	return Observable.throw("");
  }
}
