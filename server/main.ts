import { Meteor } from 'meteor/meteor';

import {loadBugs} from './startup/load-bugs';


import './bugs';


Meteor.startup(() => {
  console.log("Meteor is starting")
  
   loadBugs();

              // console.log("Meteor is starting loadGenericCollection")
            // loadGenericCollection();

       

});
