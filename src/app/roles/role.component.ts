import { Component, Inject, OnInit } from '@angular/core';
import { ROLE_SERVICE } from '../app.component';
import { IRoleService } from '../services/i-role-service';
import { GlobalDataService } from '../services/global-data.service';
import { Organization } from '../models/organization';
import { Role } from '../models/role';
import { Module } from '../models/module';
import { AccessRight } from '../models/access-right';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
	private roles: Array<Role>;
  private modules: Array<Module>;

  private organization: Organization;
  private selectedRole: Role;
	
  constructor(
  	private globalDataService: GlobalDataService,
    @Inject(ROLE_SERVICE) private roleService: IRoleService) {
    this.organization = this.globalDataService.getOrganization();
    this.roleService.getRolesByOwner(this.organization).subscribe(
      (roles: Array<Role>) => {
        this.roles = roles;
      }
    );
  }

  onSelect(selectedRole: Role): void {
    this.roleService.getRole(selectedRole.getId()).subscribe(
      (role: Role) => {
        this.selectedRole = role;
        this.modules = new Array<Module>();
        let modules: Array<Module> = this.globalDataService.createModules(this.selectedRole.getAclEntries());
        for (let m of modules) {
          if (m.getEntries()) {
            for (let entry of m.getEntries()) {
              let module:Module = new Module(entry.getId(), entry.getName());
              
              if (entry.isHasMainAccessRights()) {
                let mainAccessRights: Array<AccessRight> = new Array<AccessRight>();
                for (let accessRight of entry.getMainAccessRights()) {
                  if (accessRight.isAuthorized()) {
                    mainAccessRights.push(accessRight);
                  }
                }
                module.setMainAccessRights(mainAccessRights);
                module.setHasMainAccessRights(mainAccessRights.length > 0);
              }

              if (entry.isHasAdditionalAccessRights()) {
                let additionalAccessRights: Array<AccessRight> = new Array<AccessRight>();
                for (let accessRight of entry.getAdditionalAccessRights()) {
                  if (accessRight.isAuthorized()) {
                    additionalAccessRights.push(accessRight);
                  }
                }
                module.setAdditionalAccessRights(additionalAccessRights);
                module.setHasAdditionalAccessRights(additionalAccessRights.length > 0);          
              }

              if (module.isHasMainAccessRights() || module.isHasAdditionalAccessRights()) {
                this.modules.push(module);
              }
            }
          }
        }
      }
    );
  }

  ngOnInit() {
  }
}
