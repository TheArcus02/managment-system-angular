import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, Supplier } from 'src/app/models';
import { ProductsAndSuppliersService } from 'src/app/services/products-and-suppliers.service';
@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.scss']
})
export class SupplierDetailComponent implements OnInit {

  supplier!:Supplier;
  supplierItems!:Product[];
  

  constructor(private route: ActivatedRoute, private service: ProductsAndSuppliersService) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id') || '{}');
    this.service.getSupplierById(id).subscribe((supplier) => this.supplier = supplier); 
  }

  getClasses(){
    return this.supplier.photo ? `url(${this.supplier.photo}) ` : '';
  }

  
  
}
