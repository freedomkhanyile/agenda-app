import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    let evs  = sessionStorage.getItem("events_lookups");
    if(evs == null) {
      sessionStorage.setItem("events_lookups", JSON.stringify(this.events));
    } else {
      this.events = JSON.parse(evs);
    }
   }
  title = 'agenda-app';
  events: Array<any> = [
    {
      time: '08:00',
      subject: 'Breakfast with Simon',
      location: 'Lounge Caffe',
      description: 'Discuss Q3 targets',
    },
    {
      time: '08:30',
      subject: 'Daily Standup Meeting (recurring)',
      location: 'Warsaw Spire Office',
    },
    { time: '09:00', subject: 'Call with HRs' },
    {
      time: '12:00',
      subject: 'Lunch with Timmoty',
      location: 'Canteen',
      description:
        'Project evalutation ile declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a',
    },
  ];

  deleteEvent(event: any) {
    const itemIndex = this.events.findIndex((el) => el === event);
    this.events.splice(itemIndex, 1);
    sessionStorage.setItem("events_lookups", JSON.stringify(this.events));
  }

  @ViewChild(ModalDirective) modal: ModalDirective;

  timeInput = new FormControl();
  subjectInput = new FormControl();
  locationInput = new FormControl();
  descriptionInput = new FormControl();

  // Add a new event
  addNewEvent() {
    const newEvent: any = {
      time: this.timeInput.value,
      subject: this.subjectInput.value,
      location: this.locationInput.value,
      description: this.descriptionInput.value
    };
  
    this.events.push(newEvent);
    sessionStorage.setItem("events_lookups", JSON.stringify(this.events));
  
    this.timeInput.setValue('');
    this.subjectInput.setValue('');
    this.locationInput.setValue('');
    this.descriptionInput.setValue('');
  
    this.modal.hide();
  }
}
