import { Component, OnInit, Input } from '@angular/core';
import { Supplier } from 'src/app/models';

@Component({
  selector: 'app-supplier-card',
  templateUrl: './supplier-card.component.html',
  styleUrls: ['./supplier-card.component.scss']
})
export class SupplierCardComponent implements OnInit {

  @Input() supplier!: Supplier;

  constructor() { }

  ngOnInit(): void {
  }

}
