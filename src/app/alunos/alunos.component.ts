import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent {

  public titulo = 'Alunos';

  public alunos = [
    { id: 1, nome: 'Paulo', sobrenome: 'teste', telefone: 81992891280 },
    { id: 2, nome: 'Marta', sobrenome: 'teste', telefone: 81992891280 },
    { id: 3, nome: 'Amtonio', sobrenome: 'teste', telefone: 81992891280 },
    { id: 4, nome: 'Carlos', sobrenome: 'teste', telefone: 81992891280 },
    { id: 5, nome: 'Daniella', sobrenome: 'teste', telefone: 81992891280 },
    { id: 6, nome: 'Eduarda', sobrenome: 'teste', telefone: 81992891280 },
  ];

  constructor() { }
  ngOnInit() { }

}
