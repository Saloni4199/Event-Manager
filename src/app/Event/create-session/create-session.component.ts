import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { restrictedWord,  ISession  } from 'src/app/shared/index';


@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styles:[`
  em { 
    color: red; padding: 10px; float: right;
  }
  .error input, .error select .error textarea { background-color: red}
  .error :: -webkit-input-placenolder { color: #999; }
  .error ::--moz-placeholder { color: #999; }
  .error :-moz-placeholder { color:#999; }
  .error :ms-input-placeholder { color: #999;}
  `]
})
export class CreateSessionComponent implements OnInit {
  newSessionForm!: FormGroup;
  name!: FormControl;
  presenter!: FormControl;
  duration!: FormControl;
  level!: FormControl;
  abstract: FormControl = new FormControl();
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelNewSession = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.name = new FormControl('',Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(300), restrictedWord(['foo','bar'])]);
    this.level = new FormControl('', Validators.required);
  
    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    }); 
  }

  saveSession(newSessionForm: any){
    let session: ISession = {
      name : newSessionForm.name,
      presenter : newSessionForm.presenter,
      duration: +newSessionForm.duration,
      level: newSessionForm.level,
      abstract: newSessionForm.abstract,
      voters : [],
      id: Number.MIN_SAFE_INTEGER
    }  
    this.saveNewSession.emit(session);

  }  
  cancelSession(){
    this.cancelNewSession.emit();
  }
}
