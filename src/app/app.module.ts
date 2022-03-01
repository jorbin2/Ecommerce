import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {CatalogueService} from "./catalogue.service";
import { ProduitComponent } from './produit/produit.component';
import {AppRoutingModule} from "./app-routing-module";
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { PaniersComponent } from './paniers/paniers.component';
import { CreerProduitComponent } from './creer-produit/creer-produit.component';


@NgModule({
  declarations: [
     AppComponent,
    ProduitComponent,
    LoginComponent,
    PaniersComponent,
    CreerProduitComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        FormsModule,


    ],
  providers: [CatalogueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
