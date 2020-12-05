import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Atendimento } from '../models/atendimento';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  private resource = 'atendimento';
  api = environment.urlBase+'/'+this.resource;

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os atendimentos
  getAtendimentos(): Observable<Atendimento[]> { 

    return this.httpClient.get<Atendimento[]>(this.api)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem um atendimento pelo id
  getAtendimentoById(id: number): Observable<Atendimento> {
    return this.httpClient.get<Atendimento>(this.api + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva um atendimento
  saveAtendimento(atendimento: Atendimento): Observable<Atendimento> {
    return this.httpClient.post<Atendimento>(this.api, JSON.stringify(atendimento), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // utualiza um atendimento
  updateAtendimento(atendimento: Atendimento): Observable<Atendimento> {
    return this.httpClient.put<Atendimento>(this.api + '/' + atendimento.id, JSON.stringify(atendimento), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta um atendimento
  deleteAtendimento(atendimento: Atendimento) {
    return this.httpClient.delete<Atendimento>(this.api + '/' + atendimento.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}