import { Injectable } from "@angular/core";
import { IUser } from "../app/shared/User.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    currentUser!: IUser;
    loginUser(userName: string, password: string){
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: "Saloni",
            lastName: "Maheshwari"
        }
    }

    isAuthenticated(){
        return !!this.currentUser;
    }

    updateUser(firstName: string,lastName: string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}