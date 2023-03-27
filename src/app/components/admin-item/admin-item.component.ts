import { Component, OnInit, Input } from '@angular/core';
import { Product, Supplier } from 'src/app/models';

 
@Component({
  selector: '[app-admin-item]',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.scss']
})
export class AdminItemComponent implements OnInit {

  @Input() item!: any;
  @Input() selected!: "products" | "suppliers";

  constructor() { }

  ngOnInit(): void {
  }

}
