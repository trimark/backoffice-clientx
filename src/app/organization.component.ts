import { Component, Inject } from '@angular/core';
import { TreeModel, TreeNode, TREE_ACTIONS, IActionMapping } from 'angular2-tree-component';
import { GLOBAL_DATA_SERVICE } from './app.component';
import { IGlobalDataService } from './services/i-global-data-service';
import { Organization } from './models/organization';

@Component({
	selector: 'organization',
	templateUrl: './organization.component.html'
})
export class OrganizationComponent {
	nodes: Array<Organization>;
  parent: Organization;
  selectedOrganization: Organization;

	constructor (
		@Inject(GLOBAL_DATA_SERVICE) private globalDataService: IGlobalDataService) {
    let parent: Organization = this.globalDataService.getOrganization();
    if (parent) {
      this.nodes = parent.getChildren();
    }
    this.globalDataService.setSelectedOrganization(null);
  }

  onSelectOrganization($event: any) :void {
    this.selectedOrganization = $event.node.data;
    if ($event.node.parent.data && $event.node.parent.data.virtual) {
      this.parent = this.globalDataService.getOrganization(); 
    }
    else {
      this.parent = $event.node.parent.data;
    }
    this.globalDataService.setSelectedOrganization(this.selectedOrganization);
  }	
}