import { Component } from '@angular/core';
import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';
import AppAnimations from './app.animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [``],
  animations: [
    trigger('routerAnimations', [
        transition('home => about', AppAnimations.slideRight),
        transition('about => home', AppAnimations.slideLeft),
    ])
  ]
})
export class AppComponent {
  title = 'app';

  prepareRouteTransition(outlet) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }
}
