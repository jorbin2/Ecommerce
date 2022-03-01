import { Injectable } from '@angular/core';
import {Panier} from "../model/Panier";
import {Produit} from "../model/Produit";
import {ItemProduit} from "../model/ItemProduit";

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  currentPanierName:string="Panier1"
  public paniers:Map<string,Panier>= new Map()

  constructor() {
    let panier= new Panier(this.currentPanierName)

    this.paniers.set(this.currentPanierName,panier)
  }
  public  addProduitToPanier(produit:Produit):void{
    let panier:any = this.paniers.get(this.currentPanierName)
    let produitItem: ItemProduit |undefined;
    produitItem = panier.items.get(produit.id);
    if(produitItem){
      // @ts-ignore
      produitItem.quantite+=produit.quantite
    }else{
      produitItem=new ItemProduit();
      produitItem.prix=produit.prix;
      produitItem.quantite=produit.quantite;
      produitItem.id=produit.id;
      produitItem.nomP=produit.nom;
      panier.items.set(produit.id,produitItem);
    }

  }
  public savePanier(){

  }
  getCurrentPanier():Panier{
    // @ts-ignore
    return this.paniers.get(this.currentPanierName)

  }

  getTotal():number {
    let total:number=0;
    let items:IterableIterator<ItemProduit>= this.getCurrentPanier().items.values()

    for(let i of items ){
      // @ts-ignore
      total+=i.prix*i.quantite;
    }
 return total;
  }
}
