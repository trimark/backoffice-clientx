import { Organization } from './organization';

export class Login {
	private userName: string;
	private password: string;
	private organization: Organization;

	constructor() { }

	setUserName(userName: string): void {
		this.userName = userName;
	}

	getUserName(): string {
		return this.userName;
	}

	setPassword(password: string): void {
		this.password = password;
	}

	getPassword(): string {
		return this.password;
	}

	setOrganization(organization: Organization): void {
		this.organization = organization;
	}

	getOrganization(): Organization {
		return this.organization;
	} 
}
