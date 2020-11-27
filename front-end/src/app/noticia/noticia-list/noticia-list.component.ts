import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../noticia.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-noticia-list',
  templateUrl: './noticia-list.component.html',
  styleUrls: ['./noticia-list.component.scss']
})
export class NoticiaListComponent implements OnInit {

  noticias : any = []  // Vetor vazio

  displayedColumns : string[] = ['manchete', 'imagem', 'url']
  
  constructor(
    private noticiaSrv : NoticiaService,
    private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.noticias = await this.noticiaSrv.listar()
    console.log(this.noticias)
  }

  async excluir(id : string) {
    if(confirm('Deseja realmente excluir este item?')) {
      try {
        // 1) Efetuar a exclusão
        await this.noticiaSrv.excluir(id)
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