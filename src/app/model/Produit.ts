export class Produit {

  private _id: number | undefined
  private _nom: string | undefined
  private _description: string | undefined
  private _prix: number | undefined
  private _photoName: string | undefined
  private _selected: boolean | undefined
  private _quantite: number | undefined

  private _links: {
    self: {
      href: string
    }
    produit: {
      href: string
    }
    categorie: {
      href: string
    }
  } | undefined


  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  get nom(): string | undefined {
    return this._nom;
  }

  set nom(value: string | undefined) {
    this._nom = value;
  }

  get description(): string | undefined {
    return this._description;
  }

  set description(value: string | undefined) {
    this._description = value;
  }

  get prix(): number | undefined {
    return this._prix;
  }

  set prix(value: number | undefined) {
    this._prix = value;
  }

  get photoName(): string | undefined {
    return this._photoName;
  }

  set photoName(value: string | undefined) {
    this._photoName = value;
  }

  get selected(): boolean | undefined {
    return this._selected;
  }

  set selected(value: boolean | undefined) {
    this._selected = value;
  }

  get quantite(): number | undefined {
    return this._quantite;
  }

  set quantite(value: number | undefined) {
    this._quantite = value;
  }

  get links(): { self: { href: string }; produit: { href: string }; categorie: { href: string } } | undefined {
    return this._links;
  }

  set links(value: { self: { href: string }; produit: { href: string }; categorie: { href: string } } | undefined) {
    this._links = value;
  }
}
