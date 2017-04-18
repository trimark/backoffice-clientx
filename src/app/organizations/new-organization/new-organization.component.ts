import { Component, Inject, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { GLOBAL_DATA_SERVICE, ORGANIZATION_SERVICE, ROLE_SERVICE } from '../../app.component';
import { IGlobalDataService } from '../../services/i-global-data-service';
import { IOrganizationService } from '../../services/i-organization-service';
import { IRoleService } from '../../services/i-role-service';
import { Organization } from '../../models/organization';
import { Role } from '../../models/role';

@Component({
  selector: 'app-new-organization',
  templateUrl: './new-organization.component.html',
  styleUrls: ['./new-organization.component.css']
})
export class NewOrganizationComponent implements OnInit {
  private organization: Organization;
  private roles: Array<Role> = new Array<Role>();
  
  constructor(
    private router: Router,
    @Inject(GLOBAL_DATA_SERVICE) globalDataService: IGlobalDataService,
    @Inject(ORGANIZATION_SERVICE) private organizationService: IOrganizationService,
    @Inject(ROLE_SERVICE) roleService: IRoleService) {
  	this.organization = new Organization(0, "");
    let parent: Organization = globalDataService.getSelectedOrganization();
    this.organization.setParent(parent ? parent : globalDataService.getOrganization());
    roleService.getRolesByOwnerAndType(this.organization.getParent(), "Organization").subscribe(
      (roles: Array<Role>) => {
        this.roles = roles;
      }
    );
  }

  onSave(): void {
    this.organizationService.createOrganization(this.organization).subscribe((response: string) => {
      this.router.navigate(['./organizations']);
    });
  }

  ngOnInit() {
  }

}
