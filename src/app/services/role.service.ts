import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Organization } from '../models/organization';
import { Role } from '../models/role';
import { Module } from '../models/module';
import { AccessRight } from '../models/access-right';
import { AclEntry } from '../models/acl-entry';
import { IRoleService} from './i-role-service';
import { GlobalDataService } from './global-data.service';

@Injectable()
export class RoleService implements IRoleService {
	
  constructor(
    private http: Http,
    private globalDataService: GlobalDataService) { }

  getRole(id: number): Observable<Role> {
    let headers: Headers = new Headers();
    headers.append("Jwt-Token", this.globalDataService.getJwtToken());
    return this.http.get("http://localhost:8003/roles/findById/" + id, 
      {
        headers: headers
      })
      .map((response: Response) => {
        return Role.fromJson(response.json().data);
      })
      .catch(this.handleError);
  }  

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

  saveRole(role: Role, modules: Array<Module>): Observable<string> {
    let aclEntries: Array<AclEntry> = new Array<AclEntry>();
    for (let module of modules) {
      for (let entry of module.getEntries()) {
        let selectedMainAccessRight: AccessRight = entry.getSelectedMainAccessRight();
        let permissions:Array<string> = new Array<string>();
        if (selectedMainAccessRight) {
          permissions.push(selectedMainAccessRight.getPermission().getId());
        }
        if (entry.getAdditionalAccessRights()) {
          for (let additionalAccessRight of entry.getAdditionalAccessRights()) {
            if (additionalAccessRight.isAuthorized()) {
              permissions.push(additionalAccessRight.getPermission().getId());
            }
          }
        }
        if (permissions.length > 0) {
          aclEntries.push(new AclEntry(entry.getId(), permissions));
        }
      }
    }
    role.setAclEntries(aclEntries);

    let headers = new Headers();
    headers.append("Jwt-Token", this.globalDataService.getJwtToken());
    let options = new RequestOptions({ headers: headers });
    var url = "http://localhost:8003/roles/create";
    if (role.getId()) {
      url = "http://localhost:8003/roles/update";
    }
    return this.http.post(url, role, options)
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
