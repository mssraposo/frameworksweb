import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from './services/atendimento.service';
import { Atendimento } from './models/atendimento';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  atendimento = {} as Atendimento;
  atendimentos: Atendimento[] = [];

  constructor(private atendimentoService: AtendimentoService) {}
  
  ngOnInit() {
    this.getAtendimentos();
  }

  // defini se um atendimento será criado ou atualizado
  saveAtendimento(form: NgForm) {
    if (this.atendimento.id !== undefined) {
      this.atendimentoService.saveAtendimento(this.atendimento).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.atendimentoService.saveAtendimento(this.atendimento).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os atendimentos
  getAtendimentos() {
    this.atendimentoService.getAtendimentos().subscribe((atendimentos: Atendimento[]) => {
      this.atendimentos = atendimentos;      
    });
  }

  // deleta um atendimento
  deleteAtendimento(atendimento: Atendimento) {
    this.atendimentoService.deleteAtendimento(atendimento).subscribe(() => {
      this.getAtendimentos();
    });
  }

  // copia o atendimento para ser editado.
  editAtendimento(atendimento: Atendimento) {
    this.atendimento = { ...atendimento };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getAtendimentos();
    form.resetForm();
    this.atendimento = {} as Atendimento;
  }

}