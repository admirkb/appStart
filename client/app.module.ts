import {NgModule, enableProdMode} from '@angular/core';
import { FormsModule }      from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {BugsList} from '../imports/bugs/bugs-list/bugs-list';
// import {BugsItem} from '../imports/bugs/bugs-item/bugs-item';

  import { MeteorComponent} from 'angular2-meteor';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, BugsList],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }