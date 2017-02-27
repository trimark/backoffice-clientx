import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Organization } from '../models/organization';
import { Role } from '../models/role';
import { IRoleService} from './i-role-service';
import { GlobalDataService } from './global-data.service';

@Injectable()
export class RoleService implements IRoleService {
	
  constructor(
    private http: Http,
    private globalDataService: GlobalDataService) { }

  getRolesByOwner(owner: Organization): Observable<Array<Role>> {
    let headers: Headers = new Headers();
    headers.append("Jwt-Token", this.globalDataService.getJwtToken());
    return this.http.get("http://localhost:8003/roles/listRolesByOwner/" + owner.getId(), 
      {
        headers: headers
      })
      .map((response: Response) => {
        let result: Array<Role> = new Array<Role>();
        for (let data of response.json().data) {
          result.push(new Role(data.id, data.name, data.description, data.type));
        }
        return result;
      })
      .catch(this.handleError);
  }

  getRolesByOwnerAndType(owner: Organization, type: String): Observable<Array<Role>> {
  	let headers: Headers = new Headers();
  	headers.append("Jwt-Token", this.globalDataService.getJwtToken());
  	return this.http.get("http://localhost:8003/roles/listRolesByOwnerAndType/" + owner.getId() + "/" + type, 
  		{
  			headers: headers
  		})
			.map((response: Response) => {
				let result: Array<Role> = new Array<Role>();
        for (let data of response.json().data) {
          result.push(new Role(data.id, data.name, data.description, data.type));
        }
        return result;
			})
			.catch(this.handleError);
  }

  createRole(role: Role): Observable<string> {
    let headers = new Headers();
    headers.append("Jwt-Token", this.globalDataService.getJwtToken());
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:8003/roles/create", role, options)
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
