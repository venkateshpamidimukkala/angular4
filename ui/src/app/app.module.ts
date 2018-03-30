import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TyreindexComponent } from './tyreindex/tyreindex.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path:'tyreindex',
    component: TyreindexComponent
  },
  {
    path:'tyrehome',
    component: HomeComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    TyreindexComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(  appRoutes )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
