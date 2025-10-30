// este guard comprobara si tiene los permisos necesarios


import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Auth } from '../services/auth';
import { Observable } from 'rxjs';


  @Injectable()
  export class AuthorizationGuard {
    constructor(private authService:Auth,private router:Router){

    }


   
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.isAuthenticated) {

        let requieredRoules = route.data['roles'];
        let userRoles = this.authService.roles;

        for(let role of userRoles){
          if(requieredRoules.includes(role)){
                 return true;
          }
        }

      }

      return false;


    }

  }
