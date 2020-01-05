import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionsComponent } from './regions/regions.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'regions', component: RegionsComponent},
  { path: '', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
