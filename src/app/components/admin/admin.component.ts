import { Component, OnInit } from '@angular/core';
import { Product, Supplier } from 'src/app/models';
import { ProductsAndSuppliersService } from 'src/app/services/products-and-suppliers.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  selected: "products" | "suppliers" = "products";
  items!: any[];

  constructor(private psService: ProductsAndSuppliersService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.psService.getProducts().subscribe((products) => this.items = products);
    this.selected = "products";
  }
  
  getSuppliers(){
    this.psService.getSuppliers().subscribe((products) => this.items = products);
    this.selected = "suppliers";
  }
}
