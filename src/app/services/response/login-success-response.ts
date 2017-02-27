import { Organization } from '../../models/organization';

export class LoginSuccessResponse {
	
	constructor (private organization: Organization) {
	}

	getOrganization (): Organization {
		return this.organization;
	}
}
