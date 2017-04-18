import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IUserService} from './i-user-service';
import { GlobalDataService } from './global-data.service';
import { Organization } from '../models/organization';
import { User } from '../models/user';

@Injectable()
export class UserService implements IUserService {

  constructor(
  	private http: Http,
    private globalDataService: GlobalDataService) { }

  getUsers(organization: Organization): Observable<Array<User>> {
  	let headers: Headers = new Headers();
    headers.append("Jwt-Token", this.globalDataService.getJwtToken());
    return this.http.get("http://localhost:8003/users/listAllByOrganization/" + organization.getId(), 
      {
        headers: headers
      })
      .map((response: Response) => {
        let result: Array<User> = new Array<User>();
        for (let data of response.json().data) {
          result.push(User.fromJson(data));
        }
        return result;
      })
      .catch(this.handleError);
  }

  createUser(user: User): Observable<string> {
    let headers = new Headers();
    headers.append("Jwt-Token", this.globalDataService.getJwtToken());
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:8003/users/create", user, options)
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
