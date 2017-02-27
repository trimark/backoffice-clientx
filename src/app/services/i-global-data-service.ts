import { Organization } from '../models/organization';
import { Module } from '../models/module';
import { AclEntry } from '../models/acl-entry';

export interface IGlobalDataService {
	setAuthenticated(authenticated: boolean): void;

	isAuthenticated(): boolean;

	setJwtToken(jwtToken: string): void;

	getJwtToken(): string;

	setAccessedPath(accessedPath: string): void;

	getAccessedPath(): string; 

	setOrganization(organization: Organization): void;

	getOrganization(): Organization;

	setSelectedOrganization(selectedOrganization: Organization): void;

	getSelectedOrganization(): Organization;

	createModules(aclEntries: Array<AclEntry>): Array<Module>;
}
