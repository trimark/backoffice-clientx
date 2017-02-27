export class AclEntry {
	constructor(
		private moduleName: string,
		private permissions: Array<string>
	) { }

	getModuleName(): string {
		return this.moduleName;
	}

	getPermissions(): Array<string> {
		return this.permissions;
	}
}
