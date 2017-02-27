import { Organization } from './organization';

export class Login {
	private userName : string;
	private password : string;
	private organization : Organization;

	constructor () { }

	setUserName (userName : string) {
		this.userName = userName;
	}

	getUserName () : string {
		return this.userName;
	}

	setPassword (password : string) {
		this.password = password;
	}

	getPassword () : string {
		return this.password;
	}

	setOrganization (organization : Organization) {
		this.organization = organization;
	}

	getOrganization () : Organization {
		return this.organization;
	} 
}
