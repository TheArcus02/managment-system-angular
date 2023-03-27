import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Product, Supplier } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductsAndSuppliersService {
  private apiUrl = 'http://localhost:5000'

  constructor(private http:HttpClient) { }

  getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.apiUrl}/suppliers`);
  }
  
  getSupplierById(id:number): Observable<Supplier>{
    const supplierInfoRequest = this.http.get<Supplier>(`${this.apiUrl}/suppliers/${id}`);

    const supplierProducts = this.getSupplierProductsById(id);
    
    return forkJoin({
      supplierInfoRequest,
      supplierProducts,
    }).pipe(
      map((resp: any) => {
        return {
          ...resp['supplierInfoRequest'],
          products: resp['supplierProducts'],
        };

      })
    );
  }

  getSupplierProductsById(id:number){
    return this.http.get<Product[]>(`${this.apiUrl}/products/`).pipe(
      map(products => products.filter(product => product.supplierId === id))
    );
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }
  
  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

}
