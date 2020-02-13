import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrowdfundingComponent } from './crowdfunding.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CrowdfundingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
			{
				path: '',
				component: CrowdfundingComponent
			},
		]),
  ]
})
export class CrowdfundingModule { }
