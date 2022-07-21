import { Component, Input, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { User } from 'src/app/pages/user/user.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('foto') foto?: string;
  @Input('nome') nome?: string;
  @Input('sobrenome') sobrenome?: string;
  @Input('idade') idade?: number;
  @Input('cidade') cidade?: string;
  @Input('estado') estado?: string;
  @Input('pais') pais?: string;
  @Input('email') email?: string;
  @Input('telefone') telefone?: string;

  constructor() { }

  ngOnInit(): void {
    fromEvent(document, 'mousemove').subscribe((e) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('card-person')) 
        target.classList.add('hover');
    });

    fromEvent(document, 'mouseout').subscribe((e) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('card-person')) 
        target.classList.remove('hover');
    });
  }
}
