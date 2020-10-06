import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CVComponent } from './cv/cv.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ProjekterComponent } from './projekter/projekter.component';


const routes: Routes = [
  { path: 'Forside', component: FrontpageComponent },
  { path: 'Om', component: AboutComponent },
  { path: 'CV', component: CVComponent },
  { path: 'Kontakt', component: KontaktComponent },
  { path: 'Projekter', component: ProjekterComponent },
  { path: '', component: FrontpageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
