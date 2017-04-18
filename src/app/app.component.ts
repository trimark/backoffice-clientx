import { Component, Inject, OpaqueToken } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { IGlobalDataService } from './services/i-global-data-service';
import { ILoginService } from './services/i-login-service';
import { IOrganizationService } from './services/i-organization-service';
import { IRoleService } from './services/i-role-service';
import { GlobalDataService } from './services/global-data.service';
import { LoginService } from './services/login.service';
import { OrganizationService } from './services/organization.service';
import { RoleService } from './services/role.service';
import { UserService } from './services/user.service';
import { GameService } from './services/game.service';
import { LotteryService } from './services/lottery.service';
import { Module } from './models/module';
import { LoginSuccessResponse } from './services/response/login-success-response';

export let GLOBAL_DATA_SERVICE = new OpaqueToken('global-data.service');
export let LOGIN_SERVICE = new OpaqueToken('login.service');
export let ORGANIZATION_SERVICE = new OpaqueToken('organization.service');
export let ROLE_SERVICE = new OpaqueToken('role.service');
export let USER_SERVICE = new OpaqueToken('user.service');
export let GAME_SERVICE = new OpaqueToken('game.service');
export let LOTTERY_SERVICE = new OpaqueToken('lottery.service');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
  	{ provide: GLOBAL_DATA_SERVICE, useClass: GlobalDataService },
  	{ provide: LOGIN_SERVICE, useClass: LoginService },
  	{ provide: ORGANIZATION_SERVICE, useClass: OrganizationService },
  	{ provide: ROLE_SERVICE, useClass: RoleService },
  	{ provide: USER_SERVICE, useClass: UserService },
  	{ provide: GAME_SERVICE, useClass: GameService },
  	{ provide: LOTTERY_SERVICE, useClass: LotteryService },
  	GlobalDataService
  ]
})
export class AppComponent {
	private authenticated: boolean;
	
	constructor (
		private router: Router,
		private globalDataService: GlobalDataService) {
		let modules: Array<Module> = new Array<Module>();
		let module:Module = new Module("ADMINISTRATION", "Administration");
		let entries:Array<Module> = new Array<Module>();
		let entry:Module = new Module("MYACCOUNT", "My Account");
		entries.push(entry);

		this.router.events.subscribe(event => {
		  if (event instanceof NavigationStart) {
		  	if (event.url !== "/login") {
		  		this.authenticated = this.globalDataService.isAuthenticated();
		  		this.globalDataService.setAccessedPath(event.url);
		  		if (!this.authenticated)
		  		{
		  			this.router.navigate(['./login']);
		  		}
		  	}
		  	else
		  	{
		  		this.authenticated = false;
		  		this.globalDataService.setAccessedPath("/");
		  		this.globalDataService.setAuthenticated(false);
		  	}
		  }
		});		
	} 
}