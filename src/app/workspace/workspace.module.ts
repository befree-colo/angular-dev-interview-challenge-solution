import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DurationPipe } from './duration.pipe';
import { WorkspaceComponent } from './workspace.component';

const routes: Routes = [
  {
    path: '',
    component: WorkspaceComponent,
    data: {
      routeKey: 'workspace-key',
      routeReuse: true,
    },
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [DurationPipe, WorkspaceComponent],
})
export class WorkspaceModule {}
