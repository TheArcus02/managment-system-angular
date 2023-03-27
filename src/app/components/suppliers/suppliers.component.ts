import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models';
import { ProductsAndSuppliersService } from '../../services/products-and-suppliers.service'

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {

  suppliers!: Supplier[];

  constructor(private supplierService: ProductsAndSuppliersService) { }

  ngOnInit(): void {
    this.supplierService.getSuppliers().subscribe((suppliers) => this.suppliers = suppliers);
    
  }

}
