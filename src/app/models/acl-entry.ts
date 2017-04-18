export class AclEntry {
	constructor(
		private module: string,
		private permissions: Array<string>
	) { }

	getModule(): string {
		return this.module;
	}

	getPermissions(): Array<string> {
		return this.permissions;
	}
}
