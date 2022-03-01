import {Produit} from "./Produit";

export class ItemProduit {

 nomP:string | undefined;
  constructor() {
 let  produit:Produit=new Produit()
    this.nomP=produit.nom
    this.id=produit.id
  }
id:number | undefined;
  prix:number| undefined;
 quantite:number| undefined;

}
