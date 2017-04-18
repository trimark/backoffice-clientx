import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Authentication } from '../models/authentication';
import { Login } from '../models/login';
import { Organization } from '../models/organization';
import { ILoginService} from './i-login-service';

@Injectable()
export class LoginService implements ILoginService {

  constructor(private http: Http) {
  }

  login(login: Login): Observable<Authentication> {
  	return this.http.post("http://localhost:8003/login", 
			{
				userName: login.getUserName(),
				password: login.getPassword(),
				organization: login.getOrganization()
			}
		)
		.map((response: Response) => {
			return new Authentication(Organization.fromJson(response.json().data.userAccount.organization), response.json().data.jwtToken);
		})
		.catch(this.handleError);
  }

  private handleError(error: Response | any) {
  	console.log("handleError >>> ", error);
  	return Observable.throw("");
  }
}
