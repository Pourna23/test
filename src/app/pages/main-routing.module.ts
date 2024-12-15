import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactOwnerComponent } from './contact-owner/contact-owner.component';
import { ProductComponent } from './product/product.component';
import { DetailedproductComponent } from './detailedproduct/detailedproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';

export const routes: Routes = [
  {path:'', redirectTo:'product', pathMatch:'full'},
  {path:"product", component:ProductComponent},
  {path:"contact_owner", component:ContactOwnerComponent},
  {path:"detailedproduct", component:DetailedproductComponent},
  {path:"product-list",component:ProductlistComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { 
  static routes=routes;
}
