import { Injectable } from '@angular/core';
import { IGlobalDataService } from './i-global-data-service';
import { Organization } from '../models/organization';
import { Module } from '../models/module';
import { AclEntry } from '../models/acl-entry';
import { AccessRight } from '../models/access-right';
import { Permission } from '../models/permission';
import { Game } from '../models/game';
import { LotteryModel } from '../models/lottery-model';

@Injectable()
export class GlobalDataService implements IGlobalDataService {
  private modulesMeta: any = [
    {
      id: "REPORTS",
      name: "Reports",
      entries: [
        {
          id: "GAMERESULTS",
          name: "Game Results"          
        },
        {
          id: "ROYALTIES",
          name: "Royalties"          
        },
        {
          id: "GAMEHISTORY",
          name: "Game History"          
        }
      ]
    },
    {
      id: "GAMES",
      name: "Games",
      entries: [
        {
          id: "GAMEDEFINITIONS",
          name: "Game Definitions",
          mainPermissions: [
            {
              id: "READ",
              name: "Read"
            },
            {
              id: "UPDATE",
              name: "Update"
            },
            {
              id: "CREATE",
              name: "Create"
            },
            {
              id: "DELETE",
              name: "Delete"
            },
            {
              id: "FULL",
              name: "Full"
            }
          ],
          additionalPermissions: [
            {
              id: "ACTIVATEINACTIVATE",
              name: "Activate"
            },
            {
              id: "SETPERMISSIONS",
              name: "Set Permissions"
            }
          ]
        },
        {
          id: "MYGAMES",
          name: "Game Configurations",
          mainPermissions: [
            {
              id: "READ",
              name: "Read"
            },
            {
              id: "UPDATE",
              name: "Update"
            },
            {
              id: "CREATE",
              name: "Create"
            },
            {
              id: "DELETE",
              name: "Delete"
            },
            {
              id: "FULL",
              name: "Full"
            }
          ],
          additionalPermissions: [
            {
              id: "ACTIVATEINACTIVATE",
              name: "Activate"
            },
            {
              id: "SETPERMISSIONS",
              name: "Set Permissions"
            }
          ]
        }
      ]
    },
    {
      id: "ADMINISTRATION",
      name: "Administration",
      entries: [
        {
          id: "MYACCOUNT",
          name: "My Account"
        },
        {
          id: "ORGANIZATIONS",
          name: "Organizations",
          mainPermissions: [
            {
              id: "READ",
              name: "Read"
            },
            {
              id: "UPDATE",
              name: "Update"
            },
            {
              id: "CREATE",
              name: "Create"
            },
            {
              id: "DELETE",
              name: "Delete"
            },
            {
              id: "FULL",
              name: "Full"
            }
          ],
          additionalPermissions: [
            {
              id: "ACTIVATEINACTIVATE",
              name: "Activate"
            },
            {
              id: "EDITROLES",
              name: "Edit Roles"
            }
          ]
        },
        {
          id: "ROLES",
          name: "Roles",
          mainPermissions: [
            {
              id: "READ",
              name: "Read"
            },
            {
              id: "UPDATE",
              name: "Update"
            },
            {
              id: "CREATE",
              name: "Create"
            },
            {
              id: "DELETE",
              name: "Delete"
            },
            {
              id: "FULL",
              name: "Full"
            }
          ]
        },
        {
          id: "USERS",
          name: "Users",
          mainPermissions: [
            {
              id: "READ",
              name: "Read"
            },
            {
              id: "UPDATE",
              name: "Update"
            },
            {
              id: "CREATE",
              name: "Create"
            },
            {
              id: "DELETE",
              name: "Delete"
            },
            {
              id: "FULL",
              name: "Full"
            }
          ],
          additionalPermissions: [
            {
              id: "ACTIVATEINACTIVATE",
              name: "Activate"
            },
            {
              id: "EDITROLES",
              name: "Edit Roles"
            },
            {
              id: "EDITPROFILE",
              name: "Edit Profile"
            },
            {
              id: "CHANGEPASSWORD",
              name: "Change Password"
            }
          ]
        }
      ]
    }    
  ];

	private organization: Organization;
	private selectedOrganization: Organization;
  private authenticated:boolean;
	private jwtToken: string;
  private accessedPath: string;
  private lotteryBaseGames: Array<Game>;
  private lotteryModels: Array<LotteryModel>;

  constructor() { }

  setAuthenticated(authenticated: boolean): void {
    this.authenticated = authenticated;
  }

  isAuthenticated(): any {
    return this.authenticated;
  }

  setJwtToken(jwtToken: string): void {
  	this.jwtToken = jwtToken;
  }

	getJwtToken(): string {
		return this.jwtToken;
	};

  setAccessedPath(accessedPath: string): void {
    this.accessedPath = accessedPath;
  }

  getAccessedPath(): string {
    return this.accessedPath;
  }

  setOrganization(organization: Organization): void {
  	this.organization = organization;
  };acc

  getOrganization(): Organization {
  	return this.organization;
  }

  setSelectedOrganization(selectedOrganization: Organization): void {
  	this.selectedOrganization = selectedOrganization;
  }

	getSelectedOrganization(): Organization {
		return this.selectedOrganization;	
	}

  setLotteryBaseGames(lotteryBaseGames: Array<Game>): void {
    this.lotteryBaseGames = lotteryBaseGames;
  }

  getLotteryBaseGames(): Array<Game> {
    return this.lotteryBaseGames;
  }

  setLotteryModels(lotteryModels: Array<LotteryModel>): void {
    this.lotteryModels = lotteryModels;
  }

  getLotteryModels(): Array<LotteryModel> {
    return this.lotteryModels;
  }

  createModules(aclEntries: Array<AclEntry>): Array<Module> {
    let modules: Array<Module> = new Array<Module>();
    for (let moduleMeta of this.modulesMeta) {
      modules.push(this.createModule(moduleMeta, aclEntries));
    }
    return modules;
  }

  createModule(moduleMeta: any, aclEntries: Array<AclEntry>): Module {
    let module: Module = new Module(moduleMeta.id, moduleMeta.name);
    let existingAclEntry: AclEntry = null;
    let accessRight: AccessRight = null;
    let permission: any = null;
    
    if (aclEntries) {
      for (let aclEntry of aclEntries) {
        if (aclEntry.getModule() === moduleMeta.id)
        {
          existingAclEntry = aclEntry;
          break;
        }
      }
    }

    if (moduleMeta.mainPermissions && moduleMeta.mainPermissions.length > 0)
    {
      let mainAccessRights: Array<AccessRight> = new Array<AccessRight>();
      for (permission of moduleMeta.mainPermissions) {
        accessRight = new AccessRight(new Permission(permission.id, permission.name));
        accessRight.setAuthorized(existingAclEntry && existingAclEntry.getPermissions() && 
          existingAclEntry.getPermissions().indexOf(permission.id) >= 0);
        
        if (accessRight.isAuthorized()) {
          module.setSelectedMainAccessRight(accessRight);
        }

        mainAccessRights.push(accessRight);
      }
      module.setMainAccessRights(mainAccessRights);
      module.setHasMainAccessRights(mainAccessRights.length > 0);
    }

    if (moduleMeta.additionalPermissions && moduleMeta.additionalPermissions.length > 0)
    {
      let additionalAccessRights: Array<AccessRight> = new Array<AccessRight>();
      for (permission of moduleMeta.additionalPermissions) {
        accessRight = new AccessRight(new Permission(permission.id, permission.name));
        accessRight.setAuthorized(existingAclEntry && existingAclEntry.getPermissions() && 
          existingAclEntry.getPermissions().indexOf(permission.id) >= 0);
        additionalAccessRights.push(accessRight);
      }
      module.setAdditionalAccessRights(additionalAccessRights);
      module.setHasAdditionalAccessRights(additionalAccessRights.length > 0);
    }

    if (moduleMeta.entries)
    {
      let entries: Array<Module> = new Array<Module>();
      for (let entry of moduleMeta.entries) {
        entries.push(this.createModule(entry, aclEntries));
      }
      module.setEntries(entries);
    }
    return module;
  }
}
