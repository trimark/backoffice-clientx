import { Component } from '@angular/core';

console.log("OrganizationComponent");

@Component({
	selector: 'organization',
	templateUrl: './organization.component.html'
})
export class OrganizationComponent {
	title = 'app works!';
}