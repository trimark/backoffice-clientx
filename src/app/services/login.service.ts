import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Organization } from '../models/organization';
import { ILoginService} from './i-login-service';
import { LoginSuccessResponse } from './response/login-success-response';

@Injectable()
export class LoginService implements ILoginService {

  constructor(private http: Http) {
  }

  login (): Observable<LoginSuccessResponse> {
  	return this.http.post("http://localhost:8003/login", 
			{
				userName: "superuser",
				password: "password",
				organization: {
					id: 2,
					name: "trimark"
				}
			}
		)
		.map((response: Response) => {
			return new LoginSuccessResponse(Organization.fromJson(response.json().data.userAccount.organization));
		})
		.catch(this.handleError);
  }

  private handleError(error: Response | any) {
  	console.log("handleError >>> ", error);
  	return Observable.throw("");
  }
}
