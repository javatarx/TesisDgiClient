import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Campo, ICampo } from '../models/campo';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MatSnackBar } from '@angular/material';
import { environment } from '../../../environments/environment';
import { MESSAGES } from '../../../config/messages';
import { snackBarDuration } from '../../../config/general';
import { CampoBase } from '../models/campo-base';
import { CampoSelect } from '../models/campo-select';
import { CampoInput } from '../models/campo-input';

@Injectable()
export class CampoService {
  campos: Observable<Campo[]>;
  private _campos: BehaviorSubject<Campo[]>;
  private dataStore: {
    campos: Campo[]
  }
  constructor(private http: HttpClient,
    private snackBar: MatSnackBar) {

    this.dataStore = { campos: [] };

    this._campos = <BehaviorSubject<Campo[]>> new BehaviorSubject([]);
    this.campos = this._campos.asObservable();
  }

  public getAllCampos() {
    let apiUrl = environment.apiUrl;

    return this.http
      // .get<ICampo[]>(`${apiUrl}proceso/campos/?all=true`)
      .get<ICampo[]>(`${apiUrl}proceso/campos/`)
      .subscribe(data => {
        
        this.snackBar.open(MESSAGES.campo.getMany, MESSAGES.actions.get, snackBarDuration);

        this.dataStore.campos = data;
        this._campos.next(Object.assign({}, this.dataStore).campos);
      }, error => console.log('Could not load campos.')
      )
  }

  public getCamposByFormularioId(formularioId: string) {
    let apiUrl = environment.apiUrl;
    
    return this.http
      .get<ICampo[]>(`${apiUrl}proceso/formularios/${formularioId}/campos/`)
      .subscribe(data => {

        this.snackBar.open(MESSAGES.campo.getMany, MESSAGES.actions.get, snackBarDuration);
        this.dataStore.campos = data;
        this._campos.next(Object.assign({}, this.dataStore).campos);
      }, error => console.log('Could not load campos.')
      )
  }

  public getCamposByFormularioId$(formularioId: string): Observable<ICampo[]> {
    let apiUrl = environment.apiUrl;
    
    return this.http
      .get<ICampo[]>(`${apiUrl}proceso/formularios/${formularioId}/campos/`);
      // .subscribe(data => {

        // this.snackBar.open(MESSAGES.campo.getMany, MESSAGES.actions.get, snackBarDuration);
        // this.dataStore.campos = data;
        // this._campos.next(Object.assign({}, this.dataStore).campos);
      // }, error => console.log('Could not load campos.')
      // )
  }


  public getCampos() {
    let campos: CampoBase<any>[] = [
      new CampoSelect({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),
      new CampoInput({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1,
        max: 10,
        min: 0
      }),
      new CampoInput({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        required: true,
        order: 2,

      })
    ]

    return campos.sort((a, b) => a.order - b.order); 
  }

}
