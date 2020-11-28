import { MatSnackBar } from '@angular/material/snack-bar';
import { PeriodoService } from './../periodo.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-periodo-form',
  templateUrl: './periodo-form.component.html',
  styleUrls: ['./periodo-form.component.scss']
})
export class PeriodoFormComponent implements OnInit {

  title : string = 'Novo período'

  periodo : any = {} // Objeto vazio, nome da entidade no SINGULAR

  niveis : any = [
    { valor: 'Cambriano', descr: 'Cambriano' },
    { valor: 'Ordoviciano', descr: 'Ordoviciano' },
    { valor: 'Siluriano', descr: 'Siluriano' },
    { valor: 'Devoniano', descr: 'Devoniano' },
    { valor: 'Carbonífero', descr: 'Carbonífero' },
    { valor: 'Permiano', descr: 'Permiano' },
    { valor: 'Triássico', descr: 'Triássico' },
    { valor: 'Jurássico', descr: 'Jurássico' },
    { valor: 'Cretáceo', descr: 'Cretáceo' },
    { valor: 'Paleógeno', descr: 'Paleógeno' },
    { valor: 'Neógeno', descr: 'Neógeno' },
    { valor: 'Quaternário', descr: 'Quaternário' },
  ]

  constructor(
    private periodoSrv : PeriodoService,
    private snackBar : MatSnackBar,
    private location : Location,
    private actRoute : ActivatedRoute
  ) { }

  async ngOnInit() {
    // Verificando se existe id na rota que trouxe ao formulário
    if(this.actRoute.snapshot.params['id']) {
      try {
        // 1) Trazer o registro do back-end para edição
        this.periodo = await this.periodoSrv.obterUm(this.actRoute.snapshot.params['id'])
        // 2) Mudar o título da página
        this.title = 'Editando período'
      }
      catch(erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível carregar os dados para edição.',
          'Que pena!', { duration: 5000 })
      }
    }
  }

  async salvar(form : NgForm) {
    try {
      if(form.valid) {
        // 1) Enviar os dados para o back-end para serem salvos
        if(this.periodo._id) {
          // _id existe, esse registro já foi salvo anteriormente
          // no BD e é caso de atualização
          await this.periodoSrv.atualizar(this.periodo)
        }
        else {
          await this.periodoSrv.novo(this.periodo)
        }
        // 2) Dar um feedback (mensagem) para o usuário
        this.snackBar.open('Dados salvos com sucesso.', 'Entendi',
          { duration: 5000 })
        // 3) Voltar para a tela de listagem
        this.location.back()
      }
    }
    catch(erro) {
      console.log(erro)
      this.snackBar.open('ERRO: não foi possível salvar os dados.', 'Que pena!',
        { duration: 5000 })
    }
  }

  voltar(form : NgForm) {
    let result = true
    // form.dirty = formulário "sujo", não salvo (via código)
    // form.touched = o conteúdo de algum campo foi alterado (via usuário)
    if(form.dirty && form.touched) {
      result = confirm('Há dados não salvos. Deseja realmente voltar?')
    }
    // Retorna à página anterior se resposta foi positiva ou se o formulário
    // estiver "limpo"
    if(result) this.location.back()
  }

}