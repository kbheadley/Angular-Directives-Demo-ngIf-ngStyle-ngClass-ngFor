import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph = false;
  log = [];

  onToggleParagraph() {
    this.showParagraph = !this.showParagraph;  // toggle display of paragraph
    this.log.push(this.log.length + 1);  // count the iteration
  }
  
}
