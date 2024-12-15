import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main.component';
import { MainRoutingModule } from './pages/main-routing.module';
const childRoutes=MainRoutingModule.routes;
const routes: Routes = [
  {path:"pages", component:MainComponent,children:childRoutes},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
