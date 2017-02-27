import { Observable } from 'rxjs/Observable';
import { LoginSuccessResponse } from './response/login-success-response';

export interface ILoginService {
	login(): Observable<LoginSuccessResponse>;
}
