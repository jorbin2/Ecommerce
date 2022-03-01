import { Component, OnInit } from '@angular/core';
import {PanierService} from "../services/panier.service";

@Component({
  selector: 'app-paniers',
  templateUrl: './paniers.component.html',
  styleUrls: ['./paniers.component.css']
})
export class PaniersComponent implements OnInit {

  constructor(public panierServicePc:PanierService) { }

  ngOnInit(): void {
  }

}
