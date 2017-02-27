import { Role } from './role';

export class Organization {
	private parent: Organization;
	private role: Role;
	private children: Array<Organization>;
	
	constructor (
		private id: number, 
		private name: string) {
	}

	getId(): number {
		return this.id;
	}

	setName(name: string): void {
		this.name = name;
	}

	getName(): string {
		return name;
	}

	setParent(parent: Organization): void {
		this.parent = parent; 		
	}

	getParent(): Organization {
		return this.parent;
	}

	setRole(role : Role) : void {
		this.role = role;
	}

	getRole() : Role {
		return this.role;
	}

	setChildren(children: Array<Organization>): void {
		this.children = children;	
	}

	getChildren(): Array<Organization> {
		return this.children;
	}

	static fromJson (json: any) {
		let organization: Organization = new Organization(json.id, json.name);
		if (json.parent) {
			organization.setParent(new Organization(json.parent.id, json.parent.name));
		}
		if (json.children) {
			let children:Array<Organization> = new Array<Organization>();
			for (let child of json.children) {
				let childOrganization: Organization = Organization.fromJson(child);
				childOrganization.setParent(organization);
				children.push(childOrganization);
			}
			organization.setChildren(children);
		}
		return organization;
	}	
}
