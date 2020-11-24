import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input.component';

const routes: Routes = [
  { path: '', component: PersonsComponent },
  //   localhost:4200/input
  { path: 'input', component: PersonInputComponent },
];

@NgModule({
  // tell angular about our routes via imports
  imports: [RouterModule.forRoot(routes)],
  // now exports our configured routes
  exports: [RouterModule],
})
export class AppRoutingModule {}
