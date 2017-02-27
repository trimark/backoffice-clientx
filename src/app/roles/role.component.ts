import { Component, Inject, OnInit } from '@angular/core';
import { GLOBAL_DATA_SERVICE, ROLE_SERVICE } from '../app.component';
import { IGlobalDataService } from '../services/i-global-data-service';
import { IRoleService } from '../services/i-role-service';
import { Organization } from '../models/organization';
import { Role } from '../models/role';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
	private roles: Array<Role>;
	
  constructor(
  	@Inject(GLOBAL_DATA_SERVICE) globalDataService: IGlobalDataService,
    @Inject(ROLE_SERVICE) roleService: IRoleService) {
    roleService.getRolesByOwner(globalDataService.getOrganization()).subscribe(
      (roles: Array<Role>) => {
        this.roles = roles;
      }
    );
  }

  onSelect(): void {
    console.log("Talipandas");  
  }

  ngOnInit() {
  }
}
