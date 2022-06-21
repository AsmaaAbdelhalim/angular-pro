import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RegisterComponent } from './register/register.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogListComponent } from './blog-list/blog-list.component';


const routes: Routes = [
    {path: "blogs", children: [
      {path: "", component: BlogListComponent},
      //{path: "blog-details/:id", component: BlogDetailsComponent}  
    ]},
    
    {path: "product-details/:id", component: BlogDetailsComponent},
  {path: "home",component:HomeComponent},
  {path: "login",component:LoginComponent},
  {path: "register",component:RegisterComponent},
  { path: "portfolio", component:PortfolioComponent  },
  { path: "product", component:CategoryComponent },
  {path:"**",component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
