import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpResponse, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Proyecto } from '../models/proyecto';

class Options {
  count: number;
  pages: number;
  page: number;
  next: number;
  previous: number;
  range: string;
  page_size: number; 
}

interface IResponse {
  options: Options;
  results: Proyecto[];
}

@Injectable()
export class ProyectoService {



  constructor(private http: HttpClient) { }

  /**
   * Método para recuperar todos los proyectos
   * @return Retorna Muchos Observables de tipo Proyecto.
   */
  public getProyectos$(): Observable<IResponse> {
    let apiUrl = environment.apiUrl;
    return this.http.get<IResponse>(`${apiUrl}proyecto/proyectos/`);
      // .map(res => res.results);
  }
  
  /**
   * Metodo para buscar proyectos
   * @param queryTitulo Busqueda del Titulo.
   * @return Retorna muchos Observables de tipo proyecto
   */
  public searchProyectos$(queryTitulo: string): Observable<IResponse> {
    let apiUrl = environment.apiUrl;
    const params = new HttpParams()
                    .set('search', queryTitulo);
    return this.http.get<IResponse>(`${apiUrl}proyecto/proyectos/`, { params })
      // .catch(this.handleError);
      // .map((res: Response) => res.json() || []);
  }
  
  /**
   * Metodo para recuperar un proyecto.
   * @param id clave primaria del proyecto
   * @return Uno observable de tipo Proyecto.
   */
  // public retriveProyecto$(id: string): Observable<Proyecto> {
    // let apiUrl = environment.apiUrl;
    // return this.http.get<Proyecto>(`${apiUrl}/proyecto/proyectos/${id}`);
      // .map((res: Response) => res.json() || []);
  // }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
