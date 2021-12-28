import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { PersonasService } from './services/personas.service';
import {tap} from 'rxjs/operators';
import { Persona } from './interface/persona.interface';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas!:Persona[];
  constructor(private personaService:PersonasService) { }

  ngOnInit(): void {

    this.personaService.getPersonas().pipe(
      tap((personas: Persona[]) => this.personas = personas)
      )
      .subscribe();

  }

verDetalle(persona:Persona):void{
console.log("detalle", persona)
console.log(this.personaService.getOne(persona.id));
}
}
