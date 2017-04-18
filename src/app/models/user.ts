import { Organization } from './organization';
import { Role } from './role';
import { UserAccountProperty } from './user-account-property';

export class User {
	private organization: Organization;
	private role: Role;
	private password: string;
	private accountProperties: Array<UserAccountProperty>;
	
	constructor(
		private accountId: number,
		private userName: string) { }

	getAccountId(): number {
		return this.accountId;
	}

	getUsername(): string {
		return this.userName;
	}

	setPassword(password: string): void {
		this.password = password;
	}

	getPassword(): string {
		return this.password;
	}

	setAccountProperties(accountProperties: Array<UserAccountProperty>): void {
		this.accountProperties = accountProperties;
	}

	getAccountProperties(): Array<UserAccountProperty> {
		return this.accountProperties;
	}

	setOrganization(organization: Organization): void {
		this.organization = organization;
	}

	getOrganization(): Organization {
		return this.organization;
	}

	setRole(role: Role): void {
		this.role = role;
	}

	getRole(): Role {
		return this.role;
	}

	getName(): string {
		return this.accountProperties[0].getValue() + " " + this.accountProperties[1].getValue();
	}

	static fromJson(json: any): User {
		let user: User = new User(json.accountId, json.userName);
		if (json.organization) {
			user.setOrganization(Organization.fromJson(json.organization));
		}
		if (json.role) {
			user.setRole(Role.fromJson(json.role));
		}
		if (json.accountProperties) {
			let accountProperties:Array<UserAccountProperty> = new Array<UserAccountProperty>();
			for (let accountProperty of json.accountProperties) {
				accountProperties.push(new UserAccountProperty(accountProperty.id, accountProperty.name, accountProperty.value));
			}
			user.setAccountProperties(accountProperties);
		}
		return user;
	}	
}
