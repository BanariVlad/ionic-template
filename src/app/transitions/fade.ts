import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn, fadeOut } from 'ng-animate';

export const fadeInTransition = trigger('fadeIn', [
  transition('void => *', [useAnimation(fadeIn)]),
]);

export const fadeOutTransition = trigger('fadeOut', [
  transition('* => void', [useAnimation(fadeOut)]),
]);
