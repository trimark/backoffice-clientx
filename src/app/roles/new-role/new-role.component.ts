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
    this.roleService.saveRole(this.role, this.modules).subscribe((response: string) => {
      this.router.navigate(["./roles"]);
    });
  }

  ngOnInit() {
  }

}
