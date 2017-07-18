import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LocalStorageModule } from 'angular-2-local-storage';

import { AppRoutingModule } from './app-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos.component';
import { AddComponent } from './add.component';

import { TodosService } from './todos.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    LocalStorageModule.withConfig({
      prefix: 'TodoList_',
      storageType: 'localStorage',
    }),
    AppRoutingModule,
    Ng2SearchPipeModule,
  ],

  declarations: [
    AppComponent,
    TodosComponent,
    AddComponent,
  ],

  providers: [
    TodosService,
  ],

  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
