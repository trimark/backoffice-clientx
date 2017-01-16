import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OrganizationComponent } from './organization.component';

@NgModule({
    declarations: [
        AppComponent, OrganizationComponent
    ],
    imports: [
        MaterialModule.forRoot(),
        FlexLayoutModule.forRoot(),
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([{
            path: 'organizations',
            component: OrganizationComponent
        }])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
