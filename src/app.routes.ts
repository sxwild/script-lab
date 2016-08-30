import {provideRouter, RouterConfig} from '@angular/router';
import {
    AddinLauncherComponent,
    HomeComponent, NewComponent, EditorComponent, RunComponent, 
    ShareComponent, ImportComponent, ViewComponent,
    } from './components';

export const AppRoutes: RouterConfig = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'addin/:host',
        component: AddinLauncherComponent
    },
    {
        path: 'new',
        component: NewComponent
    },
    {
        path: 'edit/:id',
        component: EditorComponent
    },
    {
        path: 'run/:id/:returnToEdit',
        component: RunComponent
    },
    {
        path: 'share/:id',
        component: ShareComponent
    },
    {
        path: 'import',
        component: ImportComponent
    },
    {
        path: 'view/:id',
        component: ViewComponent
    }
];

export const routes: RouterConfig = [
    ...AppRoutes,
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
