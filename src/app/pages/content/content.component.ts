import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover:string = "https://topcinema.com.br/wp-content/uploads/2023/10/cats-133.jpg"
  @Input()
  contentTitle:string = "MINHA NOTICIA"
  contentDescription:string = "Olá Mundo"
  
  constructor() { }

  ngOnInit(): void {
  }

}
