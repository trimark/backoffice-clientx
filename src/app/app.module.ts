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

@NgModule({
    declarations: [
        AppComponent, OrganizationComponent, NewOrganizationComponent, LoginComponent, RoleComponent, NewRoleComponent
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
        }]),
        TreeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
