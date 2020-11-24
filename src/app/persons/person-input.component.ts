import { Component } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  //Done as array because you may have more than one
  styleUrls: ['./person-input.component.css'],
})
export class PersonInputComponent {
  enteredPersonName: string = '';

  constructor(private personsService: PersonsService) {}

  onCreatePerson() {
    console.log('Created a person: ' + this.enteredPersonName);
    this.personsService.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
