import { Component, OnInit, Output, Input, EventEmitter, } from '@angular/core';
import { Location } from '@angular/common';
import { TdMediaService } from '@covalent/core'; 

@Component({
  selector: 'dgi-sidenav',
  templateUrl: './sidenav.component.html',
  styles: []
})
export class SidenavComponent implements OnInit {
  // @Input() isSidenavOpened: boolean;
  // @Output() sidenavOpendedChange = new EventEmitter();

  constructor(private location: Location,
              public media: TdMediaService) { }

  ngOnInit() {
    // this.sidenavOpendedChange.emit(this.isSidenavOpened);
  }

  public navGroups: Object[] = [
    {
      Id: 1,
      Titulo: "GENERAL",
      navItems: [
        { name: 'About', icon:'info', route: 'about' },
        { name: 'Procesos', icon:'view_list', route: 'procesos' },
        { name: 'Proyectos', icon:'school', route: 'proyectos' },
        { name: 'Seguimiento', icon:'cached', route: 'seguimiento' },
      ] 
    },
    {
      Id: 2,
      Titulo: "CONFIGURACIÓN",
      navItems: [
        { name: 'Configuración', icon:'settings', route: 'config' },
        { name: 'Ayuda', icon:'help', route: 'help' },
        { name: 'Auth', icon:'beenhere', route: 'auth' },
        { name: 'Cerrar Sesión', icon:'exit_to_app', route: 'logout' }
      ] 
    }
  ]
  
  public layoutClose(){
    console.log("Me da Click")
  }

}
