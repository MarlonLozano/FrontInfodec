import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Persona } from '../personas/interface/persona.interface';
import { PersonasService } from '../personas/services/personas.service';

@Component({
  selector: 'app-detallePersona',
  templateUrl: './detallePersona.component.html',
  styleUrls: ['./detallePersona.component.css']
})
export class detallePersonaComponent implements OnInit {

  personas!:Persona[];
  constructor(private personaService:PersonasService) { }

  ngOnInit(): void {

    this.personaService.getPersonas().pipe(
      tap((personas: Persona[]) => this.personas = personas)
      )
      .subscribe();

  }
}
