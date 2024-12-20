import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-description-text, [appCardDescriptionText]',
  host: { 'class': 'ca-c-card__description-text' }
})
export class CardDescriptionTextDirective {}
