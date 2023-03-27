import { Component, OnInit, Input } from '@angular/core';
import { Product, Supplier } from 'src/app/models';
import { ProductsAndSuppliersService } from 'src/app/services/products-and-suppliers.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  supplier!: Supplier;

  constructor(private service: ProductsAndSuppliersService) { }

  ngOnInit(): void {
    this.service.getSupplierById(this.product.supplierId).subscribe(supplier => this.supplier = supplier);
  }

  getProductUrl(){
    return `/products/${this.product.id}`;
  }
}
