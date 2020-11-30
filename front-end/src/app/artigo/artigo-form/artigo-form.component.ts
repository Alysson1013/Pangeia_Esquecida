import { MatSnackBar } from '@angular/material/snack-bar';
import { ArtigoService } from './../artigo.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CriaturaService } from 'src/app/criatura/criatura.service';
import { PaleontologoService } from 'src/app/paleontologo/paleontologo.service';
import { PeriodoService } from 'src/app/periodo/periodo.service';

@Component({
  selector: 'app-artigo-form',
  templateUrl: './artigo-form.component.html',
  styleUrls: ['./artigo-form.component.scss']
})
export class ArtigoFormComponent implements OnInit {

  title : string = 'Novo artigo'

  artigo : any = {} // Objeto vazio, nome da entidade no SINGULAR

  criaturas : any = []
  paleontologos : any = []
  periodos : any = []

  constructor(
    private criaturaSrv : CriaturaService,
    private paleontologoSrv : PaleontologoService,
    private periodoSrv : PeriodoService,
    private artigoSrv : ArtigoService,
    private snackBar : MatSnackBar,
    private location : Location,
    private actRoute : ActivatedRoute
  ) { }

  async ngOnInit() {
    // Verificando se existe id na rota que trouxe ao formulário
    if(this.actRoute.snapshot.params['id']) {
      try {
        // 1) Trazer o registro do back-end para edição
        this.artigo = await this.artigoSrv.obterUm(this.actRoute.snapshot.params['id'])
        // 2) Mudar o título da página
        this.title = 'Editando artigo'
      }
      catch(erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível carregar os dados para edição.',
          'Que pena!', { duration: 5000 })
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
  
  async salvar(form : NgForm) {
    try {
      if(form.valid) {
        // 1) Enviar os dados para o back-end para serem salvos
        if(this.artigo._id) {
          // _id existe, esse registro já foi salvo anteriormente
          // no BD e é caso de atualização
          await this.artigoSrv.atualizar(this.artigo)
        }
        else {
          await this.artigoSrv.novo(this.artigo)
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
    if(form.dirty && form.touched) {
      result = confirm('Há dados não salvos. Deseja realmente voltar?')
    }
    if(result) this.location.back()
  }

}