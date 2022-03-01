import {ItemProduit} from "./ItemProduit";
import {Client} from "./Client";

export class Panier {

  constructor(name: string) {
    this.name = name;
  }

  public name: string
  public items:Map<number,ItemProduit>=new Map();
  public client: Client | undefined;
}
