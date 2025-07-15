import { Routes } from "@angular/router";

export const DASH_ROUTES: Routes = [
    { 
        path : '',
        loadComponent: () => import('./index/index.component').then(m => m.IndexComponent)
    },    
    { 
        path : 'index',
        loadComponent: () => import('./index/index.component').then(m => m.IndexComponent)
    }
]