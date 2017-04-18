import { Observable } from 'rxjs/Observable';
import { Organization } from '../models/organization';
import { User } from '../models/user';

export interface IUserService {
	
	getUsers(organization: Organization): Observable<Array<User>>;

	createUser(user: User): Observable<string>;
}
