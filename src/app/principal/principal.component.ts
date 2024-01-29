import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  Nombre = "Oswaldo Lázaro Flores";
  desc =  "Descripcion generica";
  Skills = {
    skill1: "Django",
    skill2: "Python",
    skill3: "HTML",
    skill4: "React",
    skill5: "Tailwinds CSS más o menos"
  };

  obtenerSkills(): string[] {
    return Object.values(this.Skills);
  }


}
