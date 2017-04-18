import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GLOBAL_DATA_SERVICE, ROLE_SERVICE, USER_SERVICE } from '../../app.component';
import { IGlobalDataService } from '../../services/i-global-data-service';
import { IRoleService } from '../../services/i-role-service';
import { IUserService } from '../../services/i-user-service';
import { Organization } from '../../models/organization';
import { Role } from '../../models/role';
import { User } from '../../models/user';
import { UserAccountProperty } from '../../models/user-account-property';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
	private user: User;
	private organizations: Array<Organization>;
	private roles: Array<Role>;

  constructor(
  	private router: Router,
  	@Inject(GLOBAL_DATA_SERVICE) globalDataService: IGlobalDataService,
  	@Inject(ROLE_SERVICE) private roleService: IRoleService,
  	@Inject(USER_SERVICE) private userService: IUserService) {
  	this.user = new User(null, null);
  	let accountProperties: Array<UserAccountProperty> = new Array<UserAccountProperty>();
  	accountProperties.push(new UserAccountProperty(0, "firstName", ""));
  	accountProperties.push(new UserAccountProperty(0, "lastName", ""));
  	accountProperties.push(new UserAccountProperty(0, "email", ""));
  	accountProperties.push(new UserAccountProperty(0, "phone", ""));
  	accountProperties.push(new UserAccountProperty(0, "mobile", ""));
  	this.user.setAccountProperties(accountProperties);

  	this.organizations = new Array<Organization>();
  	this.roles = new Array<Role>();
  	this.addOrganization(globalDataService.getOrganization());
  }

  addOrganization(organization: Organization): void {
  	this.organizations.push(organization);
  	if (organization.getChildren()) {
  		for (let childOrganization of organization.getChildren()) {
  			this.addOrganization(childOrganization);
  		}
  	}
  }

  onSelectOrganization($event: any): void {
  	this.roleService.getRolesByOwnerAndType(this.user.getOrganization(), "User").subscribe(
      (roles: Array<Role>) => {
      	this.user.setRole(null);
        this.roles = roles;
      }
    );
  }

  onSave(): void {
    this.userService.createUser(this.user).subscribe((response: string) => {
      this.router.navigate(["./users"]);
    });
  }

  ngOnInit() {
  }

}
