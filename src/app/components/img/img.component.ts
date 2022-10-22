import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img : string = 'valor init'
  @Output() loaded = new EventEmitter <string>();

  imageDefault = './assets/images/Default.jpg'
  constructor() { }

  errorImg(){
    this.img = this.imageDefault;
  }

  loadImg(){
    console.log('loaded hijo');
    this.loaded.emit(this.img);
  }

  ngOnInit(): void {
  }

}
