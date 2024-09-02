import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CustomercareComponent } from './customercare/customercare.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { TelevisionComponent } from './television/television.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'cust', component:CustomercareComponent},
    {path:'pro', component:ProductDetailsComponent},
    {path:'image', component:ProductImageComponent},
    {path:'television', component:TelevisionComponent},
    {path:'**', component:PageNotFoundComponent},

    {path:'', redirectTo:'home', pathMatch:'full'}
    
];
