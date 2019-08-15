import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./tabs/tabs-component.module').then(m => m.TabsComponentModule)
    },
    {
        path: 'welcome',
        loadChildren: () => import('./welcome-wizard/welcome-wizard-component.module').then(m => m.WelcomeWizardComponentModule)
    },

    {path: '', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
