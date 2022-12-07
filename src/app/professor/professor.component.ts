import { Component } from '@angular/core';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent {

  titulo = "Professor";

  public professor = [
    { id:1, nome: 'Paulo Borges'    , sobrenome: 'teste', telefone: '81992891280',},
    { id:2, nome: 'Marta Etilia'    , sobrenome: 'teste', telefone: '81992891280',},
    { id:3, nome: 'Amtonio Carlos'  , sobrenome: 'teste', telefone: '81992891280',},
    { id:4, nome: 'Carlos Lira'     , sobrenome: 'teste', telefone: '81992891280',},
    { id:5, nome: 'Daniella Silva'  , sobrenome: 'teste', telefone: '81992891280',},
    { id:6, nome: 'Eduarda Oliveira', sobrenome: 'teste', telefone: '81992891280',},
  ];

}
