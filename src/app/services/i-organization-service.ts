import { Observable } from 'rxjs/Observable';
import { Organization } from '../models/organization';

export interface IOrganizationService {
	getAllOrganizations() : Observable<Array<Organization>>;
}
