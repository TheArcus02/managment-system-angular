import { TestBed } from '@angular/core/testing';

import { ProductsAndSuppliersService } from './products-and-suppliers.service';

describe('ProductsAndSuppliersService', () => {
  let service: ProductsAndSuppliersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsAndSuppliersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
