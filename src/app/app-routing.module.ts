import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: '/welcome', pathMatch: 'full'},

    {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule)
    },
    {
        path: 'welcome',
        loadChildren: () => import('./welcome-wizard/welcome-wizard.module').then(m => m.WelcomeWizardModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
