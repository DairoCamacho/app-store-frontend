import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonComponent } from './person/person.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'person', component: PersonComponent },
  { path: 'product', component: ProductComponent },
  { path: 'order', component: OrderComponent },
  { path: '', component: HomeComponent },
  // { path : 'salir', redirectTo: '/home', pathMatch: 'full' }, 
  // redirectTo: se usa para cuando usa servicios externos donde recibes algo (url) y lo redireccionas a una pagina
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
