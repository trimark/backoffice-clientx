import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GLOBAL_DATA_SERVICE, ROLE_SERVICE } from '../../app.component';
import { IGlobalDataService } from '../../services/i-global-data-service';
import { IRoleService } from '../../services/i-role-service';
import { Role } from '../../models/role';
import { Module } from '../../models/module';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {
	private role: Role;
	private modules: Array<Module>;

  constructor(
  	private route: ActivatedRoute, 
  	private router: Router,
  	@Inject(GLOBAL_DATA_SERVICE) globalDataService: IGlobalDataService,
  	@Inject(ROLE_SERVICE) private roleService: IRoleService) {
  		this.route.params
      	.switchMap((params: Params) => this.getRole(+params["id"]))
      	.subscribe((role: Role) => {
      		this.role = role;
      		this.modules = globalDataService.createModules(this.role.getAclEntries());
      	});
  }

  getRole(id: number): Observable<Role> {
  	return this.roleService.getRole(id);
  };

  onSave(): void {
    this.roleService.saveRole(this.role, this.modules).subscribe((response: string) => {
      this.router.navigate(["./roles"]);
    });
  }

  ngOnInit() {
  }

}
