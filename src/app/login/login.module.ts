import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from "./login-routing.module";
import { SharedModule } from "../shared/shared.module";
import { RegisterComponent } from './register/register.component';
import { ServicesModule } from '../services/services.module';

@NgModule({
  imports: [
    LoginRoutingModule,
    SharedModule,
    ServicesModule.forRoot()
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class LoginModule { }
