import { Component, OnInit } from '@angular/core';
import { CriaturaService } from '../criatura.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-criatura-list',
  templateUrl: './criatura-list.component.html',
  styleUrls: ['./criatura-list.component.scss']
})
export class CriaturaListComponent implements OnInit {

  criaturas : any = []  // Vetor vazio

  displayedColumns : string[] = ['nome', 'nome_cientifico', 'dieta', 'altura', 'comprimento', 
    'peso', 'descobridor', 'data_descoberta', 'habitat', 'pais', 'imagem', 'surgimento', 
    'extincao', 'descr', 'fonte', 'editar', 'excluir']
  
  constructor(
    private criaturaSrv : CriaturaService,
    private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.criaturas = await this.criaturaSrv.listar()
    console.log(this.criaturas)
  }

  async excluir(id : string) {
    if(confirm('Deseja realmente excluir este item?')) {
      try {
        // 1) Efetuar a exclusão
        await this.criaturaSrv.excluir(id)
        // 2) Atualizar os dados da tabela
        this.ngOnInit()
        // 3) Dar um feedback de sucesso para o usuário
        this.snackBar.open('Item excluído com sucesso.', 'Entendi', {
          duration: 5000 // 5 segundos
        })
      }
      catch(erro) {
        console.error(erro)
        // 4) Dar um feedback de erro para o usuário
        this.snackBar.open('ERRO: não foi possível excluir este item.', 'Que pena!', {
          duration: 5000 // 5 segundos
        })
      }
    }
  }

}