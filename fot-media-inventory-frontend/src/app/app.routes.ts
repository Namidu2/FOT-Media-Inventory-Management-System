import { Routes } from "@angular/router";

import { Login } from "./auth/login/login";
import { Layout } from './layout/layout';
import { Dashboard } from "./dashboard/dashboard";

import { Inventory } from './inventory/inventory';
import { Issue } from './issue/issue';
import { Return } from './return/return';
import { Users } from './users/users';
import { Categories } from './categories/categories';
import { Reports } from './reports/reports';
import { Settings } from './settings/settings';



export const routes: Routes = [
    {
        path: '',
        component: Login
    },

    {

        path: '',
        component: Layout,

        children: [
            {
               path: 'dashboard',
               component: Dashboard 

            },

            {
                path:'inventory',
                component: Inventory
            },

            {
                path:'issue',
                component:Issue
            },

            {
                path:'return',
                component:Return
            },

            {
                path:'users',
                component:Users
            },

            {
                path:'categories',
                component:Categories
            },

            {
                path:'reports',
                component:Reports
            },

            {
                path:'settings',
                component:Settings
            }
        ]
        
    }
];