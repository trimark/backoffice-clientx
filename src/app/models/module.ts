import { AccessRight } from './access-right';

export class Module {
	private entries: Array<Module>;
	private mainAccessRights: Array<AccessRight>;
	private additionalAccessRights: Array<AccessRight>;
	private selectedMainAccessRight: AccessRight;
	private hasMainAccessRights: boolean;
	private hasAdditionalAccessRights: boolean;

	constructor(
		private id: string,
		private name: string) { }

	getId(): string {
		return this.id;
	}

	getName(): string {
		return this.name;
	}	

	setEntries(entries: Array<Module>): void {
		this.entries = entries;
	}

	getEntries(): Array<Module> {
		return this.entries;
	}

	setMainAccessRights(mainAccessRights: Array<AccessRight>): void {
		this.mainAccessRights = mainAccessRights;	
	}

	getMainAccessRights(): Array<AccessRight> {
		return this.mainAccessRights;
	}

	setAdditionalAccessRights(additionalAccessRights: Array<AccessRight>): void {
		this.additionalAccessRights = additionalAccessRights;
	}

	getAdditionalAccessRights(): Array<AccessRight> {
		return this.additionalAccessRights;
	}

	setSelectedMainAccessRight(selectedMainAccessRight: AccessRight): void {
		this.selectedMainAccessRight = selectedMainAccessRight;
	}

	getSelectedMainAccessRight(): AccessRight {
		return this.selectedMainAccessRight;
	}

	setHasMainAccessRights(hasMainAccessRights: boolean) {
		this.hasMainAccessRights = hasMainAccessRights;
	}

	isHasMainAccessRights(): any {
		return this.hasMainAccessRights;
	}

	setHasAdditionalAccessRights(hasAdditionalAccessRights: boolean) {
		this.hasAdditionalAccessRights = hasAdditionalAccessRights;
	}

	isHasAdditionalAccessRights(): any {
		return this.hasAdditionalAccessRights;
	}
}
