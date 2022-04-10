import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './components/work/work.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path: 'work', component: WorkComponent},
  {path: '**', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
