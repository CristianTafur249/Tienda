import { Component, OnInit , Input} from '@angular/core';
import { product } from '../../models/product.model'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  @Input() product: product ={
    id: '' ,
    name: '',
    price: 0 ,
    image: ''
  }

  ngOnInit(): void {
  }

}
