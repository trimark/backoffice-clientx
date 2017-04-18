import { Observable } from 'rxjs/Observable';
import { Authentication } from '../models/authentication';
import { Login } from '../models/login';

export interface ILoginService {
	login(login: Login): Observable<Authentication>;
}
