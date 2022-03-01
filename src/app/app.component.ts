import {Component, OnInit} from '@angular/core';
import {CatalogueService} from "./catalogue.service";
import {Router} from "@angular/router";
import {PanierService} from "./services/panier.service";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Ecom-web';
  public categories:any;
  public currentCategorie:any;

  constructor(private catService:CatalogueService,
              private router: Router,
              public panierService:PanierService,
              public authService:AuthService) {
  }

  ngOnInit(): void {
    this.getCategorie();
  }

  private getCategorie() {
this.catService.getResource("/categories")
  .subscribe(data=>{
    this.categories=data;
  },err=>{
  console.log(err)
})
  }

  getProduitByCat(c: any) {
    this.currentCategorie=c
this.router.navigateByUrl('/produits/2/'+c.id)
  }

  onSelectProduit() {
    this.currentCategorie=undefined
    this.router.navigateByUrl("/produits/1/0");
  }

  onLogout() {
    this.router.navigateByUrl('login')
    this.authService.isAuthentificate=false
  }
}
