import { ContentManagerComponent } from './../content-manager/content-manager.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { MyPageComponent } from './../my-page/my-page.component';
import { NgbootstrapModule } from './../ngbootstrap/ngbootstrap.module';
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { DashboardComponent } from './dashboard.component';

import {MatTabsModule} from '@angular/material/tabs';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ArtComponent } from './art/art.component';
import { FilComponent } from './fil/fil.component';
import { MusicComponent } from './music/music.component';
import { PhotographyComponent } from './photography/photography.component';
import { SettingComponent } from './setting/setting.component';
import { DashboardCompetitionsComponent } from './dashboard-competitions/dashboard-competitions.component';


// NgbootstrapModule

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		MatTabsModule,
		
		RouterModule.forChild([
			{
				path: '',
				component: DashboardComponent
			},
		]),
		// NgbootstrapModule,
	],
	providers: [],
	declarations: [
		DashboardComponent,
		MyPageComponent,
		CompetitionsComponent,
		ContentManagerComponent,
		PortfolioComponent,
		ArtComponent,
		FilComponent,
		MusicComponent,
		PhotographyComponent,
		SettingComponent,
		DashboardCompetitionsComponent
	]
})
export class DashboardModule {
}
