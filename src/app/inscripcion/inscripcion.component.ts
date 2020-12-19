import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css'],
  
})
export class InscripcionComponent implements OnInit {

Videos = [
  
  {
    video: 'T7TgL95MpaA'
  }
]


Extras =[
  {
    extra: ''
  }
]

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
   

    
  }

}
