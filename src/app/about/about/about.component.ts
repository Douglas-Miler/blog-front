import { Component, OnInit } from '@angular/core';

import { PersonCard } from './../person-card/person-card';

@Component({
  selector: 'blog-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  cards: PersonCard[] = [
    {
      name: "Deivison Julio",
      position: "Analista Desenvolvedor",
      avatarSrc: "../../../assets/images/integrantes/deivison.png",
      avatarAlt: "",
      resume: "Desenvolvedor na plataforma .NET, possui"
      + " aproximadamente 10 anos na área, mas não se"
      + " limitando a apenas esta plataforma.",
      linkedin: "https://www.linkedin.com/in/deivison-julio-ferreira-13346133/"
    },
    {
      name: "Douglas Miler",
      position: "Analista Desenvolvedor",
      avatarSrc: "../../../assets/images/integrantes/douglas.png",
      avatarAlt: "",
      resume: "Desenvolvedor apaixonado pela linguagem Java, já trabalhou"
      + " com automações de processos e APIs RESTful. Agora atua"
      + " como desenvolvedor Full Stack, utilizando Angular",
      linkedin: "https://www.linkedin.com/in/douglas-teodoro-jr/"
    },
    {
      name: "Flávio Vaz",
      position: "Analista Desenvolvedor",
      avatarSrc: "../../../assets/images/integrantes/flavio.png",
      avatarAlt: "",
      resume: "Desenvolvedor apaixonado pela linguagem Java, já trabalhou"
      + " com automações de processos e APIs RESTful. Agora atua"
      + " como desenvolvedor Full Stack, utilizando Angular",
      linkedin: "https://www.linkedin.com/in/flavio-vaz/"
    }
  ];

  ngOnInit(): void {

  }

}
