import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  onSetThemeOne() {
    this.renderer.removeAttribute(this.document.body, 'class');
  }

  onSetThemeTwo() {
    this.renderer.setAttribute(this.document.body, 'class', 'theme-two');
  }
}
