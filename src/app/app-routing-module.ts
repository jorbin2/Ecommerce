import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {ProduitComponent} from "./produit/produit.component";
import {LoginComponent} from "./login/login.component";
import {PaniersComponent} from "./paniers/paniers.component";

const routes: Routes=[
  {path:'produits/:p1/:p2',component:ProduitComponent},
  {path:'',redirectTo:'produits/1/0',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'paniers',component:PaniersComponent}
];


@NgModule({
            imports:[RouterModule.forRoot(routes)
            ],
  exports:[RouterModule]
})
export  class AppRoutingModule{}
