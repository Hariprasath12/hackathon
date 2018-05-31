import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleviewComponent } from './components/singleview/singleview.component';
import { ListComponent } from './components/list/list.component';
const routes: Routes = [{
  path: '',
  component: ListComponent
}, {
  path: 'name/:name',
  component: SingleviewComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
