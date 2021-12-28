import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonasComponent } from './personas.component';
import { PersonasRoutingModule } from './personas-routing.module';
import { PersonaComponent } from './persona/persona.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    PersonasComponent,
    PersonaComponent
    
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    MaterialModule
  ]
})
export class PersonasModule { }
