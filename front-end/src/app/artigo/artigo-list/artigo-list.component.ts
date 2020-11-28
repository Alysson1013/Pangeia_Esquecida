import { Component, OnInit } from '@angular/core';
import { ArtigoService } from '../artigo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-artigo-list',
  templateUrl: './artigo-list.component.html',
  styleUrls: ['./artigo-list.component.scss']
})
export class ArtigoListComponent implements OnInit {

  artigos : any = []  // Vetor vazio

  displayedColumns : string[] = ['titulo', 'imagem', 'texto', 'autor', 'fonte', 'editar', 'excluir']
  
  constructor(
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
  }

}