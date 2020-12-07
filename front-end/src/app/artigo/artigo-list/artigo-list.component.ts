import { Component, OnInit } from '@angular/core';
import { ArtigoService } from '../artigo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CriaturaService } from 'src/app/criatura/criatura.service';
import { PeriodoService } from 'src/app/periodo/periodo.service';
import { PaleontologoService } from 'src/app/paleontologo/paleontologo.service';

@Component({
  selector: 'app-artigo-list',
  templateUrl: './artigo-list.component.html',
  styleUrls: ['./artigo-list.component.scss']
})
export class ArtigoListComponent implements OnInit {

  searchText

  artigos : any = []
  criaturas : any = []
  paleontologos : any = []
  periodos : any = []

  constructor(
    private criaturaSrv : CriaturaService,
    private paleontologoSrv : PaleontologoService,
    private periodoSrv : PeriodoService,
    private artigoSrv : ArtigoService,
    private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.artigos = await this.artigoSrv.listar()
    console.log(this.artigos)
  }

  async excluir(id : string) {
    if(confirm('Deseja realmente excluir este item?')) {
      try {
        // 1) Efetuar a exclusão
        await this.artigoSrv.excluir(id)
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
      this.paleontologos = await this.paleontologoSrv.listar()
      this.periodos = await this.periodoSrv.listar()
    }
    catch(erro) {
      console.log(erro)
      this.snackBar.open('ERRO: não foi possível carregar todos os dados do formulário.',
        'Que pena!', { duration: 5000 })
    }

  }

}