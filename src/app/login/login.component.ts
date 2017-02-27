import { Component, Inject, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { GLOBAL_DATA_SERVICE, LOGIN_SERVICE, ORGANIZATION_SERVICE } from '../app.component';
import { IGlobalDataService } from '../services/i-global-data-service';
import { ILoginService } from '../services/i-login-service';
import { IOrganizationService } from '../services/i-organization-service';
import { LoginSuccessResponse } from '../services/response/login-success-response';
import { Login } from '../models/login';
import { Organization } from '../models/organization';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	private login : Login;
	private organizations : Array<Organization>;

  constructor(
    private router: Router,
  	@Inject(GLOBAL_DATA_SERVICE) private globalDataService: IGlobalDataService,
  	@Inject(LOGIN_SERVICE) private loginService: ILoginService,
  	@Inject(ORGANIZATION_SERVICE) organizationService: IOrganizationService) {
  	this.login = new Login();
  	organizationService.getAllOrganizations().subscribe(
      (organizations : Array<Organization>) => {
      	this.organizations = organizations;
      }
    );
  }

  onLogin() : void {
  	this.loginService.login().subscribe((loginSuccessResponse: LoginSuccessResponse) => {
      this.globalDataService.setAuthenticated(true);
  		this.globalDataService.setOrganization(loginSuccessResponse.getOrganization());
      this.router.navigate([this.globalDataService.getAccessedPath()]);
		});
  }

  ngOnInit() {
  }

}
