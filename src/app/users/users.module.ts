//new module created to follow best practices concerning module structure
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { RegisterComponent } from './register.component';
import { SignInComponent } from './sign-in.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      //no need for users/ bc this is defined in the parent route
      { path: 'register', component: RegisterComponent },
      { path: 'sign-in', component: SignInComponent }
    ])
  ],
  exports: [
  ],
  declarations: [
    RegisterComponent,
    SignInComponent
  ],
  providers: [
  ]
})
export class UsersModule {};
