import { Injectable } from '@angular/core';

@Injectable()
export class AppDataServiceService implements IAppDataService {

  constructor() { }

  setOrganization(organization: Organization): void() {
  };

  getOrganization(): Organization {
  	return null;
  }
}
