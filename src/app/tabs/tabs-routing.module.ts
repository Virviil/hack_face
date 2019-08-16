import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsComponent} from './tabs.component';
import {CurrentStatusTabResolver} from './current-status-tab/current-status-tab.resolver';
import {TimelineTabResolver} from './timeline-tab/timeline-tab.resolver';
import { RightTabComponent } from './right-tab/right-tab.component';

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
                loadChildren: () => import('./timeline-tab/timeline-tab.module').then(m => m.TimelineTabModule),
                resolve: {data: TimelineTabResolver}
            },
            {
                path: 'right',
                loadChildren: () => import('./right-tab/right-tab-component.module').then(m => m.RightTabComponentModule)
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
