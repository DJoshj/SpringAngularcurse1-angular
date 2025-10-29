import { Component } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-admin-component',
  standalone: false,
  templateUrl: './admin-component.html',
  styleUrl: './admin-component.css',
})
export class AdminComponent {

  constructor(public authService:Auth){

  }

  logout(){
    this.authService.logout();
  }

}
