import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { TesisProceso } from './shared/tesis-proceso';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TesisProcesoService } from './shared/tesis-proceso.service';


@Component({
    selector: 'dialog-nuevo-proyecto',
    template: `
    <!-- <h1 mat-dialog-title>Hi {{data.name}}</h1> -->
    <h3 mat-dialog-title>NUEVO PROYECTO</h3>
    <form [formGroup]="tesisProcesoForm" (ngSubmit)="onSubmit()" novalidate>
      <div mat-dialog-content>
        <p class="p-small">Ingrese un nombre tentativo al proyecto</p>
        <mat-form-field class="full-width">
        <!-- <input matInput tabindex="1" [(ngModel)]="data.animal"> -->
          <textarea matInput #nombreProject tabindex="3" formControlName="nombre_proyecto" 
          maxlength="{{ lengtMaxNombreTesis }}"
          minlength="{{ lengtMinNombreTesis }}"></textarea>
          <mat-hint align="end">{{nombreProject.value.length}} / {{ lengtMaxNombreTesis }}</mat-hint>
        </mat-form-field>
  
      </div>
      <div mat-dialog-actions>
        <button mat-button 
          type="submit"
          [disabled] = "!tesisProcesoForm.valid"
          tabindex="1">ACEPTAR</button>
        <!-- [mat-dialog-close]="tesisProcesoForm.value" -->
        <!-- <button mat-button [mat-dialog-close]="tesisProcesoForm.value" tabindex="1">ACEPTAR</button> -->
        <button mat-button 
          type="button"
          [disabled] = "tesisProcesoForm.pristine"
          (click)="onNoClick()" 
          tabindex="-1">CANCELAR</button>
      </div>
    </form>  
    `,
    styles: [`
    .p-small { 
      font-size: small; 
      opacity: 0.8 
    }
    .full-width {
      width: 100%;
    }
    `]
  })  
export class DialogNuevoTeProcesoComponent implements OnInit{
  
    private tesisProcesoForm: FormGroup;
    public tesisProceso: TesisProceso = new TesisProceso();
    public lengtMaxNombreTesis: number=250;
    public lengtMinNombreTesis: number=10;
  
    constructor(
      public dialogRef: MatDialogRef<DialogNuevoTeProcesoComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private formBuilder: FormBuilder,
      private tesisProcesoService: TesisProcesoService,
    ) { }
  
    ngOnInit() { 
      this.builForm();
    }
  
    onNoClick(): void {
      let data = {
        submit: false,
        realData: { } 
      }
      this.dialogRef.close(data);
    }
  
    onSubmit(): void{
      const tesisProceso = this.tesisProcesoForm.value;
      const valid = this.tesisProcesoForm.valid;
      if(valid){
        let data = {
          submit: true,
          realData: tesisProceso 
        }
        this.dialogRef.close(data);
        this.tesisProcesoForm.reset();
      }
    }
  
    initializeControls(){
      const controls = {
        nombre_proyecto: [
          this.tesisProceso.nombre_proyecto,
          [
            Validators.required,
            Validators.minLength(this.lengtMinNombreTesis), 
            Validators.maxLength(this.lengtMaxNombreTesis)
          ]
        ],
        id: [],
        fecha_inicio: [],
        fecha_fin: [],
        estado: []
      }
      return controls;
    }
  
    builForm(){
      const controls = this.initializeControls();
      this.tesisProcesoForm = this.formBuilder.group(controls);
    }
  }