import { Organization } from './organization';
import { AclEntry } from './acl-entry';

export class Role {
	private organization: Organization;
	private aclEntries: Array<AclEntry>;
	
	constructor(
		private id: number,
		private name: string,
		private description: string,
		private type: string) {
	}

	getId(): number {
		return this.id;
	}

	getName(): string {
		return this.name;
	}

	getDescription(): string {
		return this.description;
	}

	getType(): string {
		return this.type;
	}

	setOrganization(organization: Organization): void {
		this.organization = organization;
	}

	getOrganization(): Organization {
		return this.organization;
	}

	setAclEntries(aclEntries: Array<AclEntry>): void {
		this.aclEntries = aclEntries;
	}

	getAclEntries(): Array<AclEntry> {
		return this.aclEntries;
	}

	static fromJson(json: any): Role {
		let role: Role = new Role(json.id, json.name, json.description, json.type);
		if (json.modulePermissions) {
			let aclEntries: Array<AclEntry> = new Array<AclEntry>();
			for (let modulePermission of json.modulePermissions) {
				aclEntries.push(new AclEntry(modulePermission.module, modulePermission.permissions));
			}
			role.setAclEntries(aclEntries); 
		}
		return role;
	}
}
