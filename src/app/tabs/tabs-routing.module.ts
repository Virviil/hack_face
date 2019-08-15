import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsComponent} from './tabs.component';
import {CurrentStatusTabResolver} from './current-status-tab/current-status-tab.resolver';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsComponent,
        children: [
            {
                path: 'current-status-tab',
                loadChildren: () => import('./current-status-tab/current-status-tab.component.module').then(m => m.CurrentStatusTabComponentModule),
                resolve: {data: CurrentStatusTabResolver}
            },
            {
                path: 'timeline',
                loadChildren: () => import('./timeline-tab/timeline-tab.module').then(m => m.TimelineTabModule)
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
