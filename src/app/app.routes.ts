import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'
import { HomeComponent } from "./views/home/home.component"
import { AboutComponent } from "./views/about/about.component"

declare var window



//redirector()
export const router: Routes = [
    {   path : '', redirectTo: 'home',     pathMatch: 'full',               data: { animation: { value: 'misc' } } },

    {   path : 'home',      component: HomeComponent,                       data: { animation: { value: 'home' } } },
    {   path : 'about',     component: AboutComponent,                      data: { animation: { value: 'about' } } },
    
    {   path : '**',        component: HomeComponent,                       data: { animation: { value: 'misc' } } }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router); 

// function redirector(){
//     let type = window.getLocal('type')
//     if (!type) return 'home/browse'
//     if (type == 'user') return 'user/home/browse'
//     if (type == 'entertainer') return 'entertainer/home/browse'
//     return 'home/browse'
// }