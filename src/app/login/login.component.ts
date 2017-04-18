import { Component, Inject, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { LOGIN_SERVICE, ORGANIZATION_SERVICE, GAME_SERVICE, LOTTERY_SERVICE } from '../app.component';
import { ILoginService } from '../services/i-login-service';
import { IOrganizationService } from '../services/i-organization-service';
import { IGameService } from '../services/i-game-service';
import { ILotteryService } from '../services/i-lottery-service';
import { GlobalDataService } from '../services/global-data.service';
import { Authentication } from '../models/authentication';
import { Login } from '../models/login';
import { Organization } from '../models/organization';
import { Game } from '../models/game';
import { LotteryModel } from '../models/lottery-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	private login: Login;
	private organizations: Array<Organization>;

  constructor(
    private router: Router,
  	private globalDataService: GlobalDataService,
  	@Inject(LOGIN_SERVICE) private loginService: ILoginService,
  	@Inject(ORGANIZATION_SERVICE) organizationService: IOrganizationService,
    @Inject(GAME_SERVICE) private gameService: IGameService,
    @Inject(LOTTERY_SERVICE) private lotteryService: ILotteryService) {
  	this.login = new Login();
  	organizationService.getAllOrganizations().subscribe(
      (organizations : Array<Organization>) => {
      	this.organizations = organizations;
      }
    );
  }

  onLogin() : void {
  	this.loginService.login(this.login).subscribe((authentication: Authentication) => {
      this.globalDataService.setAuthenticated(true);
      this.globalDataService.setJwtToken(authentication.getJwtToken());
  		this.globalDataService.setOrganization(authentication.getOrganization());

      this.gameService.getBaseGamesByCategory("lottery").subscribe((games: Array<Game>) => {
        this.globalDataService.setLotteryBaseGames(games);        
      });

      this.lotteryService.getLotteryModels().subscribe((lotteryModels: Array<LotteryModel>) => {
        this.globalDataService.setLotteryModels(lotteryModels);        
      });

      this.router.navigate([this.globalDataService.getAccessedPath()]);
    });
  }

  ngOnInit() {
  }

}
