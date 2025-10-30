import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

//components and class imports
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Pagos } from './components/pagos/pagos';
import { Estudiantes } from './components/estudiantes/estudiantes';
import { Dashboard } from './components/dashboard/dashboard';
import { Profile } from './components/profile/profile';
import { LoadPagos } from './components/load-pagos/load-pagos';
import { AdminComponent } from './components/admin-component/admin-component';
import { AuthGuard } from './guards/auth-guard';
import { AuthorizationGuard } from './guards/authorization.guard';

//material
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { MatDrawerContainer, MatSidenavModule, MatDrawer, MatDrawerContent } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    App,
    AdminComponent,
    Home,
    Login,
    Pagos,
    Estudiantes,
    Dashboard,
    Profile,
    LoadPagos
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbar,
    MatIconModule,
    MatButton,
    MatMenuModule,
    MatDrawerContainer,
    MatDrawer,
    MatListModule,
    MatDrawerContent,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatFormFieldModule,
    MatInput,
    MatCardActions,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule,
    MatPaginator,
    MatSortModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    AuthGuard,
    AuthorizationGuard
  ],
  bootstrap: [App]
})
export class AppModule { }
