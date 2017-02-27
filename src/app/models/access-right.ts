import { Permission } from './permission';

export class AccessRight {
	private authorized: boolean;

	constructor(
		private permission: Permission) { }

	setPermission(permission: Permission): void {
		this.permission = permission;
	}	

	getPermission(): Permission {
		return this.permission;
	}

	setAuthorized(authorized: boolean) {
		this.authorized = authorized;
	}
	
	isAuthorized(): any {
		return this.authorized;
	}
}
