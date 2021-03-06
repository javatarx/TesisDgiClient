import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';


const routes: Routes = [
    {
        path: '', 
        component: ShellComponent,
        children: [
            // {
                // path: '',
                // pathMatch: 'full',
                // redirectTo: 'home'
            // },
            {
                path: '',
                loadChildren: '../home/home.module#HomeModule',
                data: {
                    title: 'Home'
                }
            },
            {
                path: 'about',
                loadChildren: '../about/about.module#AboutModule',
                data: {
                    title: 'About'
                }
            },
            {
                path: 'procesos',
                loadChildren: '../procesos/procesos.module#ProcesosModule',
                data: {
                    title: 'Procesos'
                }
            },
            {
                path: 'proyectos',
                loadChildren: '../proyectos/proyectos.module#ProyectosModule',
                data: {
                    title: 'Proyectos'
                }
            },
            {
                path: 'seguimientos',
                loadChildren: '../seguimientos/seguimientos.module#SeguimientosModule',
                data: {
                    title: 'Seguimientos'
                }
            },
            {
                path: 'auth',
                loadChildren: '../auth/auth.module#AuthModule',
                data: {
                    title: 'Auth'
                }
            },
            {
                path: 'linea-investigacions',
                loadChildren: '../linea-investigacions/linea-investigacions.module#LineaInvestigacionsModule',
                data: {
                    title: 'Linea-investigacions'
                }
            },
            {
                path: 'escuelas',
                loadChildren: '../escuelas/escuelas.module#EscuelasModule',
                data: {
                    title: 'Escuelas'
                }
            }
            // ,
            // {
            //     path: '**', //para casos not found
            //     redirectTo: '',
            //     pathMatch: 'full'
            // }
        ],
    }
];
    
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule { }

// export const routedComponents = [NameComponent];