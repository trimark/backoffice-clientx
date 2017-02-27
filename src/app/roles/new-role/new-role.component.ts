import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GLOBAL_DATA_SERVICE, ROLE_SERVICE } from '../../app.component';
import { IGlobalDataService } from '../../services/i-global-data-service';
import { IRoleService } from '../../services/i-role-service';
import { Role } from '../../models/role';
import { Module } from '../../models/module';
import { AclEntry } from '../../models/acl-entry';
import { AccessRight } from '../../models/access-right';

@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.css']
})
export class NewRoleComponent implements OnInit {
	private role: Role;
	private modules: Array<Module>;

  constructor(
    private router: Router,
  	@Inject(GLOBAL_DATA_SERVICE) globalDataService: IGlobalDataService,
    @Inject(ROLE_SERVICE) private roleService: IRoleService) {
  	this.role = new Role(0, "", "", "");
    this.role.setOrganization(globalDataService.getOrganization());
  	this.modules = globalDataService.createModules(this.role.getAclEntries());
  }

  onSave(): void {
    let aclEntries: Array<AclEntry> = new Array<AclEntry>();
    for (let module of this.modules) {
      for (let entry of module.getEntries()) {
        let selectedMainAccessRight: AccessRight = entry.getSelectedMainAccessRight();
        let permissions:Array<string> = new Array<string>();
        if (selectedMainAccessRight) {
          permissions.push(selectedMainAccessRight.getPermission().getId());
        }
        if (entry.getAdditionalAccessRights()) {
          for (let additionalAccessRight of entry.getAdditionalAccessRights()) {
            if (additionalAccessRight.isAuthorized()) {
              permissions.push(additionalAccessRight.getPermission().getId());
            }
          }
        }
        if (permissions.length > 0) {
          aclEntries.push(new AclEntry(module.getId(), permissions));
        }
      }
    }
    this.role.setAclEntries(aclEntries);
    this.roleService.createRole(this.role).subscribe((response: string) => {
      this.router.navigate(["./roles"]);
    });
  }

  ngOnInit() {
  }

}
