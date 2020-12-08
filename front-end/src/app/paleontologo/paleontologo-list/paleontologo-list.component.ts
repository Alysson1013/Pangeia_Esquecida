import { CriaturaService } from './../../criatura/criatura.service';
import { Component, OnInit } from '@angular/core';
import { PaleontologoService } from '../paleontologo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-paleontologo-list',
  templateUrl: './paleontologo-list.component.html',
  styleUrls: ['./paleontologo-list.component.scss']
})
export class PaleontologoListComponent implements OnInit {

  searchText

  paleontologos : any = []  // Vetor vazio
  criaturas : any = []

  displayedColumns : string[] = ['nome', 'data_nascimento', 'data_falecimento', 'descr', 'especializacao', 'imagem', 'editar', 'excluir']
  
  constructor(
    private criaturaSrv : CriaturaService,
    private paleontologoSrv : PaleontologoService,
    private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.paleontologos = await this.paleontologoSrv.listar()
    this.criaturas = await this.criaturaSrv.listar()
    console.log(this.paleontologos)
    console.log(this.criaturas)
  }

  async excluir(id : string) {
    if(confirm('Deseja realmente excluir este item?')) {
      try {
        // 1) Efetuar a exclusão
        await this.paleontologoSrv.excluir(id)
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