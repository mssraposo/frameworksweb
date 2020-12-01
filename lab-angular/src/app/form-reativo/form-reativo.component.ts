import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reativo',
  templateUrl: './form-reativo.component.html',
  styleUrls: ['./form-reativo.component.css']
})
export class FormReativoComponent implements OnInit {

  formularioCadastro : FormGroup;
    
  constructor() { 
    
  this.formularioCadastro = new FormGroup({
    'name': new FormControl(null, Validators.required), 
    'phone': new FormControl(null, Validators.required ),
    'document': new FormControl(null, Validators.required)});  
  }
 
  ngOnInit() { }
    
  onSubmit(){
    let dados = `
    name: ${this.formularioCadastro.value.name} 
    Phone: ${this.formularioCadastro.value.phone}
    Document: ${this.formularioCadastro.value.document}`;
     
    console.log(dados);            
  }   

}
