import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Dashboard } from './components/dashboard/dashboard';
import { Login } from './components/login/login';
import { Profile } from './components/profile/profile';
import { LoadEstudiantes } from './components/load-estudiantes/load-estudiantes';
import { LoadPagos } from './components/load-pagos/load-pagos';
import { Estudiantes } from './components/estudiantes/estudiantes';
import { Pagos } from './components/pagos/pagos';
import { AdminComponent } from './components/admin-component/admin-component';
import { App } from './app';

const routes: Routes = [
  { path: "", component: Login },   //{path:"",redirectTo:"/home",pathMatch:"full"},
  { path: "login", component: Login },
  {
    path: "admin", component: AdminComponent, children: [
      { path: "home", component: Home },
      { path: "dashboard", component: Dashboard },
      { path: "profile", component: Profile },
      { path: "loadEstudiantes", component: LoadEstudiantes },
      { path: "loadPagos", component: LoadPagos },
      { path: "estudiantes", component: Estudiantes },
      { path: "pagos", component: Pagos }
    ]
  }
  // {path:"**",redirectTo:"/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
