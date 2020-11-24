import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-refresher';
  //TypeScript is good at inferring types but you can define your own type with : after the key/variable
}
//Angular has powerful data binding features one being property binding
