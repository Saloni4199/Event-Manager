import { Component} from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
})
export class EventListComponent {
  event={
    id: 1,
    name: "Angular Connect",
    date: "9/26/2020",
    time: "10:00 am",
    price: 599.99,
    imageUrl: "src\assets\images\angularconnect-shield.png",
    location:{
      address: "1057 DT",
      city: "London",
      country: "England"
    }
  }

}
