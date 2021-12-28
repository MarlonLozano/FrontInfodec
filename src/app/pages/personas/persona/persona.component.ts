import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from '../interface/persona.interface';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  @Input() persona!:Persona;
  @Output() verPersonaonClick= new EventEmitter<Persona>();

  constructor(private personaService:PersonasService) { }

  ngOnInit(): void {
  }

  verPersona():void{
    this.verPersonaonClick.emit(this.persona);
    console.log(this.personaService.getOne(this.persona.id));
    
  }

}
