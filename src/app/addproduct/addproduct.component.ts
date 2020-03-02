import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  @Input() productCount: number;
  @Output() add = new EventEmitter();

  productName:string;

  constructor() { }

  ngOnInit() {
    
  }

  save():void {    
    this.add.emit(new Product(this.productCount+1, this.productName));
  }

}
