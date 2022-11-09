import { Component} from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  templateUrl:'./profile.component.html',
  styles:[`
  em { 
    color: red; padding: 10px; float: right;
  }
  .error input { background-color: red}
  .error :: -webkit-input-placenolder { color: #999; }
  .error ::--moz-placeholder { color: #999; }
  .error :-moz-placeholder { color:#999; }
  .error :ms-input-placeholder { color: #999;}
  `]
})
export class ProfileComponent{
  profileForm
  private firstName
  private lastName

  constructor(private authService: AuthService, private router: Router){

    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-z].*')]) ;
    this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }
   cancel(){
    this.router.navigate(['events'])
  }

  saveProfile(profile: any){
    if(this.profileForm.valid){
      this.authService.updateUser(profile.firstName, profile.lastName)
      this.router.navigate(['events'])
    }
  }

  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched 
  }
  validateLastName(){
    return this.lastName.valid || this.lastName.untouched
  }

}