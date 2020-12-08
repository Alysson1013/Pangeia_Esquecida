import { Component, OnInit } from '@angular/core';
import { PeriodoService } from '../periodo.service';
import { CriaturaService } from 'src/app/criatura/criatura.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-periodo-list',
  templateUrl: './periodo-list.component.html',
  styleUrls: ['./periodo-list.component.scss']
})
export class PeriodoListComponent implements OnInit {

  searchText

  periodos : any = []
  criaturas : any = []
  
  constructor(
    private periodoSrv : PeriodoService,
    private criaturaSrv : CriaturaService,
    private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.periodos = await this.periodoSrv.listar()
    console.log(this.periodos)
  }

  async excluir(id : string) {
    if(confirm('Deseja realmente excluir este item?')) {
      try {
        // 1) Efetuar a exclusão
        await this.periodoSrv.excluir(id)
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

    try {
      this.criaturas = await this.criaturaSrv.listar()
    }
    catch(erro) {
      console.log(erro)
      this.snackBar.open('ERRO: não foi possível carregar todos os dados do formulário.',
        'Que pena!', { duration: 5000 })
    }

  }

}