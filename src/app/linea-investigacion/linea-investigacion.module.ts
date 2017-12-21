import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineaInvestigacionRoutingModule } from './linea-investigacion-routing.module';
import { FindLineaInvestigacionPageComponent } from './containers/find-linea-investigacion-page.component';
import { AngularModule } from '../shared/angular/angular.module';
import { MaterialModule } from '../shared/material/material.module';
import { LineaInvestigacionSearchComponent } from './components/linea-investigacion-search.component';
import { LineaInvestigacionListComponent } from './components/linea-investigacion-list.component';
import { UtilsModule } from '../shared/components/utils.module';
import { CreateLineaInvestigacionDialogComponent } from './containers/create-linea-investigacion-dialog/create-linea-investigacion-dialog.component';
import { LineaInvestigacionService } from './shared/linea-investigacion.service';
import { EscuelaService } from '../escuela/shared/escuela.service';

@NgModule({
  imports: [
    CommonModule,
    AngularModule,
    MaterialModule,
    UtilsModule,

    LineaInvestigacionRoutingModule
  ],
  declarations: [
    FindLineaInvestigacionPageComponent,
    
    LineaInvestigacionSearchComponent,
    LineaInvestigacionListComponent,
    CreateLineaInvestigacionDialogComponent
  ],
  providers: [
    LineaInvestigacionService,
    EscuelaService,
  ],
  entryComponents: [
    CreateLineaInvestigacionDialogComponent
  ]
})
export class LineaInvestigacionModule { }
