import 'reflect-metadata';
import 'zone.js/dist/zone';

// Meteor
// import { Meteor } from 'meteor/meteor';
// import {Mongo} from 'meteor/mongo';

// Angular
import {Component, EventEmitter, OnInit} from '@angular/core';

// import { APP_BASE_HREF } from '@angular/common';




// import {BugsList} from '../imports/bugs/bugs-list/bugs-list';



import template from './app.component.html';


//  template: '<button>Click Here</button>',
@Component({
  selector: 'app',
  template,
})
export class AppComponent implements OnInit {
  constructor() {




  }

  ngOnInit() {

    console.log("I'm being called when component is initalized after constructor method in BasicAngular2 in app.ts");
  }

}

