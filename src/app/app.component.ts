import { Component } from '@angular/core';
import { product } from "./models/product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tienda';
  imgParent = ''
  
  products: product[] = [
    {
      id: '1' ,
      name: 'Producto 1',
      price: 100 ,
      image: 'https://cnnespanol.cnn.com/wp-content/uploads/2021/07/baby-yoda-the-child-mandalorian.png?w=620'
    },
    {
      id: '2' ,
      name: 'Producto 2',
      price: 300 ,
      image: 'https://images-eu.ssl-images-amazon.com/images/I/410Sev33eeL.jpg'
    },
    {
      id: '3' ,
      name: 'Producto 3',
      price: 200 ,
      image: 'https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/09f5ba3c-5353-4615-96f1-940a6be520d0___8b20b5f461eebb95e89384925beb7020.jpg'
    }
  ];
  onloaded( img : string){
    console.log('log padre', img);
  }
}
