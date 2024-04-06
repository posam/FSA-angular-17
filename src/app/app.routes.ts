import { Routes } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CalcComponent} from './calc/calc.component';
import {CountersComponent} from './counters/counters.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'calc', component: CalcComponent },
  { path: 'counter', component: CountersComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];
