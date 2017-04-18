import { Organization } from './organization';

export class Authentication {
	constructor (
		private organization: Organization,
		private jwtToken: string) {
	}

	getOrganization(): Organization {
		return this.organization;
	}

	getJwtToken(): string {
		return this.jwtToken;
	}
}
