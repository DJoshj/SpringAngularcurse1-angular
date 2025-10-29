import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AdminComponent } from './components/admin-component/admin-component';

//material
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { MatDrawerContainer, MatSidenavModule, MatDrawer, MatDrawerContent } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Pagos } from './components/pagos/pagos';
import { Estudiantes } from './components/estudiantes/estudiantes';
import { Dashboard } from './components/dashboard/dashboard';
import { Profile } from './components/profile/profile';
import { LoadPagos } from './components/load-pagos/load-pagos';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule
],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
