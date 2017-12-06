import { Proceso } from '../../procesos/modelos/proceso.model';
import { ProcesoService } from '../../procesos/shared/proceso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dgi-seg-procesos',
  templateUrl: './procesos.component.html',
  styleUrls: ['./procesos.component.scss']
})
export class ProcesosComponent implements OnInit {
  public procesos: Proceso[];

  constructor(private procesoService:ProcesoService) { }

  ngOnInit() {
    this.getProcesos();
  }

  getProcesos(){
    this.procesoService.getRecentProcesos()
      .then(res => {
        this.procesos = res.results;
        console.log(res.options);
      },
      err => {
        console.log("ERROR: ", err);
      })
  }

}
