import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';


const routes: Routes = [
  {
    path: '',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [NotFoundComponent],
})
export class NotFoundModule {}
