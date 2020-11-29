import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CriaturaService } from './../criatura.service';
import { PaleontologoService } from 'src/app/paleontologo/paleontologo.service';
import { PeriodoService } from 'src/app/periodo/periodo.service';

@Component({
  selector: 'app-criatura-form',
  templateUrl: './criatura-form.component.html',
  styleUrls: ['./criatura-form.component.scss']
})
export class CriaturaFormComponent implements OnInit {

  title : string = 'Nova criatura'

  criatura : any = {} // Objeto vazio, nome da entidade no SINGULAR

  dieta : any = [
    { val: 'Carnívoro', descr: 'Carnívoro' },
    { val: 'Herbívoro', descr: 'Herbívoro '},
    { val: 'Onívoro', descr: 'Onívoro' },
    { val: 'Fotossíntese', descr: 'Fotossíntese' },
  ]

  // Variáveis para armazenas as listagens das entidades relacionadas
  paleontologos : any = []   // Nome no plural, vetor vazio
  periodos : any = []

  constructor(
    private criaturaSrv : CriaturaService,
    private paleontologoSrv : PaleontologoService,
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
        this.criatura = await this.criaturaSrv.obterUm(this.actRoute.snapshot.params['id'])
        // 2) Mudar o título da página
        this.title = 'Editando criatura'
      }
      catch(erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível carregar os dados para edição.',
          'Que pena!', { duration: 5000 })
      }
    }

    // Carregar as listagens das entidades relacionadas
    try {
      this.paleontologos = await this.paleontologoSrv.listar()
      this.periodos = await this.periodoSrv.listar()
    }
    catch(erro) {
      console.log(erro)
      this.snackBar.open('ERRO: não foi possível carregar todos os dados do formulário.',
        'Que pena!', { duration: 5000 })
    }
  }

  async salvar(form : NgForm) {
    try {
      if(form.valid) {
        // 1) Enviar os dados para o back-end para serem salvos
        if(this.criatura._id) {
          // _id existe, esse registro já foi salvo anteriormente
          // no BD e é caso de atualização
          await this.criaturaSrv.atualizar(this.criatura)
        }
        else {
          await this.criaturaSrv.novo(this.criatura)
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