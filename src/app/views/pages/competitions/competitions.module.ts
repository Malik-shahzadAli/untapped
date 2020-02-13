import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionsComponent } from './competitions.component';
import { RouterModule } from '@angular/router';
import { HeadToHeadCompitionsComponent } from './head-to-head-compitions/head-to-head-compitions.component';
import {MatTabsModule} from '@angular/material/tabs';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ViewUserDetailsComponent } from './view-user-details/view-user-details.component';
import { VoteComponent } from './vote/vote.component';


@NgModule({
  declarations: [CompetitionsComponent, HeadToHeadCompitionsComponent, LeaderboardComponent, ViewUserDetailsComponent, VoteComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule.forChild([
			{
				path: '',
				component: CompetitionsComponent
      },
      {
        path: 'head-to-head',
        component: HeadToHeadCompitionsComponent
      },
      {
        path: 'user-details',
        component: ViewUserDetailsComponent
      }
		]),
  ]
})
export class CompetitionsModule { }
