import { Observable } from 'rxjs/Observable';
import { Organization } from '../models/organization';
import { Role } from '../models/role';

export interface IRoleService {
	getRolesByOwner(owner: Organization): Observable<Array<Role>>;

	getRolesByOwnerAndType(owner: Organization, type: String): Observable<Array<Role>>;

	createRole(role: Role): Observable<string>;
}
