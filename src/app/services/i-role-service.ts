import { Observable } from 'rxjs/Observable';
import { Organization } from '../models/organization';
import { Role } from '../models/role';
import { Module } from '../models/module';

export interface IRoleService {
	getRole(id: number): Observable<Role>;

	getRolesByOwner(owner: Organization): Observable<Array<Role>>;

	getRolesByOwnerAndType(owner: Organization, type: String): Observable<Array<Role>>;

	saveRole(role: Role, modules: Array<Module>): Observable<string>;
}
