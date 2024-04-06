import { Routes } from '@angular/router';
import {PageNotFoundComponent} from './core/components/page-not-found/page-not-found.component';
import {CalcComponent} from './features/calc/calc.component';
import {CountersComponent} from './features/counters/counters.component';
import {HomeComponent} from './features/home/home.component';

export const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'calc', component: CalcComponent },
  { path: 'counter', component: CountersComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];
