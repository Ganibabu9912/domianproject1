import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';

import { SignupComponent } from './signup/signup.component';



import { ContactComponent } from './contact/contact.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { CategoriesComponent } from './categories/categories.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [

    // {
    //     path:'',
    //     redirectTo:'login',
    //     pathMatch:'full'
    // },
    // {
    //     path:'login',
    //     component:LoginComponent
    // },
    // {
    //     path:'',
    //     component:HomeComponent,
        
    // },

    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
  
    {
        path:'',
        component:HomeComponent,
        
    },
    {
path:"admin",
component:AdminComponent,
    },

    {
        path:"home",component:HomeComponent
        },
        
    {
    path:"about",component:AboutComponent
    },
    
    {
        path:"signup",component:SignupComponent
    },
    {
        path:"contact",component:ContactComponent
    },
    {
        path:"mycourses",component:MycoursesComponent
    }
];


