import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './components/work/work.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { MainComponent } from './components/main/main.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MyServicesComponent } from './components/my-services/my-services.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'work', component: WorkComponent},
  {path: 'about', component: AboutMeComponent},
  {path: 'services', component: MyServicesComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: ''},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
