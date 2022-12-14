import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from "src/app/shared";

@Component({
selector: 'app-session-list',
templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges{
@Input() sessions!: ISession[];
@Input() filterBy!: string;
@Input() sortBy!: string;
visibleSession: ISession[] = [];
constructor(){}
ngOnChanges(){
 if(this.sessions){
    this.filterSessions(this.filterBy);
    this.visibleSession = this.sortBy == 'name' ? this.visibleSession.sort(sortBynameAsc) : this.visibleSession.sort(sortbyVotesDes);
 }
}
filterSessions(filterBy: string){
if(filterBy == 'all')
{
  this.visibleSession = this.sessions.slice(0);
}
else{
  this.visibleSession = this.sessions.filter(session => {
    return session.level.toLocaleLowerCase() == filterBy.toLocaleLowerCase()}
    );
}
}
}

function sortBynameAsc(s1: ISession, s2: ISession ){
  if(s1.name > s2.name) return 1
  else if(s1.name === s2.name) return 0
  else return -1
}

function sortbyVotesDes(s1: ISession, s2: ISession){
   return  s2.voters.length - s1.voters.length 
}