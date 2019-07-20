import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import bulmaCalendar from '../../../node_modules/bulma-calendar/dist/js/bulma-calendar.js';

// Initialize all input of date type.
const calendars = bulmaCalendar.attach('[type="date"]');

// Loop on each calendar initialized
// calendars.forEach(calendar => {
// 	// Add listener to date:selected event
// 	calendar.on('date:selected', date => {
// 		console.log(date);
// 	});
// });

// // To access to bulmaCalendar instance of an element
// const element = document.querySelector('#my-element');
// if (element) {
// 	// bulmaCalendar instance is available as element.bulmaCalendar
// 	element.bulmaCalendar.on('select', datepicker => {
// 		console.log(datepicker.data.value());
// 	});
// }


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
