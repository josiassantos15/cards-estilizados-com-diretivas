import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-main-text, [appCardMainText]',
  host: { 'class': 'ca-c-card__main-text' }
})
export class CardMainTextDirective {}
