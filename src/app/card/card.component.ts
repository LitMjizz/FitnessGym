import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public image:string="https://www.rdstation.com/blog/wp-content/uploads/sites/2/2017/09/thestocks.jpg";
  public tittle:string="Carta nueva";
  constructor() { }

  ngOnInit(): void {
  }

}
