import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'wizards/welcome', pathMatch: 'full'},

    {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule)
    },
    {
        path: 'wizards/welcome',
        loadChildren: () => import('./wizards/welcome-wizard/welcome-wizard.module').then(m => m.WelcomeWizardModule)
    },
    {
        path: 'wizards/driver-wizard',
        loadChildren: () => import('./wizards/driver-wizard/driver-wizard.module').then(m => m.DriverWizardModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
