import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/services/auth.service";

@Component({
    templateUrl: './login.component.html',
    styles:[`
        em{
            float: right; color: red; padding: 10px;
        }
    `]
})

export class LoginComponent{
    userName: String | any;
    password: string | any;
    mouseOverLogin: boolean = false;
    constructor(private authService: AuthService, private router: Router){

    }

    login(formValues: any){
        this.authService.loginUser(formValues.userName, formValues.password)
        this.router.navigate(['events'])
    }
    cancel(){
        this.router.navigate(['events'])
    }
}