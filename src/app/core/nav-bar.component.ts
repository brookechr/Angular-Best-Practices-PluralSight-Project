import { Component } from '@angular/core';

import { UserRepositoryService } from "./user-repository.service";

@Component({
  selector: 'wb-nav-bar', //changed selector name to include prefix wb for whitebeards
  styleUrls: [`./nav-bar.component.css`],
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent  {

  //updated which services are used
  constructor(private userRepository: UserRepositoryService) {}

  get currentUser() {
    return this.userRepository.currentUser;
  }

  handleSignOut() {
    this.userRepository.currentUser = null;
  }
}
