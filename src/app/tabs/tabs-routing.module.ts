import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsComponent} from './tabs.component';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsComponent,
        children: [
            {
                path: 'current-status-tab',
                loadChildren: () => import('./current-status-tab/current-status-tab.component.module').then(m => m.CurrentStatusTabComponentModule),
            },
            {
                path: 'timeline',
                loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
