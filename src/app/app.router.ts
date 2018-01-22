import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CurrentsComponent } from './currents/currents/currents.component';
import { LocalCurrentsComponent } from './currents/local/local.component';
import { NationalCurrentsComponent } from './currents/national/national.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'currents', component: CurrentsComponent, children: [
    { path: '', redirectTo: 'local', pathMatch: 'full' },
    { path: 'local', component: LocalCurrentsComponent },
    { path: 'national', component: NationalCurrentsComponent }
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRouter {

}
