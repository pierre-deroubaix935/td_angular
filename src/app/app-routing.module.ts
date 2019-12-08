import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "result", component: ResultComponent },
    {path: "form", component: FormComponent},
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
