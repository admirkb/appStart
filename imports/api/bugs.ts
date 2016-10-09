// import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { MongoObservable } from 'meteor-rxjs';

export const Bugs = new MongoObservable.Collection<any>("bugs");
// export const Parties = new MongoObservable.Collection<Party>('parties');


// Meteor.methods({
//     'bugs.insert'(bug) {

//         Bugs.insert(bug);
//     },
//     'bugs.remove'(bugId) {

//         const bug = Bugs.findOne(bugId);

//         Bugs.remove(bugId);
//     },
//     'bugs.update'(bugId, action) {

//         const bug = Bugs.findOne(bugId);

//         Bugs.update(bugId, action);
//     },
// });
