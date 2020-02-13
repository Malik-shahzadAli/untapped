import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore.component';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { SearchComponent } from './search/search.component';
import { JobsComponent } from './jobs/jobs.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';


@NgModule({
  declarations: [ExploreComponent, SearchComponent, JobsComponent, CollaboratorsComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule.forChild([
			{
				path: '',
				component: ExploreComponent
			},
		]),
  ]
})
export class ExploreModule { }
