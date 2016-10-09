import {Bugs} from '../../imports/api/bugs';

export function loadBugs() {
    Bugs.remove({});
    console.log("bugs count = " + Bugs.find().cursor.count())
        // console.dir(Bugs.find().count())
    if (Bugs.find().cursor.count() === 0) {
        var bugs = [
            {
                'problem': 'Bug 1', editColor: 'transparent', dateCreated: new Date(),
            },
            {
                'problem': 'Bug 3', editColor: 'transparent', dateCreated: new Date(),
            },
            {
                'problem': 'bug 5', editColor: 'transparent', dateCreated: new Date(),
            }
        ];

        for (var i = 0; i < bugs.length; i++) {
            Bugs.insert(bugs[i]);
        }
    }

};
// let tempID = Session.set('tempID', 'myId' + new Date().getTime());
let tempID = new Date().getTime();
export function getTempId() {

return tempID;

};

export function setTempId() {

tempID = new Date().getTime();
 console.log(tempID);

};