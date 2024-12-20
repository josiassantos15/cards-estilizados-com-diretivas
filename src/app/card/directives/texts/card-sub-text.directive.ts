import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-sub-text, [appCardSubText]',
  host: { 'class': 'ca-c-card__sub-text' }
})
export class CardSubTextDirective {}
