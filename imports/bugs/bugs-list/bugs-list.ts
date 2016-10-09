// import 'reflect-metadata';
// import 'zone.js/dist/zone';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';


// Meteor
// import { Meteor } from 'meteor/meteor';
// import {ReactiveVar} from 'meteor/reactive-var';
// import {Tracker} from 'meteor/tracker';
// import {Mongo} from 'meteor/mongo';
// import { MeteorObservable } from 'meteor-rxjs';

// Angular
// import {MeteorComponent} from 'angular2-meteor';
import {Pipe, PipeTransform, Component, EventEmitter, OnInit, Output, ViewChild, ViewChildren, ContentChildren, QueryList, OnDestroy} from '@angular/core';
// import {FormBuilder, ControlGroup, Validators, Control} from '@angular/common';

// Admir
// import {BugsForm} from '../bugs-form/bugs-form.ts';
// import {BugsItem} from '../bugs-item/bugs-item.ts';
import {Bugs} from '../../../imports/api/bugs';

import template from './bugs-list.html';
import 'rxjs/add/operator/combineLatest';

interface Pagination {
  limit: number;
  skip: number;
}
interface Options extends Pagination {
  [key: string]: any
}

// @Pipe({name: 'keys'})
// export class KeysPipe implements PipeTransform {
//   transform(value, args:string[]) : any {
//     let keys = [];
//     for (let key in value) {
//       keys.push(key);
//     }
//     return keys;
//   }
// }

// @Pipe({ name: 'keys' })
// export class KeysPipe implements PipeTransform,OnDestroy {
//   transform(value) {

//     console.dir(value.collection._docs._map)
//     // console.dir(Array.from(value.fetch().collection._docs._map));

//     // let keys: any = [];

//     // let j = 1;
//     // (function (j) {
//     //   setTimeout(() => {
//     //     for (let key in value.collection._docs._map) {
//     //       keys.push(key);
//     //     }

//     //     console.log("finished timer")
//     //     console.dir(value.collection._docs._map)
//     //     console.dir(keys)

//     //     return keys;

//     //   }, 1000 * j);
//     // })(j);


//     // for (let key in value.collection._docs._map) {
//     //   keys.push(key);
//     // }
//     // return keys;

//     //     value.collection.forEach((list) => {
//     // console.dir(list)
//     //     });

//     //     value.collection._docs._map.toArray().forEach((list) => {
//     // console.dir(list)
//     //     });



//     // return Array.from(value);
//   }
// }

//  @Pipe({name: 'keys'})
//  export class KeysPipe implements PipeTransform {
//  transform(value) {
//    let keys:any = [];
//    for (let key in value) {
//       keys.push( {key: key, value: value[key]} );
//     }
//      return keys;
//   }
// }

@Component({
  selector: 'bugs-list',
  template,
})
export class BugsList implements OnInit {
  // @ViewChild(BugsItem) firstChild: BugsItem;
  //   @ViewChildren(BugsItem) bugsList: QueryList<BugsItem>;
  xxxx: Subscription;
  xxxxMan: Subject<number> = new Subject<number>();
  bugsSub: Subscription;
  bugs: Observable<any[]>;
  optionsSub: Subscription;
  // bugs: Mongo.Cursor<Object>;
  bugsA: any;

  pageSize: Subject<number> = new Subject<number>();
  curPage: Subject<number> = new Subject<number>();
  nameOrder: Subject<number> = new Subject<number>();
  location: Subject<string> = new Subject<string>();

  // helloEvent: EventEmitter = new EventEmitter();
  // public selfConnectionId: ReactiveVar<string> = new ReactiveVar<string>();
  @Output() helloEvent: EventEmitter<any> = new EventEmitter();
  isLoading: boolean;


  constructor() {

    this.bugsA = [];


    this.helloEvent.subscribe((args) => {
      var self = this;

      // this.setBugs();
      console.log("hello from helloEvent")
      // console.dir(args)

      // this.bugsList.last.setBug(args);


      // this.bugsList.toArray().forEach((list) => {
      //   this.setBug(list);
      // });
      //        var j = 5.1;
      // (function (j,self) {
      //     setTimeout(() => {
      //          self.setBugs();
      //     }, 1000 * j);
      // })(j,self);



    });

    // this.selfConnectionId.set("Test1 !!!")


    console.log("hello from bugs-list.ts")

    // this.subscribe('bugs', () => {
    //   this.isLoading = false;
    //   console.log("hello from bugs-list.ts in subscribe")


    // });



  }

yyyy(e){
  console.log('yyyy(e): %s', 123456);
  console.dir(e)

  console.log('yyyy(e): %s', e)
}

  ngOnInit() {

    // this.optionsSub = Observable.combineLatest(
    //   this.pageSize,
    //   this.curPage,
    //   this.nameOrder,
    //   this.location
    // ).subscribe(([pageSize, curPage, nameOrder, location]) => {
    //   const options: Options = {
    //     limit: pageSize as number,
    //     skip: ((curPage as number) - 1) * (pageSize as number),
    //     sort: { name: nameOrder as number }
    //   };

    //   // this.paginationService.setCurrentPage(this.paginationService.defaultId, curPage as number);

    //   // if (this.partiesSub) {
    //   //   this.partiesSub.unsubscribe();
    //   // }

    //   // this.bugsSub = MeteorObservable.subscribe('bugs', options, location).zone().subscribe(() => {
    //   //   this.bugs = Bugs.find({}, {
    //   //     sort: {
    //   //       name: nameOrder
    //   //     }
    //   //   }).zone();
    //   // });
    // });

    this.xxxx = Observable.combineLatest(
      this.xxxxMan
    ).subscribe(([xxxxMan]) => {


      console.log("xxxx combineLatest options the value is: " + xxxxMan)

    });

    var x3 = Observable.create((xxx) => {
      xxx.next(100);
      // Any cleanup logic might go here
      return () => console.log('disposed')
    });

    console.dir(x3)
    var x3Subscription = x3.subscribe(
      (x) => this.yyyy(x),
      (e) => console.log('onError: %s', e),
      () => console.log('onCompleted'));


    x3Subscription.next(22323)


    var x2 = Observable.range(1, 5);
    var x2Subscription = x2.subscribe(
      x => console.log('onNext: %s', x),
      e => console.log('onError: %s', e),
      () => console.log('onCompleted'));


    var x1 = Observable.timer(
      5000, /* 5 seconds */
      1000 /* 1 second */)
      .timestamp();

    var x1Subscription = x1.subscribe(
      x => console.log(x.value + ': ' + x.timestamp));

    var source = Observable.range(1, 5);

    var subscription = source.subscribe(
      x => console.log('onNext: %s', x),
      e => console.log('onError: %s', e),
      () => console.log('onCompleted'));

    this.optionsSub = Observable.combineLatest(
      this.pageSize,
      this.curPage,
      this.nameOrder,
      this.location
    ).subscribe(([pageSize, curPage, nameOrder, location]) => {
      const options: Options = {
        limit: pageSize as number,
        skip: ((curPage as number) - 1) * (pageSize as number),
        sort: { name: nameOrder as number }
      };

      console.log("combineLatest options")
      console.dir(options)
    });

    this.bugsSub = MeteorObservable.subscribe('bugs', null, null).zone().subscribe(() => {
      var query = Bugs.find({}, {
        sort: {
          name: this.nameOrder
        }
      }).zone();


      this.bugs = query;

      this.pageSize.next(10);
      this.curPage.next(1);
      this.xxxxMan.next(100);

    });



    console.log("I'm being called when component is initalized after constructor method from bugs-list.ts");
    // this.bugs = this._getBugs();

    // var query = Bugs.find({});

    // var self = this;
    // var handle = query.observeChanges({
    //   added: function (id, o) {
    //     console.log("subscribe Added: " + id)
    //     console.dir(id)
    //     // self.bugsA.push(o)

    //   },
    //   removed: function (id) {
    //     console.log("subscribe Removed: " + id)
    //   },
    //   changed: function (id, bug) {
    //     console.log("subscribe Changed: " + id)
    //     console.dir(bug)


    //   },
    // });
    // this.bugs = query;
    // console.dir(this.bugs)


    // let xxx = Bugs.find({}).fetch();

    // setTimeout(() => {

    //   console.dir(xxx)
    // }, 1000 * 10);


    // this.subscribe('bugs', () => {
    //   var self = this;

    //   // this.bugs = Bugs.find({});

    // }, true);

  }

  _getBugs() {

    return Bugs.find({});
  }

  // setBug(list) {
  //   console.log("in setBug()")
  //   list.setBug(list.bugModel);
  // }


  setBugs() {

    //  let activeTabs = this.tabs.filter((tab)=>tab.active);
    // this.bugsList.first.setDiv();
    // this.bugsList.last.setDiv();

    // this.bugsList.toArray().forEach((list) => {
    //   this.setBug(list);
    // });


    var b = new Object();
    this.helloEvent.emit(b)

  }

  ngOnDestroy() {
    this.bugsSub.unsubscribe();
    // this.optionsSub.unsubscribe();
    // this.autorunSub.unsubscribe();
  }
}


