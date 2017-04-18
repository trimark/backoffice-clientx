import { Organization } from '../models/organization';
import { Module } from '../models/module';
import { AclEntry } from '../models/acl-entry';
import { Game } from '../models/game';
import { LotteryModel } from '../models/lottery-model';

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

	setLotteryBaseGames(lotteryBaseGames: Array<Game>): void;

	getLotteryBaseGames(): Array<Game>;

	setLotteryModels(lotteryModels: Array<LotteryModel>): void;

	getLotteryModels(): Array<LotteryModel>;

	createModules(aclEntries: Array<AclEntry>): Array<Module>;
}
