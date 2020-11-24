//imnput is a decorator that goes in front of  a property
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonsService } from './persons.service';

@Component({
  //app-component name
  selector: 'app-persons',
  templateUrl: './persons.component.html',
})
// implement has your class sign a contract that it will run these hooks for it's lifecycle
export class PersonsComponent implements OnInit, OnDestroy {
  //adding person list property to talk to the property in app.component
  //set a data type because there is no default value
  //@input tells Angular that this property of this component can be bound from outside
  personList: string[];
  isFetching = false;
  private personListSubs: Subscription;
  //   private personService: PersonsService;
  //tell angular what dependencies we have
  //   adding private/public in front automatically creates a property with the same name
  constructor(private prsService: PersonsService) {
    // this.personList = prsService.persons;
    // this.personService = prsService;
  }
  //   lifecycle hook which Angular will execute when it creates our component
  ngOnInit() {
    this.isFetching = true;
    this.prsService.fetchPersons();
    // set up a listener for Subject
    this.personListSubs = this.prsService.personsChanged.subscribe(
      (persons) => {
        this.personList = persons;
        this.isFetching = false;
      }
    );
  }
  onRemovePerson(personName: string) {
    this.prsService.removePerson(personName);
  }
  // prevents memory leaks
  ngOnDestroy() {
    this.personListSubs.unsubscribe();
  }
}
