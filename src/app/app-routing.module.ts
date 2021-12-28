import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { detallePersonaComponent } from './pages/detallePersona/detallePersona.component';
import { PersonasComponent } from './pages/personas/personas.component';

const routes:Routes =[
    {path:'personas', component:PersonasComponent},
    {path:'personas/:id', component:detallePersonaComponent},
    {path:'**', redirectTo:'', pathMatch:'full'},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}