import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tienda';
  imgParent = ''

  onloaded( img : string){
    console.log('log padre', img);
  }
}
