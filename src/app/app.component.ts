import { Component, OnInit } from '@angular/core';

interface target{
  titulo:string;
  Subtitulo:string;
  nro?:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public arreglotarjetas:target[]=[];

  ngOnInit(): void {
    this.arreglotarjetas=[
      {titulo:'Video 1',Subtitulo:'Subtitulo'},
      {titulo:'Video 1',Subtitulo:'Subtitulo'},
      {titulo:'Video 1',Subtitulo:'Subtitulo'}
    ]
  }
  title = 'mdb-angular-ui-kit-free';
}
