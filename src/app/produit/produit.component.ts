import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../catalogue.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {PanierService} from "../services/panier.service";
import {Produit} from "../model/Produit";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  public produits: any;
 currentProduit: any;
editPhoto: boolean | undefined;
  private selectFile: any;

  constructor(public catService:CatalogueService,
              private route:ActivatedRoute,
              private  router:Router,
              public panierService:PanierService,
              public authservice:      AuthService
  ) {



  }

  ngOnInit(): void {

    this.router.events.subscribe((val)=>{
      if(val instanceof NavigationEnd){
        let url=val.url
        console.log(url)

        let p1= this.route.snapshot.params['p1']

        if(p1==1){
          this.getProduits('/produits/search/selectedProduits');
        }else if(p1==2){
          let idCat= this.route.snapshot.params['p2']
          this.getProduits('/categories/'+idCat+'/produits');
        }

      }
    });

    let p1= this.route.snapshot.params['p1']

    if(p1==1){
      this.getProduits('/produits/search/selectedProduits');
    }


  }
  private getProduits(url:any){
    this.catService.getResource(url)
      .subscribe(data=>{
        this.produits=data;
      },err=>{
        console.log(err);
      })
  }

  onEditPhoto(p:any) {
    this.currentProduit=p
    this.editPhoto=true

  }

  onSelectFile(event: Event) {
// @ts-ignore
    this.selectFile=event.target.files
  }

  onAddProduitToPanier(p:Produit){

this.panierService.addProduitToPanier(p);
  }
}
