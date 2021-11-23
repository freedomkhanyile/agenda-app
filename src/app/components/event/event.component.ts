import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Output() deleteEventInstanceEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() value: any;
  isLogged: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  handleDeleteClick() {
    this.deleteEventInstanceEvent.emit(this.value);
  }

}
