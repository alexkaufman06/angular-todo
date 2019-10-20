import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '<:Todos:>';
}

// https://www.youtube.com/watch?v=Fdf5aTYRW0E
// 1:07:55 minutes in

// ng build for dist file when deploying
// THIS IS CLI COMMAND FOR GENERATING COMPONENTS
// ng generate component components/Todos
// ng g c <= SHORTCUT FOR GENERATING COMPONENTS
