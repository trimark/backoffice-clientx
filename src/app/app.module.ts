import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { TreeModule } from 'angular2-tree-component';
import { AppComponent } from './app.component';
import { OrganizationComponent } from './organization.component';
import { NewOrganizationComponent } from './organizations/new-organization/new-organization.component';
import { LoginComponent } from './login/login.component';
import { RoleComponent } from './roles/role.component';
import { NewRoleComponent } from './roles/new-role/new-role.component';
import { EditRoleComponent } from './roles/edit-role/edit-role.component';
import { UserComponent } from './users/user/user.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { LotteriesComponent } from './scratch/lotteries/lotteries.component';
import { NewLotteryComponent } from './scratch/lotteries/new-lottery/new-lottery.component';
import { PresetsComponent } from './scratch/presets/presets.component';
import { NewModelComponent } from './scratch/presets/new-model/new-model.component';
import { GamesComponent } from './scratch/games/games.component';
import { NewGameComponent } from './scratch/games/new-game/new-game.component';

@NgModule({
    declarations: [
        AppComponent, OrganizationComponent, NewOrganizationComponent, LoginComponent, RoleComponent, NewRoleComponent, EditRoleComponent, UserComponent, NewUserComponent, LotteriesComponent, NewLotteryComponent, PresetsComponent, NewModelComponent, GamesComponent, NewGameComponent
    ],
    imports: [
        MaterialModule.forRoot(),
        FlexLayoutModule.forRoot(),
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([{
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'organizations',
            component: OrganizationComponent
        },
        {
            path: 'neworganization',
            component: NewOrganizationComponent
        },
        {
            path: 'roles',
            component: RoleComponent
        },
        {
            path: 'newrole',
            component: NewRoleComponent
        },
        {
            path: 'editrole/:id',
            component: EditRoleComponent
        },
        {
            path: 'users',
            component: UserComponent
        },
        {
            path: 'newuser',
            component: NewUserComponent
        },
        {
            path: 'scratch/lotteries',
            component: LotteriesComponent
        },
        {
            path: 'scratch/lotteries/newlottery',
            component: NewLotteryComponent
        },
        {
            path: 'scratch/presets',
            component: PresetsComponent
        },
        {
            path: 'scratch/models/newmodel',
            component: NewModelComponent
        }]),
        TreeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
