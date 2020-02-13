import { CrowdfundingModule } from './views/pages/crowdfunding/crowdfunding.module';
import { CompetitionsModule } from './views/pages/competitions/competitions.module';

import { HomeModule } from './views/pages/home/home.module';
// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { BaseComponent } from './views/theme/base/base.component';
import { ErrorPageComponent } from './views/theme/content/error-page/error-page.component';
// Auth
import { AuthGuard } from './core/auth';
import { HomeComponent } from './views/pages/home/home.component';

const routes: Routes = [

	//{path: 'auth', loadChildren: () => import('app/views/pages/auth/auth.module').then(m => m.AuthModule)},
	 {
	 	path:'',
	 	loadChildren: () => import('app/views/pages/landing-page/landing-page.module').then(m => m.LandingPageModule2)

	 },
	{
		path: 'loggedIn',
		component: BaseComponent,
		// canActivate: [AuthGuard],
		children: [

			{
				path: 'dashboard',
				loadChildren: () => import('app/views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
			},
			{
				path:'home',
				loadChildren: () => import('app/views/pages/home/home.module').then(m => m.HomeModule)
			},
			{
				path: 'explore',
				loadChildren: () => import('app/views/pages/explore/explore.module').then(m => m.ExploreModule)
			},
			{
				path: 'competitions',
				loadChildren: () => import('app/views/pages/competitions/competitions.module').then(m => m.CompetitionsModule)
			},
			{
				path: 'crowdfunding',
				loadChildren: () => import('app/views/pages/crowdfunding/crowdfunding.module').then(m => m.CrowdfundingModule)
			},
			{
				path: 'error/403',
				component: ErrorPageComponent,
				data: {
					'type': 'error-v6',
					'code': 403,
					'title': '403... Access forbidden',
					'desc': 'Looks like you don\'t have permission to access for requested page.<br> Please, contact administrator'
				}
			},
			{path: 'error/:type', component: ErrorPageComponent},
			{path: 'loggedIn', redirectTo: 'home', pathMatch: 'full'},
			{path: '**', redirectTo: 'landing', pathMatch: 'full'}
		]
	},
	{path: '', redirectTo: 'landing', pathMatch: 'full'},
	{path: '**', redirectTo: 'error/403', pathMatch: 'full'},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
