import { Component, Inject, OnInit } from '@angular/core';
import { GLOBAL_DATA_SERVICE, USER_SERVICE } from '../../app.component';
import { IGlobalDataService } from '../../services/i-global-data-service';
import { IUserService } from '../../services/i-user-service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	private users: Array<User>;
  private selectedUser: User;

  constructor(
  	@Inject(GLOBAL_DATA_SERVICE) globalDataService: IGlobalDataService,
    @Inject(USER_SERVICE) userService: IUserService) {
    userService.getUsers(globalDataService.getOrganization()).subscribe(
      (users: Array<User>) => {
        this.users = users;
      }
    );
  }

  onSelect(selectedUser: User): void {
    this.selectedUser = selectedUser;
    console.log("Samut Saya >>> ", this.selectedUser);
  }

  ngOnInit() {
  }

}
