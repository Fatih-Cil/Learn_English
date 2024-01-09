import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnglishTurkishComponent } from './pages/english-turkish/english-turkish.component';
import { TurkishEnglishComponent } from './pages/turkish-english/turkish-english.component';

const routes: Routes = [
  {path:"",component:EnglishTurkishComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
