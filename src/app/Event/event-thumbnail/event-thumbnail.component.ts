import { Component, Input } from '@angular/core';
import { IEvent } from 'src/app/shared';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css',]
})
export class EventThumbnailComponent  {
    @Input() eventFromList: IEvent | any;

    getStartTimeClass(){
      const isEarlyStart = this.eventFromList && this.eventFromList.time == '8:00 am';
      const isLateStart = this.eventFromList && this.eventFromList.time == "10:00 am";
      if(isEarlyStart)
      return ['green','bold']
      else if(isLateStart)
      return ['red','bold']
      else
      return['yellow','bold']
    }
  }

