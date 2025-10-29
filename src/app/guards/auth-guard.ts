  import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Auth } from '../services/auth';
import { Observable } from 'rxjs';


  @Injectable()
  export class AuthGuard {
    constructor(private authService:Auth,router:Router){

    }




  }
