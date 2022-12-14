import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { userRoutes } from "./userRoutes";
import { ProfileComponent } from "./profile.component";
import { LoginComponent } from "./login.component";



@NgModule({
    declarations: [
        ProfileComponent,
        LoginComponent
      ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ]
  })

export class UserModule{

}